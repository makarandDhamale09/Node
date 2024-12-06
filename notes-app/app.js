import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import {getNotes, addNotes} from "./notes.js"

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
        handler: function (argv) {
            addNotes(argv.title, argv.body)
        }
    })
    .command({
        command: "remove",
        describe: "Removing a note!!",
        handler: function () {
            console.log("Removing a note!!")
        }
    })
    .command({
        command: "list",
        describe: "List all the notes",
        handler: function () {
            console.log("Listing all the notes!!")
        }
    })
    .command({
        command: "read",
        describe: "Read the note",
        handler: function () {
            console.log("Reading the note!!")
        }
    })
    .argv