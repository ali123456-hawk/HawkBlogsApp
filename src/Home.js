import useFetch from "./useFetch";
import BlogList from "./BlogList";


const Home = () => {
  // const Env = process.env.NODE_ENV !== "production";
  let api = process.env.REACT_APP_PROD_URL;
  // if(process.env.NODE_ENV === 'development'){
  //    api = process.env.REACT_APP_DEV_URL
  // }
  // if(process.env.NODE_ENV === 'test'){
  //    api = process.env.REACT_APP_PROD_URL
  // }
  console.log(api);
  
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
