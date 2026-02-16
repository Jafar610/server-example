// const express = require('express');

// const server = express();
// server.use(express.static('./Apple'));

// server.listen(4040, (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Server is running on port 4040");
// })



const express = require('express');


const server = express();
server.use(express.static('./Apple'));

const port = 5043;
server.listen(port, (err)=>{
    if(err){
        console.error(err);
    }

    console.log('Your server is running on: http://localhost:' + port);
})