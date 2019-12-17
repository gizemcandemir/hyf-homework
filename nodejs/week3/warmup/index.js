const express = require('express');
const port = 3000;
const app = express();

app.get("/", (req, res)=> {
  console.log(req.query);
});

app.listen(port, ()=> console.log(`Server started at ${port}`));