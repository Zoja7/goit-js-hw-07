import { galleryItems } from './gallery-items.js';
// Change code below this line


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

 if (event.target.nodeName !== "IMG") {
    return;
 }
    const clickedImg = event.target;
    // const chosenImgSource = clickedImg.dataset.source;
    const chosenImgSource = clickedImg.getAttribute("data-source");

    const galleryItem = galleryItems
        .find(item => item.original === chosenImgSource);

    if (galleryItem) {
        console.log(galleryItem.original); 
    }

const modalInstance = basicLightbox.create(`
     <div class="modal"> 
         <li class="gallery_item">
            <img 
                src="${galleryItem.original}" 
                class="gallery__image"
                data-source=""
                alt="${galleryItem.description}"
            />
        </li>
     </div>
`)
    modalInstance.show()

    const handlerEsc = (event) => {
     
        if (event.code === "Escape") {
            modalInstance.close();
            listEl.removeEventListener("keydown", handlerEsc);
        }
        
    };

    listEl.addEventListener("keydown", handlerEsc);
  
    const containerModal = document.querySelector(".modal");
    containerModal.style.width = `90%`;   
    
}

renderList(galleryItems, listEl);
listEl.addEventListener("click", imgGalleryOnClick);


