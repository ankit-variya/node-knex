
exports.up = function(knex, _Promise) {
    return knex.schema.createTable('posts', function (table) {
		table.increments('id').primary();
		table.string('title', 100).notNullable();
        table.string('description', 1000).notNullable();
		table.timestamp('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
		table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
	})
};

exports.down = function(knex, _Promise) {
  
};
