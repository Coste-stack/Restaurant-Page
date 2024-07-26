export function createMainMenu(){
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('mainMenu');

    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const tab = [['Main Courses'], ['Appetizers'], ['Desserts']];
    for(let i = 0; i < tab.length; i++){
        const button = document.createElement('button');
        button.innerHTML = tab[i][0];

        nav.appendChild(button);
        header.appendChild(nav);
    }

    const main = document.createElement('main');

    mainMenu.appendChild(header);
    return mainMenu;
}