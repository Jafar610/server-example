const http = require("http");

const server = http.createServer((req, res)=>{
    res.write("Hi There \n");
    res.end("hello class");
});

server.listen(1234, ()=>{
    console.log('Server is running');
})