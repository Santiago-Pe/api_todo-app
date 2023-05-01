/* ---------- Requires ----------*/
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();;

/* ---------- Consts ??? ----------*/
const app = express();
const port = process.env.PORT || 9000;

/* ---------- Routes ----------*/
app.get('/', (req, res) => {
    res.send('welocme to my api')
})

/* ---------- Mongo db conection ----------*/
// PROMOESA
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('conected to mongo db database'))
.catch((err) => console.log(err))

/* ---------- ???? ----------*/
app.listen(port, () => console.log('server listening on port: ', port));
