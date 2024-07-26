import bgImage from './assets/DinnerImage.jpg';
import { createMainWelcome } from './main-welcome';
import { createMainMenu } from './main-menu';

export function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');

    main.appendChild(createMainWelcome());
    main.appendChild(createMainMenu());

    return main;
}