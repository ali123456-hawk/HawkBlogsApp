import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';


function BlogDetails() {
    const dotEnv = process.env.NODE_ENV !== "production";
  const {REACT_APP_DEV_URL,REACT_APP_PROD_URL} = process.env;

    const {id} = useParams();
    const {data:blog,loading,error} =  useFetch(`${dotEnv?REACT_APP_DEV_URL:REACT_APP_PROD_URL}/${id}`);
    const history = useHistory();
    const handleDelete = () =>{
     fetch(`${dotEnv?REACT_APP_DEV_URL:REACT_APP_PROD_URL}/${id}`,{
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