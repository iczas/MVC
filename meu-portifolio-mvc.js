    const express = require('express');
    const api = express();
    const path = require('path');
    var indexRouter = require('./router/index')
    
    api.set("views", path.join(__dirname, 'views'));
    api.use(express.static('public'));
    api.set('view engine', 'ejs');
    
    
    api.use('/', indexRouter);

    
    api.listen(3000,() => { console.log('Servidor rodando na porta 3000')});


    module.exports = api;
