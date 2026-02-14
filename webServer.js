const http = require("http");

// const server = http.createServer((req, res)=>{
//     res.write("Hi There \n");
//     res.end("hello class");
// });

// server.listen(1234, ()=>{
//     console.log('Server is running');
// });

const server2 = http.createServer((req, res)=>{
    const path = req.url;
    if(path === '/'){
        res.write('<h1>Welcome to Home Page</h1>');
        res.end();
    }
    else if(path ==='/about'){
        res.write('<h1>Hello there welcome to About pages</h1>');
        res.end();
    }
    else{
        res.write('<h1> Page Not Found </h1>');
        res.end();
    }
});

server2.listen(5000,()=>{
    console.log("Server is running");
})