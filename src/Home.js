import useFetch from "./useFetch";
import BlogList from "./BlogList";


const Home = () => {
    let api='';
    if(process.env.NODE_ENV === 'development'){
      api = 'http://localhost:5000/blogs'
    }
    else{
    api="/blogs"
    } 
  const {data:blogs,loading,error} = useFetch(api)
  return (
    <div className="home">
        {error && <div><h1>{error}</h1></div>}
        {loading && <div><h1>LOADING</h1></div>}
      
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
     
    </div>
  );
}
 
export default Home;
