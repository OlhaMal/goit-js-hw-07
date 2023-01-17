import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createGalleryImagesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createGalleryImagesMarkup(items) {
    return items
      .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
      })
      .join("");
  }

  const lightBox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });