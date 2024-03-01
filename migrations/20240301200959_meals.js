/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('meals', (table) => {
    table.uuid('id').primary().defaultTo(knex.fn.uuid());
    table.string('lunch');
    table.string('dinner');
    table.uuid('id_days').notNullable();
    table.uuid('id_users').notNullable();
    table.foreign('id_days').references('id').inTable('days');
    table.foreign('id_users').references('id').inTable('users');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('meals');
};
