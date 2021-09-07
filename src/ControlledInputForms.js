import { useState } from "react";
import { useHistory } from "react-router";


const ControlledInputForms = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario')
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author }
        console.log(blog)
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log("Successfully added")
                setIsLoading(false);
                //history.go(-1)   //this is redirect to the previous state
                history.push('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="create">

            <p> controlled inputs and submit events are here </p>
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario"></option>
                    <option value="yoshi"></option>
                </select>

                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Loading</button>}

                <p>{title}</p>
                <p>{author}</p>
                <p>{body}</p>
            </form>
        </div>
    );
}

export default ControlledInputForms;