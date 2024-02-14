const express = require('express');
const router = express.Router(); 
const crypto = require('crypto');

const catalogo = [ 
    {
        marcas : { 
            marca1 : {nombre: "Guess", cantidad: "2000"}, 
            marca2 : {nombre: "Gucci", cantidad: "500"},
            marca3 : {nombre: "Prada", cantidad: "800"},
            marca4 : {nombre: "Moschino", cantidad: "600"},
            marca5 : {nombre: "Brooks" , cantidad: "300"}
        }
    }
]

router.get( '/' , (req , res) => {
 res.send(catalogo)
})