const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("Server is successfully listening on port no 3000...")
})

app.use("/test",(req, res)=>{
    res.send("hello from test");
})

app.use("/user",(req, res)=>{
    res.send("hello from user");
})

app.use("/",(req, res)=>{
    res.send("hello from ashish");
})
