import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';


function BlogDetails() {
    const {id} = useParams();
    const {data:blog,loading,error} =  useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();
    const handleDelete = () =>{
     fetch('http://localhost:8000/blogs/' + id,{
     method:'DELETE' 

     })
     .then(()=>{
      history.push('/');
     }) 

    }  
   
   
   return (
    <div className='blog-details'>
     {loading && <div> LOADING... </div>}   
     {error && <div>{error}</div>}   
     {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
        </article>
     )}
    </div>
  )
}

export default BlogDetails