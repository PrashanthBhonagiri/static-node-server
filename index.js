const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.json({
        "Message" : "Hello, welcome "
    })
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port', port);
  });