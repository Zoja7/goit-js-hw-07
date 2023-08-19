
import { galleryItems } from './gallery-items.js';

// Change code below this line

const listEl = document.querySelector(".gallery");

const renderList = (arr, container) =>{ 
    const markup = arr.map((item) => `<li class="gallery_item"> 
    <a class="gallery_link" href="${item.original}">
    <img
        class="gallery_image"
        src="${item.preview}"
        alt="${item.description}"
        width="360"
        />
    </a>
    </li>`).join("");
    
    container.insertAdjacentHTML("afterbegin", markup);
}

renderList(galleryItems, listEl);

const imgGalleryOnClick = (event) => {
    event.preventDefault();

    if (event.currentTarget === event.target) {
        return;
    }
    
    const clickedImg = event.target;
    const chosenImgSource = clickedImg.closest("a").getAttribute("href");

    const galleryItem = galleryItems.find(item => item.original === chosenImgSource);

    if (galleryItem) {
        console.log(galleryItem.original);
    }


      let gallery = new SimpleLightbox('.gallery a', {
        captions: true,
        captionType: 'attr', 
        captionsData: 'alt', 
        animationSpeed: 250,
    });

 
}

listEl.addEventListener("click", imgGalleryOnClick);


