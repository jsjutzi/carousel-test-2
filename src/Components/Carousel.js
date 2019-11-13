import React, { useState, useEffect } from 'react';
import { fetchMasterPosts, fetchDetailPosts } from '../Services/reddit';
import Slide from './Slide';

const Carousel = () => {
    const [currentImageIndex, updateCurrentImageIndex] = useState(0);
    const [posts, updateCurrentPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetchMasterPosts();
        updateCurrentPosts(response);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        //TODO: Build Carousel and onClick event with modal
        <div className="carousel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
                <button onClick={() => updateCurrentImageIndex(currentImageIndex - 1)}>Prev</button>
                <Slide posts={posts} index={currentImageIndex} />
                <button onClick={() => updateCurrentImageIndex(currentImageIndex + 1)}> Next</button>
            </div>
        </div>
    );
};

export default Carousel;
