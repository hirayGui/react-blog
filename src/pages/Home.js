import BlogList from './BlogList';
import useFetch from './useFetch'

function Home() {

    const {data: blogs, isPending, error} = useFetch('http://localhost:3000/blogs');

    return(
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="Todos os blogs"/>
        </div>
    )
}

export default Home