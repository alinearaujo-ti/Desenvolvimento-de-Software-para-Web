const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

// notFound
app.use((req, res, next)=>{
    const error = new Error('Not found')
    error.status = 404
    next.error
})

// catch all erros
app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.json({error: error.message})
})

app.listen(3333, () => console.log('O servidor esta rodando'))
