const express = require('express')
const app = express();


app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));

app.use('/', require('./utils/router'));


app.listen(3000, ()=>{
    console.log('SERVER LISTENING IN 3000')
});

