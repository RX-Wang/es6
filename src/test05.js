import fs from 'fs';
import path from 'path';
fs.readFile(path.join(__dirname,'./test04.js'),(err,data)=>{
    console.log(`${err}---${data}`);
})