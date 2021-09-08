
exports.up = function(knex, _Promise) {
    return knex.schema.createTable('ratings', function (table) {
		table.increments('id').primary();
		table.integer('rating', 10).notNullable();
        table.integer('postId', 10).notNullable();
		table.timestamp('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
		table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
	})
};

exports.down = function(knex, _Promise) {
  
};
