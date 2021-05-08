const router = require('express').Router();
const notes  = require('../db/db');
const fs = require('fs');
const { json } = require('express');
//const uuid = require('uuid');
 const { v4: uuidv4 } = require('uuid');


router.get('/api/notes', (req, res) => {
   res.json(notes);
  });

router.post('/api/notes', (req, res) => {
  req.body.id = uuidv4();
  
  notes.push(req.body);
  fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
      if (err) throw err;

      res.json(notes);
  }) 
});
router.delete('/api/notes/:id', (req, res) => {
  const database = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
  console.log(typeof database);

  for (let i = 0; i < database.length; i++) {
    if (database[i].id === req.params.id) {
      database.splice(i, 1);
    }
  }
  console.log(database);
  fs.writeFile('./db/db.json', JSON.stringify(database), (err) => {
    if (err) throw err;

    res.json(req.params.id);
}) 
  

})


 module.exports = router;