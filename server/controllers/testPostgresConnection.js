// server.js or app.js
const express = require("express");
const { Pool, Client } = require("pg");
const dbConfig = require("../config/postgreConfig");

async function testPostgresConnection(app) {
    const pool = new Pool(dbConfig);
    // const client = new Client(dbConfig);
    pool.connect();
    app.get("/test-db", async (req, res) => {
        try {
            // return the current date and time from the database if successful
            const result = await pool.query("SELECT NOW()");
            res.json({ connected: true, time: result.rows[0].now });
        } catch (error) {
            res.status(500).json({ connected: false, error: error.message });
        }
    });
}

module.exports = testPostgresConnection;
