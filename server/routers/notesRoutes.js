const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes");
// const authMiddleware = require('../middleware/auth');

// create a note
router.post("/notes", notesController.createNote);
// view all notes
router.get("/notes", notesController.getAllNotes);
// Get note by ID 
router.get("/notes/:id", notesController.getNoteById);
// update note by ID
router.put("/notes/:id", notesController.updateNote);
// delte note y ID
router.delete("/notes/:id", notesController.deleteNote);

module.exports = router;