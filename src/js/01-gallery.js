import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const photoGallery = document.querySelector('.gallery');
photoGallery.innerHTML = markupGalleryItems(galleryItems);

const gallery = new SimpleLightbox('gallery a', {
    captionData: 'alt',
    captionDelay: 250,
});

function markupGalleryItems(listItems) {
    return listItems.map((item) =>
        `<a class="gallery__item" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}" />
        </a>`
    ).join('');
};