
const express = require('express');
const app = express();

const cards = [
    {
        id: 1,
        card: 12345678
    },
    {
        id: 2,
        card: 12378
    },
    {
        id: 3,
        card: 12345678545
    },
    {
        id: 4,
        card: 1234567855354
    },
    {
        id: 5,
        card: 12345678535354453
    }
];

app.get('/card/:id', function (req, res) {
  res.send(JSON.stringify(cards.find((user) => user.id == req.params.id)));
});

app.listen(3000, console.log('SSSS'))  