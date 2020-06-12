const express = require('express');
var nofavicon = require('express-no-favicons');
const app = express();

// Init Middleware

app.use(nofavicon());

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
