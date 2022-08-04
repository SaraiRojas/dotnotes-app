// ------------------- Import's -------------------
const express = require('express');
const notesController = require('../controllers/notes');


// **** Router ****
const router = express.Router();


// **** Routes ****
router.route("/")
    .get(notesController.index)         // fetch all notes (READ)
    .post(notesController.store);       // create and store a note (CREATE)

// Search notes by title
router.get('/search', notesController.search);

router.route("/:id")
    .get(notesController.detail)        // fetch a single note
    .put(notesController.update)        // update info of a note (UPDATE)
    .delete(notesController.destroy);   // delete a note (DELETE)


// ------------------- Exports -------------------
module.exports = router;
