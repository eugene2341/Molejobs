require("dotenv").config();

const dbConfig = {
    user: process.env.RDS_USERNAME,
    host: process.env.RDS_HOSTNAME,
    database: process.env.RDS_DB_NAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    ssl: {
        rejectUnauthorized: false, // for self-signed certificates; in production, set to true and provide CA certificate
    },
};

module.exports = dbConfig;
