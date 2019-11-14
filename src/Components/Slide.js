import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchDetailPosts } from '../Services/reddit';

const Slide = props => {
    const [showDetails, updateShowDetails] = useState(false);
    const [post, updatePost] = useState({});
    const [thread, updateThread] = useState(null);

    useEffect(() => {
        const originalPost = props.posts[props.index];
        updatePost(originalPost);
        updateShowDetails(false);
        const fetchOriginalPost = async () => {
            const body = await fetchDetailPosts(originalPost.id);
            updateThread(body);
        };
        fetchOriginalPost();
    }, [props.index]);

    const populateComments = () => {
        return <div style={{ width: '600px', maxHeight: '150px', overflow: 'scroll' }}>{thread}</div>;
    };

    return (
        <article className="slide" style={{ padding: '15px', width: '100%' }}>
            <img src={post.thumbnail} alt="Image Not Found" />
            <p>{post.title}</p>
            {showDetails && populateComments()}
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
