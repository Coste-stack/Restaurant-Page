export function createMainCourses(){
    const tab = [
        {title: 'Butter Chicken', description: 'Tender chicken pieces simmered in a rich, creamy tomato-based sauce with a blend of spices, served with naan or rice'},
        {title: 'Palak Paneer', description: 'Indian cottage cheese cooked in a spiced spinach gravy, a vegetarian delight served with roti or paratha'},
        {title: 'Chole Bhature', description: 'Spicy chickpea curry served with deep-fried bread (bhature) and a side of pickles and onions'},
        {title: 'Lamb Rogan Josh', description: 'Slow-cooked lamb in a fragrant and spicy sauce with yogurt, tomatoes, and aromatic spices, paired with basmati rice or naan'},
        {title: 'Dal Tadka', description: 'Yellow lentils cooked with onions, tomatoes, and a tempering of cumin, garlic, and ghee, served with steamed rice or roti'}
    ]

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    for(let i = 0; i < tab.length; i++){
        /*create all containers*/
        const foodContainer = document.createElement('div');
        const imageSection = document.createElement('section');
        const textSection = document.createElement('section');
        const title = document.createElement('h1');
        const description = document.createElement('h2');

        /*add classes to them*/
        foodContainer.classList.add('foodContainer');
        imageSection.classList.add('imageSection');
        textSection.classList.add('textSection');
        title.classList.add('title');
        description.classList.add('description');
        
        /*add all informations to them*/
        title.innerHTML = tab[i]['title'];
        description.innerHTML = tab[i]['description'];
        
        /*structure them*/
        textSection.appendChild(title);
        textSection.appendChild(description);
        foodContainer.appendChild(imageSection);
        foodContainer.appendChild(textSection);
        menuContainer.appendChild(foodContainer);
    }

    
    return menuContainer;
}