import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchDetailPosts } from '../Services/reddit';

const Slide = props => {
    const [showDetails, updateShowDetails] = useState(false);
    const [post, updatePost] = useState({});

    useEffect(() => {
        const fetchOriginalPost = async () => {
            const originalPost = props.posts[props.index];
            console.log(originalPost.id, 'id');
            const body = await fetchDetailPosts(originalPost.id).then(res => console.log(res));
            console.log(body, 'body');
        };
        fetchOriginalPost();
    }, []);

    return (
        <article className="slide">
            <p>Some frigging text</p>
            <img src={post.url} />
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
