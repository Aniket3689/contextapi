import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from "./Spinner"
import "./Blogs.css"
const Blogs = () => {
  //consume
  const {posts,loading }=useContext(AppContext);
  return (
    <div>
        {
          loading ? (<Spinner/>)
          :
          (
            posts.length === 0 ?(
              <div> No Posts found</div>
            ):(
              posts.map((post)=>(
                <div key={post.id}>
                      <p className='title  text-3xl'>{post.title}</p>
                      <p>
                        By <span>{post.auther}</span> and <span>{post.category}</span>
                      </p>
                      <p>
                        posted on {post.date}
                      </p>
                      <p>
                        {post.content}
                      </p>
                      <div >
                        {post.tags.map((tag ,index)=>{
                          return <span key={index}>{`#${tag}`}</span>
                        })}
                      </div>
                      
                </div>
                

              ))
            )
          )
        }
    </div>
  )
}

export default Blogs