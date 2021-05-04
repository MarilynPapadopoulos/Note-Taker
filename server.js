const express = require ('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require ('./routes/apiRoutes'));
app.use(require ('./routes/htmlRoutes'));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));