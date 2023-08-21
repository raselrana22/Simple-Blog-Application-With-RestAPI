export default async function postList() {
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-list/2',
        {
            method: 'GET',
        })
    const data = await res.json();
    return data;
}