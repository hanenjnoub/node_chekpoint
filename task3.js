const fs=require('fs')
fs.writeFile("welcom.txt","hello node", err=>{
    err ? console.log(err):console.log('you')
})
