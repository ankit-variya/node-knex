
let connection = {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : '',
    database : 'demo'
};

module.exports = {
	client: "mysql",
	connection: connection,
	pool: {
		min: 2,
		max: 20,
	},
	acquireConnectionTimeout: 60000,
	migrations: {
        directory: __dirname + '/migrations',
		tableName: "migrations",
	},
};

