import postCategories from "../../lib/apiRequest/postCategories";


export default async function Home() {
    const posts = await postCategories();
    console.log(posts);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    {post.name}
                </div>
            ))}
        </div>
    );
}
