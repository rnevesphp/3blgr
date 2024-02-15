const express = require('express');
const router = express.Router(); 
const crypto = require('crypto');

const catalogo = [ 
    {
        marcas : { 
            marca : {nombre: "Guess", cantidad: "2000"}, 
            marca : {nombre: "Gucci", cantidad: "500"},
            marca : {nombre: "Prada", cantidad: "800"},
            marca : {nombre: "Moschino", cantidad: "600"},
            marca : {nombre: "Brooks" , cantidad: "300"}
        }
    }
]

router.get( '/' , (req , res) => {
 res.send(
    catalogo
    ); 
})

module.exports = router; 