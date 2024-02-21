const express = require('express');
const router = express.Router(); 
const crypto = require('crypto');
const { pool } = require('../database/config.js')

const catalogo = [
    {nombre: "Guess", cantidad: "2000"}, 
    {nombre: "Diesel", cantad: "500"},
    {nombre: "Birkenstock", cantad: "800"},
    {nombre: "Moschino", cantad: "600"},
    {nombre: "Brooks" , cantidad: "300"},
    {nombre: "Calvin Klein" , cantidad: "100"},
    {nombre: "Valentino", cantidad: "2000"}, 
    {nombre: "EA7", cantad: "500"},
    {nombre: "Adidas", cantad: "800"},
    {nombre: "Nike", cantad: "600"},
    {nombre: "Asics" , cantidad: "300"},
    {nombre: "Armani Jeans" , cantidad: "100"},
    {nombre: "Coach", cantidad: "2000"}, 
    {nombre: "Chiara Ferragni", cantad: "500"},
    {nombre: "DAY ET", cantad: "800"},
    {nombre: "DKNY", cantad: "600"},
    {nombre: "Emporio Armani" , cantidad: "300"},
    {nombre: "Dr. Martens" , cantidad: "100"},
    {nombre: "Gant", cantidad: "2000"}, 
    {nombre: "FJALLRAVEN", cantad: "500"},
    {nombre: "Herschel", cantad: "800"},
    {nombre: "Champion", cantad: "600"},
    {nombre: "Boss" , cantidad: "300"},
    {nombre: "Icebug" , cantidad: "100"},
]

router.get('/' , async (req , res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM marcas'); 
        res.send(rows); 
    } catch (error) { 
        console.error(error); 
        res.status(500).send('Marcas no encontradas')
    }
})

module.exports = router; 