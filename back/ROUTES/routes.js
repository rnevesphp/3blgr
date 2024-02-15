const express = require('express');
const router = express.Router(); 
const crypto = require('crypto');

const catalogo = [
    {nombre: "Guess", cantidad: "2000"}, 
    {nombre: "Gucci", cantad: "500"},
    {nombre: "Prada", cantad: "800"},
    {nombre: "Moschino", cantad: "600"},
    {nombre: "Brooks" , cantidad: "300"}
]
    


router.get( '/' , (req , res) => {
 res.send(
    catalogo
    ); 
})

module.exports = router; 