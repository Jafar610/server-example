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

// const express = require("express");
// const mysql = require("mysql2");

// const server = express();

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "Info",
// });

// connection.connect((err) => {
//   if (err) console.log(err);

//   console.log("It connected to database.");
// });

// server.get("/createTable", (req, res) => {
//   connection.query(
//     `CREATE TABLE if not exists customers(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL
//     )`,
//     (err, results, fields) => {
//       if (err) throw err;
//       console.log("table inserted successfully");
//     },
//   );

//   connection.query(
//     `CREATE TABLE if not exists address(
//        customer_id INT(11) NOT NULL,
//        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
//        address VARCHAR(255) NOT NULL,
//        FOREIGN KEY (customer_id) REFERENCES customers(id)
//     )`,
//     (err, results, fields) => {
//       if (err) throw err;
//       console.log("table inserted.");
//     },
//   );

//   connection.query(
//     `CREATE TABLE if not exists company(
//       customer_id INT(11) NOT NULL,
//       id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
//       company_name VARCHAR(255) NOT NULL,
//       FOREIGN KEY (customer_id) REFERENCES customers(id)
//     )`,
//     (err, results, fields) => {
//       if (err) throw err;
//       console.log("table created");
//     },
//   );

//   res.end("Table created successfuly");
// });

// server.listen(3022, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Your server is running on 3022");
// });

const express = require("express");
const mysql = require("mysql2");

const server = express();

server.use(
  express.urlencoded({
    extended:true
  })
)

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");
});

server.listen(1234, (err) => {
  if (err) throw err;
  console.log("server is running on port 1234");
});

server.get("/create-table", (req, res) => {
  connection.query(
    `CREATE TABLE if not exists customers(
   id INT PRIMARY KEY  AUTO_INCREMENT NOT NULL,
   customer_name VARCHAR(255) NOT NULL
  )`,
    (err, results, fields) => {
      if (err) throw err;
      res.end('Table Created')
    },
  );

  connection.query(
    `CREATE TABLE if not exists address(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    address_name VARCHAR(255) NOT NULL,
    customer_id INT(11) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
    )`,(err)=>{
      if(err)throw err;
      res.end('Table created');
    }
  )

  connection.query(
    `CREATE TABLE if not exists company(
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     company_name VARCHAR(255) NOT NULL,
     customer_id INT(11) NOT NULL,
     FOREIGN KEY (customer_id) REFERENCES customers(id)
    )`,(err)=>{
      if(err)throw err;
      res.end('Table created');
    }
  );
 
});

server.post('/add-info',(req, res)=>{
  console.table(req.body);
  const {customerName, address, company} = req.body;
  let insertCustomer = 'INSERT INTO customers (customer_name) VALUES(?)';
  let insertAddress = 'INSERT INTO address (address_name, customer_id) VALUES(?,?)';
  let insertCompany = 'INSERT INTO company (company_name, customer_id) VALUES(?,?)';

  connection.query(insertCustomer,[customerName],(err, results, fields)=>{
      if(err) throw err;
      console.log('Data inserted')
      console.log(results);
      res.end('Data Inserted');


    const id = results.insertId;

    connection.query(insertAddress,[address, id], (err,results,fields)=>{
      if(err) throw err;
      console.log('data inserted');
      console.log(results);
    });


  });
});
