const yargs = require('yargs')
const notes = require('./notes.js');
   
yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:()=>{
        notes.remNotes(argv.title)
    }
})

yargs.parse()    