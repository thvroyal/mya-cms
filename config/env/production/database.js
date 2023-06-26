module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'mya-cms'),
			user: env('DATABASE_USERNAME', 'mya-cms'),
			password: env('DATABASE_PASSWORD', 'mya-cms'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
