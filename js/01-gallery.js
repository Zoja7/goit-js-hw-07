import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const renderList = (arr, container) =>{ 
    const markup = arr.map((item) => `<li class="gallery_item"> 
    <a class="gallery_link" href="${item.original}">
    <img
        class="gallery_image"
        src="${item.preview}"
        data-source ="${item.original}"
        alt="${item.description}"
        width="360"
        />
    </a>
    </li>`).join("");
    
    container.insertAdjacentHTML("afterbegin", markup);
}


const imgGalleryOnClick = (event) => { 
    event.preventDefault();

 if (event.currentTarget === event.target) {
    return;
 }
    const clickedImg = event.target;
    const chosenImgSource = clickedImg.dataset.source;

    const galleryItem = galleryItems
        .find(item => item.original === chosenImgSource);

    if (galleryItem) {
        console.log(galleryItem.original); 
    }

    // import * as basicLightbox from 'basiclightbox'//

const modalInstance = basicLightbox.create(`
     <div class="modal"> 
         <li class="gallery_item">
            <img 
                src="${galleryItem.original}" 
                class="gallery__image"
                data-source="large-image.jpg"
                alt="Image description";
            />
        </li>
     </div>
`)
    modalInstance.show()

    listEl.addEventListener("keydown", (event) => {

        if (event.code === "Escape") {
            modalInstance.close()
        }

    });

    listEl.removeEventListener("keydown", listener, false);
    
    const containerModal = document.querySelector(".modal");
    containerModal.style.width = `${90}%`;   
    
}



renderList(galleryItems, listEl);
listEl.addEventListener("click", imgGalleryOnClick);
