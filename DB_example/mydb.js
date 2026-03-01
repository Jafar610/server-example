const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const server = express();

server.use(
  express.urlencoded({
    extended: true,
  }),
);

server.use(cors());

server.use(express.json());

// Create connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});
connection.connect((err) => {
  if (err) console.log(err);
  console.log("Connected to database");
});

server.get("/create-table", (req, res) => {
  let customer = `CREATE TABLE if not exists customers(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL
 )`;

  connection.query(customer, (err, results) => {
    if (err) console.log(err);
    console.table(results);
    res.end("Table created successfully");
  });

  connection.query(
    `CREATE TABLE if not exists address(
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     address VARCHAR(255) NOT NULL,
     customer_id INT(11) NOT NULL,
     FOREIGN KEY (customer_id) REFERENCES customers(id)
     )`,
    (err, results) => {
      if (err) console.log(err);
      console.table(results);
    },
  );

  connection.query(
    `
   CREATE TABLE if not exists company(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    customer_id INT(11) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
   ) `,
    (err, results) => {
      if (err) console.log(err);
      console.table(results);
    },
  );
});

server.post("/add-info", (req, res) => {
  console.table(req.body);
  const { customerName, address, company } = req.body;

  let insertCustomer = `INSERT INTO customers(name) VALUES(?)`;
  let insertAddress = `INSERT INTO address(address, customer_id) VALUES(?, ?)`;
  let insertCompany = `INSERT INTO company(company_name, customer_id) VALUES (?, ?)`;

  connection.query(insertCustomer, [customerName], (err, results) => {
    if (err) console.log(err);
    console.table(results);
    res.end("Data added successfully");

    const customerId = results.insertId;

    connection.query(insertAddress, [address, customerId], (err, results) => {
      if (err) console.log(err);
      console.table(results);
    });

    connection.query(insertCompany, [company, customerId], (err, results) => {
      if (err) console.log(err);
      console.table(results);
    });
  });
});

server.get("/customers-info", (req, res) => {
  connection.query(
    `
        SELECT * FROM customers JOIN address JOIN company ON customers.id = address.customer_id AND customers.id = company.customer_id
        `,
    (err, results, fields) => {
      if (err) console.log(err);
      // console.table(fields);
      res.send(results);
    },
  );
});

server.put('/update', (req, res)=>{
    console.log(req.body);
    const {id, newName} = req.body;

    connection.query(`UPDATE customers SET name = ? WHERE id = ?`, [newName, id], (err, results)=>{
        if(err) console.log(err);
        console.table(results);
        res.end("Data updated successfully");
    })
    
});

server.delete('/delete-customer', (req, res)=>{
    console.log(req.body);
    const {id} = req.body;
    connection.query(`DELETE FROM address WHERE customer_id = ?`, [id], (err, results)=>{
        if(err) console.log(err);
        console.table(results);
        console.log('data deleted successfully');
    });
    connection.query(`DELETE FROM company WHERE customer_id = ?`, [id], (err,results)=>{
        if(err) console.log(err);
        console.table(results);
    })
    connection.query(`DELETE FROM customers WHERE id =?`, [id], (err, results)=>{
        if(err) console.log(err);
        console.table(results);
        res.end('data deleted successfully')
    });
});


server.listen(1234, (err) => {
  if (err) throw err;
  console.log("Your server is running on 1234");
});
