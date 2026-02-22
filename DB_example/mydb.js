const express = require('express');
const mysql = require('mysql2');


const server = express();
server.listen(1212, (err)=>{
    if(err)throw err;
    console.log('Server is running');
})