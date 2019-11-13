import React, { useState, useEffect } from 'react';
import { fetchDetailPosts } from '../Services/reddit';

const Slide = props => {
    const [post, updatePost] = useState({});
    const { posts, index } = props;

    const originalPost = async () => {
        const body = await fetchDetailPosts(post.id).then(res => updatePost(res));
        console.log(post);
    };

    // TODO: Get good at effects
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const fetchPost = await originalPost();
    //         return fetchPost
    //     }
    //     updatePost(fetchData())
    //     console.log(updatePost)
    // }, [])

    return (
        //TODO: Build Slide and onClick event with modal

        <article className="slide">
            <img src={post.url} />
            <p>{post.title}</p>
        </article>
    );
};

Slide.propTypes = {
    post: PropTypes.object,
    posts: PropTypes.array,
    index: PropTypes.number,
};

export default Slide;
