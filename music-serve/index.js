const express = require('express');
const app = express();
const axios = require('axios');


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Content-Type: text/plain');
    res.header("Content-type:text/html;charset=utf-8");
    next();
})


app.get('/', (req, res) => {
    res.send({
        code: 1,
        msg: 'xxx'
    })
});


app.use('/static', express.static('static'))

app.listen('8001', '0.0.0.0', () => {
    console.log('开始监听8001');
})