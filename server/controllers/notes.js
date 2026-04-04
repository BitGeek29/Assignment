let notes = [];
let nextId = 1;

const findNoteById = (id) => notes.find((note) => note.id === id);

exports.createNote = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res
      .status(400)
      .json({ message: "Both title and content are required." });
  }

  const timestamp = new Date().toISOString();
  const newNote = {
    id: String(nextId++),
    title,
    content,
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  notes.push(newNote);
  return res.status(201).json(newNote);
};

exports.getAllNotes = (req, res) => {
  return res.json(notes);
};

exports.getNoteById = (req, res) => {
  const { id } = req.params;
  const note = findNoteById(id);

  if (!note) {
    return res.status(404).json({ message: "Note not found." });
  }

  return res.json(note);
};

exports.updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const note = findNoteById(id);

  if (!note) {
    return res.status(404).json({ message: "Note not found." });
  }

  if (!title || !content) {
    return res
      .status(400)
      .json({ message: "Both title and content are required." });
  }

  note.title = title;
  note.content = content;
  note.updatedAt = new Date().toISOString();

  return res.json(note);
};

exports.deleteNote = (req, res) => {
  const { id } = req.params;
  const note = findNoteById(id);

  if (!note) {
    return res.status(404).json({ message: "Note not found." });
  }

  notes = notes.filter((item) => item.id !== id);
  return res.status(204).send();
};
