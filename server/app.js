import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
// response with helo world when a get request is made to the  homepage
app.get("/", (req, res)=>{
    res.send("hello world")
})
const postSchema= new mongoose.Schema({
        form_title: String,
        form_message: String,
        form_tag: String,
        form_creator: String
})

const Model = mongoose.model('Posts_Model', postSchema)

//posts/ create
//use async-await to wait for a response from the server
app.post("/post/create",async (req,res)=>{
    try {
       const post = await Model.create(req.body)
       res.json(post) ;//this line will send a response to the front end
    } catch (error) {
        
    }
    console .log(req.body)
    res.send('Hello World!'); 
});
//grab all data saved in the database
app.get('/posts/get_data', async (req, res) => {
    try {
        const posts = await Model.find();

        res.json(posts);
    } catch (error) {
        console.log(error);
    }
});
   


const PORT=5001;

const CONNECTION_URI = "mongodb+srv://monday:tuesday@cluster0.wwt1652.mongodb.net/?retryWrites=true&w=majority"

//mongobd connection here
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`)))
    .catch((error) => console.log(error));