import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostCardList from "./components/PostCardList";
import { useState } from "react";
import PostListProvider from "./store/social-media-context";


function App (){

 const [selectedTab, setSelectedTab] = useState("Home")
 


  return (
    <PostListProvider>
      {/* <Login></Login> */}
    <div className="container" >
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
    <div className="content">
    <Header></Header>
    {selectedTab === "Home" ? <PostCardList></PostCardList> : <CreatePost></CreatePost>}
    
    
    <Footer></Footer>
    </div>
    </div>
    
    </PostListProvider>
    )
}

export default App;

