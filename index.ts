// src/app.ts

import express = require('express');


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Express Server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
