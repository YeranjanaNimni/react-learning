import { Link } from "react-router-dom";
import { useHistory } from "react-router";

// const BlogList = (props) => {
    const BlogList = ({blogs, title}) => {
// const title = props.title
//     const blogs = props.blogs;

const history = useHistory();

const handleDelete = (id)=> {
     fetch('http://localhost:8000/blogs/' + id,{
        method:'DELETE'
     })
     .then(()=>{
        alert("successfully deleted");
        history.push('/');
     })
 }


    return ( 
        <div>
            <h2>{title}</h2>
            {blogs.map( blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`route-parameters/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p> Written by {blog.author}</p>
                    </Link>
                    <button onClick={()=> handleDelete(blog.id)}> Delete Blog </button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;