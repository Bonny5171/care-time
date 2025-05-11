/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('agendamentos', table => {
        table.increments('id').primary();
        table.integer('usuario_id').notNullable().references('id').inTable('usuarios').onDelete('CASCADE');
        table.integer('exame_id').notNullable().references('id').inTable('exames').onDelete('CASCADE');
        table.timestamp('data_hora').notNullable();
        table.text('observacoes');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('agendamentos');
};
