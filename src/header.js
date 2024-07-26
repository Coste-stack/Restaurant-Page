export function createHeader(){
    const header = document.createElement('header');

    // create three buttons
    const nav1 = document.createElement('nav');
    const tab1 = [['Home'], ['Menu'], ['About']];
    for(let i = 0; i < tab1.length; i++){
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.innerHTML = tab1[i][0];

        div.appendChild(button);
        nav1.appendChild(div);
        header.appendChild(nav1);
    }

    // create a logo in the middle
    const nav2 = document.createElement('nav');
    const logo = document.createElement('div');
    const logoText = document.createElement('p');
    logoText.innerHTML = "Logo";
    logo.appendChild(logoText);
    nav2.appendChild(logo);
    header.appendChild(nav2);

    // create a sign in and order button
    const nav3 = document.createElement('nav'); 
    const tab2 = [['Sign In'], ['Order']];
    for(let i = 0; i < tab2.length; i++){
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.innerHTML = tab2[i][0];

        div.appendChild(button);
        nav3.appendChild(div);
        header.appendChild(nav3);
    }

    return header;
}