function removeGalleryImage(index) {
    const items = galleryGrid.querySelectorAll('.gallery-item');
    if (items[index]) {
        items[index].remove();
    }
}

// Clear all images
function clearGallery() {
    galleryGrid.innerHTML = '';
}

// Load images from array
function loadGalleryImages(imagesArray) {
    clearGallery();
    imagesArray.forEach((image, index) => {
        addGalleryImage(image.src, image.alt || `Image ${index + 1}`);
    });
}

// Image click event
galleryGrid.addEventListener('click', (e) => {
    const galleryItem = e.target.closest('.gallery-item');
    if (galleryItem && e.target.tagName === 'IMG') {
        console.log('Clicked image:', e.target.src);
        // You can add lightbox or modal functionality here
    }
});

// Export functions
window.galleryFunctions = {
    addImage: addGalleryImage,
    removeImage: removeGalleryImage,
    clearGallery: clearGallery,
    loadImages: loadGalleryImages
};