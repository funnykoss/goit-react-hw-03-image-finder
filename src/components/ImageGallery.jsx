import React from 'react';
import ImageGalleryItem from './ImageGalleryItem'

export default function ImageGallery({images}) {
    return (
        <ul className="ImageGallery">
            {images.map(({ id, tags, webformatURL, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        tags={tags}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                    />   
                )
            })}
        </ul>
    )
}

