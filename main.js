const fs = require('fs')
const dados = [
    
]
function writeFile(content){
    try{
        fs.writeFileSync('log.txt',content,{flag:'a'})
    }catch{
        console.error(err)
    }
}
writeFile()