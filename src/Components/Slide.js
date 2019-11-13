import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchDetailPosts } from '../Services/reddit';

const Slide = props => {
    const [showDetails, updateShowDetails] = useState(false);
    const [post, updatePost] = useState({});

    // useEffect(() => {
    //     const fetchOriginalPost = async () => {
    //         const originalPost = props.posts[props.index].id
    //         console.log(originalPost, 'id')
    //         const body = await fetchDetailPosts(originalPost).then(res => console.log(res))
    //         console.log(body)
    //     };
    //     if (props.posts.length !== 0) {
    //         fetchOriginalPost();
    //     }
    // })

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
