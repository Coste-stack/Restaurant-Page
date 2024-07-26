export function createHeader(){
    const header = document.createElement('header');

    const nav = document.createElement('nav');
    const tab = [['Home'], ['Menu'], ['About']];
    for(let i = 0; i < tab.length; i++){
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.innerHTML = tab[i][0];

        div.appendChild(button);
        nav.appendChild(div);
        header.appendChild(nav);
    }

    return header;
}