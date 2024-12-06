import fs from 'fs'
import chalk from "chalk";


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
    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title, body: body
        })
        saveNotes(notes)
        console.log(chalk.green("New note added"))
    } else {
        console.log(chalk.red("Note title already taken!!"))
    }
}

export const removeNote = function (title) {
    let notes = loadNotes();
    let updatedNotes = notes.filter(note => note.title !== title);
    if (updatedNotes.length < notes.length) {
        saveNotes(updatedNotes)
        console.log(chalk.green("Note removed!"))
    } else {
        console.log(chalk.red("Note not found!"))
    }
}