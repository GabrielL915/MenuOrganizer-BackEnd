/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.raw(`
      CREATE OR REPLACE FUNCTION create_week_meals_for_new_user()
      RETURNS TRIGGER AS $$
      DECLARE
        days_of_week TEXT[] := ARRAY[  'segunda','terca','quarta','quinta','sexta','sabado','domingo'];
        day TEXT;
      BEGIN
        FOREACH day IN ARRAY days_of_week LOOP
          INSERT INTO meals (id, day_of_week, id_users) VALUES (uuid_generate_v4(), day, NEW.id);
        END LOOP;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `).raw(`
      CREATE TRIGGER trigger_create_week_meals_after_user_creation
      AFTER INSERT ON users
      FOR EACH ROW
      EXECUTE FUNCTION create_week_meals_for_new_user();
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .raw(
      `DROP TRIGGER IF EXISTS trigger_create_week_meals_after_user_creation ON users;`,
    )
    .raw(`DROP FUNCTION IF EXISTS create_week_meals_for_new_user;`);
};
