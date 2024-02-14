const express = require('express');
const cors = require('cors');

const catalogRouter = require('./ROUTES/routes'); 

const app = express(); 
const PORT = 3001; 

app.use(cors());  // enable all CORS requests
app.use(express.json()) // parse requests of content-type - application/json

app.use('/catalogo' , catalogRouter);

app.listen(3001, () => { console.log(`Server is running on port  ${PORT}`) });

app.get ('/' , (req, res) => {
    setTimeout ( () => {
            res.send('HELLO WORLD; ')    
        }, 4000
    )
}) 

