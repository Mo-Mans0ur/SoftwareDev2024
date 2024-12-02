/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema    
        .createTable('products3', (table) => {
           table.increments('id').notNullable().unsigned().primary();
           table.decimal('price').notNullable();
           table.string('name').notNullable();

        })    
        .createTable('users3', (table) => {
           table.increments('id').notNullable().unsigned().primary();
           table.string('first_name').notNullable();
           table.string('last_name').notNullable();

        })        
};

exports.down = function(knex) {
    return knex.schema
           .dropTable('users')
           .dropTable('products3');
};
