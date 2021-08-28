import React from 'react';

export default function ImageGalleryItem({ tags, webformatURL, largeImageURL }) {
    return (
        <li className="ImageGalleryItem">
            <img
                src={webformatURL}
                alt={tags}
                data-largeimg = {largeImageURL}
                className="ImageGalleryItem-image" />
        </li>
    )
}