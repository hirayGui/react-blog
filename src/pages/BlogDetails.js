import {useParams, useHistory} from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:3000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost/3000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return (
        <div className='blog-details'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <article>
                <h2>{blog.title}</h2>
                <p>Escrito por {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Deletar</button>
            </article>
        </div>
    )
}

export default BlogDetails