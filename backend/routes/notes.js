const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');




//Route 1 Get all notes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured");

    }

})


//Route 2 Add new note
router.post('/addnote', fetchuser, [
    body('title', 'Enter a title').isLength({ min: 3 }),
    body('description').isLength({ min: 5 }),

], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        //For errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            //agar galat hai to
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured");
    }

})



//Route 3 Update notes

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body; //Yeh leakr aaye body se

        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Note Found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    }

    catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured");
    }

})


//Route 4 Delete notes

router.delete('/deletenote/:id', fetchuser,async (req, res) => {
    try {
        const { title, description, tag } = req.body; //Yeh leakr aaye body se

        //Check is the person is logged in with same ID
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Note FounD") }
        
        //Allow deletion only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({"success":"Note has been deleted",note:note });
    }

    catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured");
    }

})


module.exports = router



