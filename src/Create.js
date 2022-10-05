import {useState} from 'react';
import { useHistory } from "react-router-dom"; 

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('mario');
const [loading,setLoading] = useState(false);

const history= useHistory()
const handleSubmit = (e) => {
    e.preventDefault();
    
    const blog = {title,body,author};
    setLoading(true);
    fetch('http://localhost:5000/blogs',{
    method : 'POST',
    headers: { "Content-Type": "application/json" },
    body : JSON.stringify(blog)

    })
    .then(()=>{
        setLoading(false);
        console.log('blog added to the server')
        history.push('/');
    })

}

return(
<div className='create'>
    <h2>Add a new blog</h2>
    <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type='text' required value={title} onChange={(e)=>{setTitle(e.target.value)}}  />
        <label>Blog body:</label>
        <textarea required value={body} onChange={(e)=>{setBody(e.target.value)}} ></textarea>
        <label>Blog author:</label>
         <select value={author} onChange={(e)=>{setAuthor(e.target.value)}} >
          <option value='HAWK'>HAWK</option>  
          <option value='ALI'>ALI</option>
        </select>
       {!loading && <button>Add Blog</button>}
        {loading && <button>Adding Blog</button>}   
    </form>


</div>

)


}

export default Create;