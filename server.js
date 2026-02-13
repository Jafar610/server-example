// const os = require('os');
// console.log(os.cpus()[1].model);
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.userInfo().username);
// console.log(os.uptime());
// console.log(process.version);

// // file system
//  const fs = require('fs');
// fs.readFile('greating.txt', 'utf-8', (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// path module
const path = require("path");
const filePath = path.join(__dirname, "greating.txt");
console.log(filePath);
console.log(path.extname(filePath));
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));


