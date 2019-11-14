import React, { useState, useEffect } from 'react';
import { fetchMasterPosts } from '../Services/reddit';
import Slide from './Slide';

const Carousel = () => {
    const [currentImageIndex, updateCurrentImageIndex] = useState(0);
    const [posts, updateCurrentPosts] = useState(null);

    const fetchPosts = async () => {
        const response = await fetchMasterPosts();
        updateCurrentPosts(response);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const changeSlide = index => {
        if (index > posts.length - 1) {
            updateCurrentImageIndex(0);
        } else if (index < 0) {
            updateCurrentImageIndex(posts.length - 1);
        } else {
            updateCurrentImageIndex(index);
        }
    };
    return (
        <div className="carousel" style={{ display: 'flex', flexDirection: 'column', width: '800px', margin: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                <button onClick={() => changeSlide(currentImageIndex - 1)}>Prev</button>
                {posts && <Slide posts={posts} index={currentImageIndex} />}
                <button onClick={() => changeSlide(currentImageIndex + 1)}> Next</button>
            </div>
        </div>
    );
};

export default Carousel;
