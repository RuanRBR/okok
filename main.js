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
function createNewDado(){
    const id = uuidv4()
    const data = Date.now()
    
}