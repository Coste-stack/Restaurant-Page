export function createImage(image){
    // use the imported image
    const imageSrc = new Image();
    imageSrc.src = image;
    imageSrc.loading = 'lazy';
    return imageSrc;
}

export function createCredit(title, link){
    // text to credit image
    const imageCreditText = document.createElement('a');
    const imageCreditLink = document.createTextNode(title);
    imageCreditText.appendChild(imageCreditLink);
    imageCreditText.classList.add('creditText');
    imageCreditText.title = title;
    imageCreditText.href = link;
    imageCreditText.target = '_blank';
    imageCreditText.rel = 'noopener noreferrer';

    return imageCreditText;
}