const express = require('express');
const path = require('path');

const pjson = require('./package.json');

const PORT = process.env.PORT || 8080
const app = express();

app.use(express.static(path.join(__dirname, `dist/`)));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + `/dist/index.html`));
});

console.log("server started on port " + PORT)

app.listen(PORT);