import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';


const PhotoGallery = ({pics}) => {
    
    const [current, setCurrent] = useState(0);
    const slideCounter = pics.length;

    const next = () => {
        setCurrent(current === slideCounter - 1 ? 0 : current + 1)
    };

    const previous = () => {
        setCurrent(current === 0 ? slideCounter - 1 : current - 1)
    };

    
    return (
       
        <div>
            <button onClick={previous} className="left-arrow">
                    <i className="fa fa-angle-left"></i>
            </button>

            <button onClick={next} className="right-arrow">
                    <i className="fa fa-angle-right"></i>
            </button>

            <div className={'slide-active'}>
                <img src={pics[current].url} className='image' />
                <div className={'slide-text'}><b>{pics[current].caption}</b></div>
            </div>
        </div>
    );
};

export default PhotoGallery;