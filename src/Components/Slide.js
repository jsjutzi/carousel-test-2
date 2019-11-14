import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchDetailPosts } from '../Services/reddit';

const Slide = props => {
    const [showDetails, updateShowDetails] = useState(false);
    const [post, updatePost] = useState({});

    useEffect(() => {
        console.log(props, 'props');
        const originalPost = props.posts[props.index];
        updatePost(originalPost);
        console.log(originalPost, 'original post');
        // const fetchOriginalPost = async () => {
        //     const originalPost = props.posts[props.index];
        //     console.log(originalPost, 'original post')
        //     console.log(originalPostId, 'original post ID');
        //     const body = await fetchDetailPosts(originalPostId).then(res => console.log(res));
        //     console.log(body, 'body');
        // };
        // fetchOriginalPost();
    }, [props.index]);

    return (
        <article className="slide" style={{ padding: '15px' }}>
            <img src={post.thumbnail} />
            <p>{post.title}</p>
            <button onClick={() => updateShowDetails(!showDetails)}>Show Details</button>
        </article>
    );
};

Slide.propTypes = {
    post: PropTypes.object,
    posts: PropTypes.array,
    index: PropTypes.number,
};

export default Slide;
