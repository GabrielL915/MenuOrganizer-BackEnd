/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('days', (table) => {
    table.uuid('id').primary().defaultTo(knex.fn.uuid());
    table.boolean('monday').defaultTo(false);
    table.boolean('tuesday').defaultTo(false);
    table.boolean('wednesday').defaultTo(false);
    table.boolean('thursday').defaultTo(false);
    table.boolean('friday').defaultTo(false);
    table.boolean('saturday').defaultTo(false);
    table.boolean('sunday').defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('days');
};
