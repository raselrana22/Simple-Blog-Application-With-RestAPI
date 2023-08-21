import postDetails from "@/app/lib/apiRequest/postDetails";

export default async function singleBlog({ params }) {
    const id = parseInt(params.id);
    const post = await postDetails(id);
    const postData = post.postDetails;

    return (
        <div>
            <div className='my-7 mx-7'>
                <p className='text-lg font-bold py-2'>{postData.title}</p>
                <div className='mt-4'>
                    <img src={postData.img} />
                </div>
                <div className='py-4 flex justify-center text-justify'>
                    <p>
                        {postData.content}
                    </p>
                </div>
            </div>
        </div >
    );

}