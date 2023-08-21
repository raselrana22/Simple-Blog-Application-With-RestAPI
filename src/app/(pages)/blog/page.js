import postList from '../../../lib/apiRequest/postList'

export default async function Blog() {

    const posts = await postList();
    console.log(posts);

    return (
        <div>
            This is the blog page
        </div>
    )
}