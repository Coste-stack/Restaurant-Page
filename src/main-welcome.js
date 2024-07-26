import bgImage from './assets/DinnerImage.jpg';

export function createMainWelcome(){
    const mainWelcome = document.createElement('div');
    mainWelcome.classList.add('mainWelcome');

    // use the imported image
    const myBgImage = new Image();
    myBgImage.src = bgImage;

    // create a container for the image
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer')

    // text to credit image
    const imageCreditText = document.createElement('a');
    const imageCreditLink = document.createTextNode('Photo by Chan Walrus');
    imageCreditText.appendChild(imageCreditLink);
    imageCreditText.classList.add('creditText');
    imageCreditText.title = 'Photo by Chan Walrus';
    imageCreditText.href = 'https://www.pexels.com/photo/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545/';
    imageCreditText.target = '_blank';
    
    imageContainer.appendChild(imageCreditText);
    imageContainer.appendChild(myBgImage);
    mainWelcome.appendChild(imageContainer);

    return mainWelcome;
}