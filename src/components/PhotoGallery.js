import React, { useState } from 'react';


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
        
        <section className="slider">
            <button onClick={previous} className="slider__btn-left">
                    <i className="fas fa-angle-left"></i>
            </button>

            <button onClick={next} className="slider__btn-right">
                    <i className="fas fa-angle-right"></i>
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
        </section>
    );
};

export default PhotoGallery;