export const fetchMasterPosts = async () => {
    const response = await fetch('https://www.reddit.com/r/apple.json');
    const data = await response.json();
    const posts = data.data.children;
    const filteredPosts = posts.map((post:any) => {
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

export const fetchDetailPosts = async (id: string) => {
    const response = await fetch(`https://www.reddit.com/r/apple/comments/${id}/dear_apple.json`);
    const data = await response.json();

    // API only returns an original post for the id "dv7tvt". Fetch call structured to be dynamic anyway.

    return data[0].data.children[0].data.selftext || 'The original post for this thread is not retrievable';
};
