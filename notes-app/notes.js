import fs from 'fs'
import chalk from "chalk";


export const listNotes = () => {
    console.log(chalk.green.inverse("Your Notes!!"))
    loadNotes().forEach((note) => console.log(" - " + note.title))
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        let dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

export const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title, body: body
        })
        saveNotes(notes)
        console.log(chalk.green("New note added"))
    } else {
        console.log(chalk.red("Note title already taken!!"))
    }
}

export const removeNote = (title) => {
    let notes = loadNotes();
    let updatedNotes = notes.filter(note => note.title !== title);
    if (updatedNotes.length < notes.length) {
        saveNotes(updatedNotes)
        console.log(chalk.green("Note removed!"))
    } else {
        console.log(chalk.red("Note not found!"))
    }
}


export const readNote = (title) => {
    let note = loadNotes().find((note) => note.title===title);
    if (note) {
        console.log(chalk.green("Title\t: ") + note.title)
        console.log(chalk.green("Body\t: ") + note.body)
    } else {
        console.log(chalk.red("Note not found!!"))
    }
}