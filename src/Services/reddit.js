export const fetchMasterPosts = async () => {
    const response = await fetch('https://www.reddit.com/r/apple.json');
    const data = await response.json();
    const posts = data.data.children;
    const filteredPosts = posts.map(post => {
        const {
            data: { title, url, id, thumbnail },
        } = post;
        return {
            title,
            url,
            id,
            thumbnail,
        };
    });
    return filteredPosts;
};

// TODO: Clarify what "show thread" refers to, the original body of the post or the list of comments for thread
// export const fetchDetailPosts = async id => {
//     id = 'dvxeft';
//     const response = await fetch(`https://www.reddit.com/r/apple/comments/${id}/dear_apple.json`);
//     const data = await response.json();
//     const originalPosts = [];
//     const parsedData = data.map(post => {
//         return post.data.children;
//     });
//     parsedData.forEach(post => {
//         post.forEach(child => {
//             const {
//                 data: { parent_id, body },
//             } = child;
//             originalPosts.push({
//                 parent_id,
//                 body: body || 'original post not available',
//             });
//         });
//     });
//     const filteredOrigin = originalPosts.filter(post => post.id === id);
//     return filteredOrigin.body;
// };
