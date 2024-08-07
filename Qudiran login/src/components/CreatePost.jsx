import { useContext, useRef } from "react"
import { PostListContext } from "../store/social-media-context"

const CreatePost = () =>{

  const {addPost} = useContext(PostListContext)

  const userIdElement = useRef()
  const titleElement = useRef()
  const postBodyElement = useRef()
  const reactionsElement = useRef()
  const tagsElement = useRef()

  const handelSubmit = (event) =>{
    event.previousDefault
    const userId = userIdElement.current.value 
    const title = titleElement.current.value 
    const postBody = postBodyElement.current.value 
    const reactions = reactionsElement.current.value
    const tags = tagsElement.current.value.split(" ")

    userIdElement.current.value = " "
    titleElement.current.value = " "
    postBodyElement.current.value = " "
    reactionsElement.current.value = " "
    tagsElement.current.value = " "


    addPost(userId, title, postBody, reactions, tags)
  }


  return(
    <form className="create-post" onSubmit={handelSubmit}>

    <div className="mb-3">
    <label htmlFor="userId" className="form-label">Car Id</label>
    <input type="text" 
    className="form-control" 
    ref={userIdElement}
    id="userId" 
    placeholder="Enter Your Car Id"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Car Name</label>
    <input type="text" 
    className="form-control" 
    ref={titleElement}
    id="titie" 
    placeholder="Enter Your Car Name"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Create Price Details</label>
    <textarea type="text" 
    rows="4"
    className="form-control" 
    ref={postBodyElement}
    id="body" 
    placeholder="Car price details.."
    />
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Car Model</label>
    <input type="text" 
    className="form-control" 
    ref={reactionsElement}
    id="reactions" 
    placeholder="Car Model Enter"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashTag </label>
    <input type="text" 
    className="form-control" 
    ref={tagsElement}
    id="tags" 
    placeholder="Please enter your tag usign space."
    />
  </div>

  


  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}
export default CreatePost