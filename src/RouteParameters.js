/* route parameters and reusing custom hooks */

import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const RouteParameters = () => {

    const { id } = useParams();
    const{data: blog, isLoading} = useFetch('http://localhost:8000/blogs/' + id);

    return ( <div className="route-parameters">
        { isLoading && <div>Loading...</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
            </article>
        )}
    </div> );
}
 
export default RouteParameters;