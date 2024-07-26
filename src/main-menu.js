import { createMainCourses, mainCourses, appetizers, desserts } from "./main-menu-mainCourses";

export function createMainMenu(){
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('mainMenu');

    /*add buttons to header*/
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const tab = ['Main Courses', 'Appetizers', 'Desserts'];
    for(let i = 0; i < tab.length; i++){
        const button = document.createElement('button');
        button.innerHTML = tab[i];

        nav.appendChild(button);
        header.appendChild(nav);
    }

    /*create a headline text to show which category is currently showing */
    const headline = document.createElement('nav');
    const selectedCategory = document.createElement('h1');
    headline.appendChild(selectedCategory);
    headline.classList.add('headline');

    mainMenu.appendChild(header);
    selectedCategory.innerHTML = tab[0];
    mainMenu.appendChild(headline);
    mainMenu.appendChild(createMainCourses(mainCourses)); // as default put MainCourses

    /*add a way to select specific menu category*/
    const buttons = header.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // if there's already a menu created, delete it
            document.querySelectorAll('.menuContainer').forEach(el => el.remove());

            if(button.innerHTML == tab[0]) {
                mainMenu.appendChild(createMainCourses(mainCourses));
                selectedCategory.innerHTML = tab[0];
            } 
            else if (button.innerHTML == tab[1]) {
                mainMenu.appendChild(createMainCourses(appetizers));
                selectedCategory.innerHTML = tab[1];
            }
            else if (button.innerHTML == tab[2]) {
                mainMenu.appendChild(createMainCourses(desserts));
                selectedCategory.innerHTML = tab[2];
            }
        });
    });
    
    return mainMenu;
}