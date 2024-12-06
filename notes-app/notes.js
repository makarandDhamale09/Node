import fs from 'fs'


export const getNotes = function () {
    return "Your notes..."
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        let dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

export const addNotes = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(
        note => note.title === title
    )

    if(duplicateNotes.length ===0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log("New note added")
    }else{
        console.log("Note title taken!!")
    }
}