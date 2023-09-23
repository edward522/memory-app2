
import Post from"./component/Post";
import Header from"./component/Header";
import Body from "./component/Body"
import "./App.css";
const App = () => {
  return (
  <div className='App' style={{background: "navy",height: "100vh" }}>
      <div className='container'>
        <Header/>


        <div  style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Body/>
        <Post/>
        </div>
  </div> 
  </div>

  )
}

export default App;