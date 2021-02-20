import React from 'react';

const PhotoGallery = ({pics}) => {
    return (
        <>
            {pics.map((pic, index) => {
                return (
                    <img src={pic.url} alt="" />
                )
            })}
        </>
    )
}

export default PhotoGallery;