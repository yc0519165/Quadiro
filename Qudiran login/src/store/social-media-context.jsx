import { createContext, useReducer } from "react"


export const PostListContext = createContext([])

const PostListReaducer = (currentPostList, action) =>{
  let newPostList = currentPostList
  if(action.type === 'DELETE_POST'){
    newPostList= currentPostList.filter((post) => post.id !== action.payload.postId)
  }else if (action.type === 'ADD_POST'){
    newPostList = [action.payload, ...currentPostList]
  }
  return newPostList
}

const PostListProvider = ({children}) =>{

  const [postList, dispatchPostList] = useReducer(PostListReaducer, DEFAULT_LIST_POST )

  const addPost = (userId, title, postBody, reactions, tags) =>{
    dispatchPostList({
      type : 'ADD_POST',
      payload :{
        id : '4',
        title : title,
        body : postBody,
        reactions : reactions,
        userId : userId,
        tags : tags

      }
    })

  }
  const deletePost =(postId) =>{
    dispatchPostList({
      type : 'DELETE_POST',
      payload:{
        postId
      },
    })
  }

  return <PostListContext.Provider value={{postList, addPost, deletePost}}>{children}</PostListContext.Provider>

  
}

const DEFAULT_LIST_POST = [{
  id : '1',
  title : 'Mercedes Benz',
  body : 'World one of the most expensive car and this car rang start ex-showroom 46.12 Lac',
  reactions : '08/2023',
  userId : '46.12 Lac',
  tags: ['Buy','Rent']

},
{
  id : '2',
  title : 'Maruti Suzuki',
  body : 'India most popular car and this car range start at 12.14 Lac',
  reactions : '09/2024',
  userId : '12.14 Lac',
  tags: ['Buy', 'Rent']

}
]


export default PostListProvider