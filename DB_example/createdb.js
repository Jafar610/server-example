const express = require('express');
const mysql = require('mysql2');

const server = express();

server.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }
    console.log('Server is running on port 3000');
});
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});