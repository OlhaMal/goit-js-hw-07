import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createGalleryImagesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

galleryContainer.addEventListener("click", onModalClick);

function createGalleryImagesMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onModalClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const modalOptions = {
    onShow: () => document.addEventListener("keydown", onEscKey),
    onClose: () => document.removeEventListener("keydown", onEscKey),
  };

  const selectedImageUrl = evt.target.dataset.source;

  const instance = basicLightbox.create(`
		<img width="800" height="600" src="${selectedImageUrl}">
	`, modalOptions);


  function onEscKey(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
