export const fetchMasterPosts = async() => {
    const response = await fetch('https://www.reddit.com/r/apple.json')
    const data = await response.json();
    const posts = data.data.children;
    const filteredPosts = posts.map((post) => {
        const {data: {title, url, id}} = post;
        return {
            title: title,
            url: url,
            id: id,
        } 
    })
    return filteredPosts;
}

export const fetchDetailPosts = async(id) => {
    const response = await fetch('https://www.reddit.com/r/apple/comments/dv7tvt/dear_apple.json')
    let data = await response.json();
    const originalPosts = [];
    data = data.map((post) => {
        return post.data.children
    })
    data.forEach((post) => {
        post.forEach((child) => {
            const {data: {id, body}} = child;
            originalPosts.push({
                id: id,
                body: body ? body : "original post not available"
            })
        })
    })
   const filteredOrigin = originalPosts.filter((post) => post.id === id)
   return filteredOrigin.body
}