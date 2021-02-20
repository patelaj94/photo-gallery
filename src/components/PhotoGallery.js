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

            {
                pics.map((pic, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'}
                            key={index}>
                                {index === current && (
                                    <img src={pic.url} alt='travel image' className='image' />
                                )}
                        </div>
                    );
                })
            }
        </div>
    );
};

export default PhotoGallery;