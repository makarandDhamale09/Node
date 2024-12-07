import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import {listNotes, addNotes, removeNote, readNote} from "./notes.js"

const yargsConfig = yargs(hideBin(process.argv))
    .version("1.1.0")
    .command({
        command: "add",
        describe: "Add a new note!!",
        builder: {
            title: {
                describe: "Note title",
                demandOption: true,
                type: "string"
            },
            body: {
                describe: "Note body",
                demandOption: true,
                type: "string"
            }
        },
        handler(argv) {
            addNotes(argv.title, argv.body)
        }
    })
    .command({
        command: "remove",
        describe: "Removing a note!!",
        builder: {
            title: {
                describe: "Note title",
                demandOption: true,
                type: "string"
            }
        },
        handler(argv) {
            removeNote(argv.title)
        }
    })
    .command({
        command: "list",
        describe: "List all the notes",
        handler() {
           listNotes()
        }
    })
    .command({
        command: "read",
        describe: "Read the note",
        builder: {
            title: {
                describe: "Note title",
                demandOption: true,
                type: "string"
            }
        },
        handler(argv) {
            readNote(argv.title)
        }
    })
    .argv