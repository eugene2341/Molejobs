// server.js or app.js
const express = require("express");
const { Pool } = require("pg");
const dbConfig = require("../config/postgreConfig");

const pool = new Pool(dbConfig);

async function testPostgresConnection(app) {
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
