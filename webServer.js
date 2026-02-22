// const http = require("http");
// const fs = require("fs");   

// const server = http.createServer((req, res)=>{
//     res.write("Hi There \n");
//     res.end("hello class");
// });

// server.listen(1234, ()=>{
//     console.log('Server is running');
// });





// const server2 = http.createServer((req, res)=>{
//     const path = req.url;
//     if(path === '/'){
//         res.write('<h1>Welcome to Home Page</h1>');
//         res.end();
//     }
//     else if(path ==='/about'){
//         res.write('<h1>Hello there welcome to About pages</h1>');
//         res.end();
//     }
//     else{
//         res.write('<h1> Page Not Found </h1>');
//         res.end();
//     }
// });

// server2.listen(5000,()=>{
//     console.log("Server is running");
// })




// const server3 = http.createServer((req, res)=>{
//     let requestedUrl = req.url;
//     if(requestedUrl === '/'){
//         requestedUrl = '/index.html';
//     }
//     console.log(requestedUrl);

//     fs.readFile(`.${requestedUrl}`, (err, data)=>{
//         if(err){
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             res.write('<h1>Page Not Found</h1>');
//             res.end();
//         }
//         else{
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data);
//             res.end();
//         }
//     });
// })

// server3.listen(5005,()=>{
//     console.log("Server is running");
// });





// const server4 = http.createServer((req, res)=>{
//     res.end("hello world");
// });


// server4.listen(4004, (err)=>{
//     if(err){
//         console.error(err);
//     }
//     console.log("Your server is running.")
// });

// const http = require("http");
// const fs = require("fs");
// // const mimeType = require("mime-types");
// const myServer = http.createServer((req, res)=>{
//     var path = req.url;
//     if(path === '/'){
//         path = '/index.html';
//     }

//     fs.readFile(`.${path}`, (err, data)=>{
//         if(err){
//             res.writeHead(404, {'Content-Type':'text/html'});
//             res.write('<h1>Page Not Found</h1>');
//             res.end();
//         }
//         else{
//             res.writeHead(200, {'Content-Type':'text/html'});
//             res.write(data);
//             res.end();
//         } 
//     });

// });
// myServer.listen(1200, (err)=>{
//     if(err){
//         console.error(err);
//     }
//     console.log("Your server is running.");
// });




// const http = require('http');
// const fs = require('fs');
// const mimeTpes = require('mime-types');


// const server = http.createServer((req, res)=>{
//         var path = req.url;
//         console.log(path);
//         if(path === '/'){
//             path = '/index.html';
//         }
//         const requestPath = 'Apple' + path;
//         const type = mimeTpes.lookup(requestPath);
//         fs.readFile(requestPath, (err, data)=>{
//             if(err){
//                 console.log(err);
//                 res.end('<h1>Page Not Found</h1>');
//             }
//             else{
//                 res.writeHead(200,{'content-type':type});
//                 res.write(data);
//                 res.end();
//             }
//         })

// })

// server.listen(1222, (err)=>{
//     if(err)throw err;
//     console.log("Your server is running");
// })



const express = require('express');
const server = express();
server.use(express.static('Apple'));
server.listen(1233, (err)=>{
    if(err)throw err;
    console.log('Your Server is running on 1233');
});
