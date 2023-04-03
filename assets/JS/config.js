const config = {
    development: {
        database: {
            host: 'localhost',
            port: 5432,
            name: 'mydatabase',
            dialect: 'postgres',
            user: 'myuser',
            password: 'mypassword',
        },
    },
    production: {
        // información de configuración para producción
    },
};

module.exports = config;