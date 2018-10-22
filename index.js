const express = require("express");

let app = new express();

app.get("/",function(req,res)
{
    res.send("Hello Test");
}
);

let port=12345
app.listen(port,function()
{
    console.log("");
}
);