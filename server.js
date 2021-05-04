const express = require ('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;


const { notes } = require('./db/db');
const fs = require('fs');

//app.use(express.static(path.join(__dirname, 'GET')));

app.get('./db/db', (req, res) => {
    res.json(notes);
}); 

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'GET', '/notes/index.html'));
});
app.listen(PORT, () => console.log(`Server started on ${PORT}`));