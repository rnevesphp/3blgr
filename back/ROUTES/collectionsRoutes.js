const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const { pool } = require("../database/config.js");

router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM colecciones");
    res.send(rows);
    
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al obtener las Colecciones");
  }
});

module.exports = router;
