const fs = require('fs');
const path = './LargeFile.txt';

//use instade this
const stream=fs.createReadStream(path, {encoding:'utf-8'})

// const data = fs.readFileSync(path, 'utf-8'); // Issue: Blocking the event loop
stream.on('data', (chunk) => {
    console.log(chunk); 
})
stream.on('end',()=>
    {
    console.log("completed")
    }
)
stream.on('error',(err)=>
{
    console.error("error to read file",err)
})
