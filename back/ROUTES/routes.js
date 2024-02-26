const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const { pool } = require("../database/config.js");


router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM brandscatalog");
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Marcas no encontradas");
  }
});

module.exports = router;
