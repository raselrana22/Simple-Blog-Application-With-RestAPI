import postCategories from "../../lib/apiRequest/postCategories";


export default async function Home() {
    const posts = await postCategories();
    console.log(posts);

    return (
        <div className='mx-auto py-3 flex flex-auto'>
            {posts.map((post) => (
                <div key={post.id}>
                    <p className='px-3'> {post.name}</p>
                </div>
            ))}
        </div>
    );
}
