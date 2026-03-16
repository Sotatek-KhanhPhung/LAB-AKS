export default {
    HOST: process.env.DB_HOST, //|| "localhost",
    USER: process.env.DB_USER, //|| "root",
    PASSWORD: process.env.DB_PASSWORD, //|| "",
    DB: process.env.DB_NAME, //|| "testdb",
    PORT: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
