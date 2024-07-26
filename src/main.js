import bgImage from './assets/DinnerImage.jpg';
import { createMainWelcome } from './main-welcome';

export function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');

    main.appendChild(createMainWelcome());

    return main;
}