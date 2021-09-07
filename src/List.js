/* fetching data(get data from json file) using useEffect & timeout function 
   handling fetch errors
*/

import  useFetch  from "./useFetch";
import  BlogList  from "./BlogList"



const List = () => {

    const {data: blogs, isLoading } = useFetch('http://localhost:8000/blogs');
    console.log(blogs)

    

    
    
    return ( 
        
       <div className="list">
            <p> This component containing fetching data(get data from json file) using useEffect & timeout function 
   handling fetch errors</p>
            {isLoading && <div> "Loading..." </div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {blogs &&  <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's blog"/>}
       </div>
        
     )
}
 
export default List;