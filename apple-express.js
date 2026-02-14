const express = require('express');

const server = express();
server.use(express.static('./Apple'));

server.listen(4040, (err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server is running on port 4040");
})