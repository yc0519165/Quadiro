import { useContext } from "react"
import PostCard from "./PostCard"
import { PostListContext } from "../store/social-media-context"

const PostCardList = () =>{
  const { postList } = useContext(PostListContext)
  console.log(postList)
  return(
    <>
    {postList.map((post) =>(
      <PostCard key={post.id} post={post}></PostCard>
    ))}
    </>

  )
  
}
export default PostCardList