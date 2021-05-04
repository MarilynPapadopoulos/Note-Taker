const router = require('express').Router();
const notes  = require('../db/db');
const fs = require('fs');
const { json } = require('express');
//const uuid = require('uuid');
 const { v4: uuidv4 } = require('uuid');

// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

router.get('/api/notes', (req, res) => {
    console.log(notes);
   res.json(notes);
  });

  router.post('/api/notes', (req, res) => {
    notes.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;

        res.json(notes);
    }) 
  });

  router.post('/api/notes', (req, res) => {
    notes.id = uuidv4();
    console.log(notes.id);
    notes.id.push(req.body);

    res.json(note.id);
  });



 module.exports = router;