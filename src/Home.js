import useFetch from "./useFetch";
import BlogList from "./BlogList";


const Home = () => {
  
  const {data:blogs,loading,error} = useFetch( 'http://localhost:5000/blogs')
  return (
    <div className="home">
        {error && <div><h1>{error}</h1></div>}
        {loading && <div><h1>LOADING</h1></div>}
      
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
     
    </div>
  );
}
 
export default Home;
