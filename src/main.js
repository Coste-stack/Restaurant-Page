import bgImage from './assets/DinnerImage.jpg';

export function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');

    // use the imported image
    const myBgImage = new Image();
    myBgImage.src = bgImage;
    main.appendChild(myBgImage);

    return main;
}