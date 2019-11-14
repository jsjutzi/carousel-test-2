import React, { useState, useEffect } from 'react';
import { fetchMasterPosts } from '../Services/reddit';
import Slide from './Slide';

const Carousel = () => {
    const [currentImageIndex, updateCurrentImageIndex] = useState(5);
    const [posts, updateCurrentPosts] = useState(null);

    const fetchPosts = async () => {
        const response = await fetchMasterPosts();
        updateCurrentPosts(response);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="carousel" style={{ display: 'flex', flexDirection: 'column', width: '500px', margin: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                <button onClick={() => updateCurrentImageIndex(currentImageIndex - 1)}>Prev</button>
                {posts && <Slide posts={posts} index={currentImageIndex} />}
                <button onClick={() => updateCurrentImageIndex(currentImageIndex + 1)}> Next</button>
            </div>
        </div>
    );
};

export default Carousel;
