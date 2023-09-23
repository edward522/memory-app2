import express from "express"
import cors from "cors"
const app = express()
// response with helo world when a get request is made to the  homepage
app.get("/", (req, res)=>{
    res.send("hello world")
})

//posts/ create
app.post("/post/create", (req,res)=>{
    res.send('Hello World!'); 
});

const PORT=5000;

app.listen(PORT,()=> console.log(`server listening on PORT ${PORT}`))