import { useState } from "react";
import axios from "axios"

const Post = () => {
    const [title, setTitile]= useState("");
    const [creator, setCreator]= useState("");
    const [tag, setTag] = useState("");
    const [message, setMessage]= useState("");
    const [file,setFile] = useState("")


const handleSubmit =(event) =>{
    event.preventDefault();// prevent refresh
    console.log("form submitted");
    // form validation
    if(title===""||message===""||tag===""||creator===""){
        console.log("input fied cannot be empty!")
        return;//break out of the code
    }
    const formdata={
        form_title: title,
        form_message: message,
        form_tag: tag,
        form_creator: creator
    }
    axios.post(" http://localhost:5001/post/create", formdata)
        .then ((response)=> console .log(response))//output succeessful
        .catch((error)=>console.log(error))//output unsuccessfull
    }
    return (     <div className="Post">
            <h2>add new blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="creator">
                    <input type="text" value={creator} onChange={(e) => setCreator(e.target.value)} />
                </div>
                <div className="title">
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitile(e.target.value)}/>
                </div>
                <div className="message">
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" cols="30" rows="10"></textarea>
                </div>
                <div className="tag">
                    <input type="text" placeholder="Tag" value={tag} onChange={(e) => setTag(e.target.value)}/>
                </div>
                <div className="file">
                    <input type="file" value={file} onChange={(e) => setFile(e.target.value)} />
                </div>
                <div className="buttons">
                    <button type="submit" className="submit">submit</button>
                    <button type="button" className="clear">clear</button>
                </div>
            </form>       
        </div>
    )
}

export default Post;