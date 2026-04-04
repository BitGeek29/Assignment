const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes");
// const authMiddleware = require('../middleware/auth');

// create a note
router.post("/", notesController.createNote);
// view all notes
router.get("/", notesController.getAllNotes);
// Get note by ID 
router.get("/:id", notesController.getNoteById);
// update note by ID
router.put("/:id", notesController.updateNote);
// delte note y ID
router.delete("/:id", notesController.deleteNote);

module.exports = router;