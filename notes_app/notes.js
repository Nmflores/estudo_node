
const fs = require('fs')
const getNotes= ()=>{
     return 'Your notes ...'
     
}

const addNote = (title,body)=>{
     const notes = loadNotes()
     const duplicateNotes = notes.filter(()=>{
          return notes.title === title

     })

     if(duplicateNotes.length === 0){
          notes.push({
          title:title,
          body:body     
     })
          saveNotes(notes)  
     }else{
          console.log('Note name taken  ')
     }
    
       
}

const remNote = (title) =>{
     const notes = loadNotes()
     const notesKeep = notes.filter(()=>{
          return notes.title!=title
     })
     saveNotes(notesKeep)
}


const saveNotes = (notes)=>{
     const dataJSON = JSON.stringify(notes)
     fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
     try{
          const dataBuffer = fs.readFileSync('notes.json')
          const dataJSON = dataBuffer.toString()
          return JSON.parse(dataJSON)
     }catch(e){
          return []
     }
}

module.export = {
     getNotes:getNotes,
     addNote:addNote,
     remNote:remNote
}