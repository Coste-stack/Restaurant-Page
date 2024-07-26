import { createMainCourses, mainCourses } from "./main-menu-mainCourses";

export function createMainMenu(){
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('mainMenu');

    /*add buttons to header*/
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const tab = [['Main Courses'], ['Appetizers'], ['Desserts']];
    for(let i = 0; i < tab.length; i++){
        const button = document.createElement('button');
        button.innerHTML = tab[i][0];

        nav.appendChild(button);
        header.appendChild(nav);
    }

    const mainMenuDefault = mainMenu.cloneNode(true);
    mainMenu.appendChild(header);
    mainMenu.appendChild(createMainCourses(mainCourses)); // as default put MainCourses

    /*add a way to select specific menu category*/
    const buttons = header.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // if there's already a menu created, delete it
            document.querySelectorAll('.menuContainer').forEach(el => el.remove());

            mainMenu.appendChild(createMainCourses(mainCourses));
        });
    });
    
    return mainMenu;
}