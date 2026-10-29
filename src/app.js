const express = require("express");
const connectDB = require("./config/database")
const User = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup",async (req, res)=>{
    const userObj  = req.body

    const user = new User(userObj);
    try{
        await user.save();
    console.log("User added successfully !")
    res.send("User added successfully !")
    } catch (err){
        res.status(400).send("Error in saving user to DB")
    }
})

connectDB().then(() => {
    console.log("Connection stablished successfully to the cluster...");
    app.listen(3000, () => {
        console.log("Server is successfully listening on port no 3000...")
    })
}).catch((err) => {
    console.log("Something went wrong , connection cant not be stablished to cluster !")
})




