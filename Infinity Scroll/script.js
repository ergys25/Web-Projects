//Unsplash API

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];
const apiKey = ''
const count = 10;
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getPhotos() {
    try {
        const response = await fetch(API_URL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log(error);
    }
}


getPhotos();