// const express = require('express');
// const mysql = require('mysql2');

// const server = express();

// server.listen(3000, (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('Server is running on port 3000');
// });
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'testdb'
// });
// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('Connected to MySQL database');
// });

// server.get('/createdb', (req, res)=>{
//     const customer = `CREATE TABLE if not exists customers(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL
//     )`;

//     const addres = `CREATE TABLE if not exists address(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         customer_id INT NOT NULL,
//         address VARCHAR(255) NOT NULL,
//         FOREIGN KEY (customer_id) REFERENCES customers(id)
//     )`;

//     const company = `CREATE TABLE if not exists company(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         address VARCHAR(255) NOT NULL,
//         customer_id INT NOT NULL,
//         FOREIGN KEY (customer_id) REFERENCES customers(id)
//     )`;

//     connection.query(customer, (err, results, fields)=>{
//         if(err){
//             console.log(err);
//         }
//     });
//     connection.query(addres, (err, results, fields)=>{
//         if(err){
//             console.log(err);
//         }
//     });
//     connection.query(company, (err, results, fields)=>{
//         if(err){
//             console.log(err);
//         }
//     });
//     res.end('Database and tables created successfully');
// })

const express = require("express");
const mysql = require("mysql2");

const server = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Info",
});

connection.connect((err) => {
  if (err) console.log(err);

  console.log("It connected to database.");
});

server.listen(3022, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Your server is running on 3022");
});
