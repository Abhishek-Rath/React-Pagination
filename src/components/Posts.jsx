const Posts = ({posts, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
    
    return (
        <ol  className='list-group mb-4'>
            {posts.map(post => (
                <li key={ post.id } className='list-group-item'>
                    { post.title }
                </li>
            ))}
        </ol>
    );
}
 
export default Posts;