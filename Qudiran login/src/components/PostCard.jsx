import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../store/social-media-context";
const PostCard = ({post}) =>{

  const {deletePost} = useContext(PostListContext)
  return(
    <div className="card post-card" style={{width: "30rem", margin:'2rem'}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id) }>   
    <AiFillDelete />
  </span>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => (
      <button key={tag} type="button" className="tag-btn btn btn-outline-primary">{tag}</button>
    ))}
    <div className="message alert alert-info" role="alert">
        The Car model is {post.reactions} sence.
    </div>
  </div>
</div>
  )
} 

export default PostCard