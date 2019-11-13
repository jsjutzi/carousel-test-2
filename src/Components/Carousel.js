import React, { useState, useEffect } from 'react';
import { fetchMasterPosts, fetchDetailPosts } from '../Services/reddit';
import Slide from './Slide';

const Carousel = () => {
    const [isOpen, updateIsOpen] = useState(false);
    const [currentImageIndex, updateCurrentImageIndex] = useState(0);
    const [posts, updateCurrentPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetchMasterPosts();
        updateCurrentPosts(response);
    };

    useEffect(() => {
        fetchPosts();
    });

    return (
        //TODO: Build Carousel and onClick event with modal
        <div className="carousel">
            <span>Left</span>
            <Slide posts={posts} index={currentImageIndex} />
            <span>Right</span>
            <button>Show Details</button>
        </div>
    );
};

export default Carousel;
