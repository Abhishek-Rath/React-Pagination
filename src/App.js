import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import Posts from './components/Posts';
const api_url = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPserPage] = useState(10);


    const fetchPosts = async () => {
        setLoading(true);
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);
        setPosts(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    // console.log("\nPosts\n\n"+posts);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // console.log(indexOfFirstPost +"  " + indexOfLastPost + "  ");

    // Navigate between pages
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="container mt-5">
            <h1>My Posts</h1>
            <Posts posts={ currentPosts } loading={ loading } />
            <Pagination postsPerPage={ postsPerPage } totalPosts={posts.length} paginate={paginate} />
        </div>
    );
}
 
export default App;