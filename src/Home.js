import useFetch from "./useFetch";
import BlogList from "./BlogList";


const Home = () => {
  const dotEnv = process.env.NODE_ENV !== "production";
  const {REACT_APP_DEV_URL,REACT_APP_PROD_URL} = process.env; 
  const {data:blogs,loading,error} = useFetch('http://hawkblogsapp.herokuapp.com/blogs')
  return (
    <div className="home">
        {error && <div><h1>{error}</h1></div>}
        {loading && <div><h1>LOADING</h1></div>}
      
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
     
    </div>
  );
}
 
export default Home;
