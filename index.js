import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello from book baazar");
})


app.listen(PORT,() => {
    console.log("Listing on PORT: ", PORT);
});

