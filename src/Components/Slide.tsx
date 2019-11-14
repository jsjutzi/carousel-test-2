import React, { useState, useEffect } from 'react';
import { fetchDetailPosts } from '../Services/reddit';

const Slide: React.SFC<SlideProps> = props => {
    const [showDetails, updateShowDetails] = useState(false);
    const [post, updatePost] = useState({ thumbnail: '', title: '' });
    const [thread, updateThread] = useState('');

    useEffect(() => {
        const originalPost = props.posts[props.index];
        const fetching = 'Fetching...';
        updateThread(fetching);
        updatePost(originalPost);
        updateShowDetails(false);
        const fetchOriginalPost = async () => {
            const body = await fetchDetailPosts(originalPost.id);
            updateThread(body);
        };
        fetchOriginalPost();
    }, [props.index, props.posts]);

    const populateComments = () => {
        return <div style={{ width: '600px', maxHeight: '150px', overflow: 'scroll' }}>{thread}</div>;
    };

    return (
        <article className="slide" style={{ padding: '15px', width: '100%' }}>
            <img src={post.thumbnail} alt="Not Available" />
            <p>{post.title}</p>
            {showDetails && populateComments()}
            <button onClick={() => updateShowDetails(!showDetails)}>Show Details</button>
        </article>
    );
};

interface SlideProps {
    index: number;
    posts: Array<any>;
}

export default Slide;
