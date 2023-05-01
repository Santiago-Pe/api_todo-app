/* ---------- Requires ----------*/
const express = require('express');
const mongoose = require('monoogse');

/* ---------- Consts ??? ----------*/
const app = express();
const port = process.env.PORT || 9000;

/* ---------- Routes ----------*/
app.get('/', (req, res) => {
    res.send('welocme to my api')
})

/* ---------- Mongo db conection ----------*/
mongoose.connect()

/* ---------- ???? ----------*/
app.listen(port, () => console.log('server listening on port: ', port));
