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

    imageContainer.appendChild(myBgImage);
    mainWelcome.appendChild(imageContainer);

    return mainWelcome;
}