import bgImage from './assets/dinner-image.jpg';
import { createImage } from './images.js';
import { createCredit } from './images.js';

export function createMainWelcome(){
    const mainWelcome = document.createElement('div');
    mainWelcome.classList.add('mainWelcome');

    // use the imported image
    const myBgImage = createImage(bgImage);

    // create a container for the image
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer')

    // text to credit image
    const imageCreditText = createCredit('Photo by Chan Walrus', 'https://www.pexels.com/photo/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545/');
    
    imageContainer.appendChild(imageCreditText);
    imageContainer.appendChild(myBgImage);
    mainWelcome.appendChild(imageContainer);

    return mainWelcome;
}