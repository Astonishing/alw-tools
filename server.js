const express = require('express');
const path = require('path');
const app = express();
const port = 212
;

 


app.get("/multiply", (req, res) => {

 const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  
  res.json({
    msg:parseInt(a*b)
  })

 
});
app.get("/add", (req, res) => {

  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);


  res.json({
    msg:parseInt(a+b)
  })

 
});
app.get("/divide", (req, res) => {

  const a = req.query.a;
  const b = req.query.b;


  res.json({
    msg:parseInt(a/b)
  })

 
});
app.get("/substract", (req, res) => {

  const a = req.query.a;
  const b = req.query.b;


  res.json({
    msg:parseInt(a-b)
  })

 
});

app.listen(port)
