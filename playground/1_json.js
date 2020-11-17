const fs = require('fs')
//const book = {
  //  title:'Ego is the Enemy',
    //author:'Ryan Holiday'
//}

//const bookJSON = JSON.stringify(book);
//fs.writeFileSync('1_json.json',bookJSON)

const dataBuffer = fs.readFileSync('1_json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)