/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary();
        table.string('nome', 100).notNullable();
        table.string('email', 150).notNullable().unique();
        table.string('telefone', 20);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};
