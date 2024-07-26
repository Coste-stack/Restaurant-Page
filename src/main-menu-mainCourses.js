import butterChicken from './assets/butter-chicken.jpg';
import palakPaneer from './assets/palak-paneer.jpg';
import choleBhature from './assets/chole-bhature.jpg';
import lambRoganJosh from './assets/lamb-rogan-josh.jpg';
import dalTadka from './assets/dal-tadka.jpg';

import { createImage } from './images.js';
import { createCredit } from './images.js';

export function createMainCourses(){
    const tab = [
        {title: 'Butter Chicken', description: 'Tender chicken pieces simmered in a rich, creamy tomato-based sauce with a blend of spices, served with naan or rice', 
            image: createImage(butterChicken), creditText: 'Image by timolina on Freepik', creditLink: 'https://www.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine-top-view_6572208.htm#fromView=search&page=1&position=0&uuid=5158a7bb-3002-4b4d-9e30-37fdbcc8599d'},
        {title: 'Palak Paneer', description: 'Indian cottage cheese cooked in a spiced spinach gravy, a vegetarian delight served with roti or paratha', 
            image: createImage(palakPaneer), creditText: 'Image by freepik', creditLink: 'https://www.freepik.com/free-photo/top-view-pakistani-food-arrangement_12144194.htm#fromView=search&page=1&position=2&uuid=26cea397-9382-4258-b2b6-9907d5f01712'},
        {title: 'Chole Bhature', description: 'Spicy chickpea curry served with deep-fried bread (bhature) and a side of pickles and onions', 
            image: createImage(choleBhature), creditText: 'Image by freepik', creditLink: 'https://www.freepik.com/free-photo/pita-spicy-indian-food_5622270.htm#fromView=search&page=1&position=0&uuid=a8cc8544-bc06-413e-a410-5d7ad3685555'},
        {title: 'Lamb Rogan Josh', description: 'Slow-cooked lamb in a fragrant and spicy sauce with yogurt, tomatoes, and aromatic spices, paired with basmati rice or naan', 
            image: createImage(lambRoganJosh), creditText: 'Image by freepik', creditLink: 'https://www.freepik.com/free-photo/tasty-pakistani-dish-view_12144207.htm#fromView=search&page=1&position=2&uuid=3be4dc03-f393-4e39-9a5d-52262459e3b3'},
        {title: 'Dal Tadka', description: 'Yellow lentils cooked with onions, tomatoes, and a tempering of cumin, garlic, and ghee, served with steamed rice or roti', 
            image: createImage(dalTadka), creditText: 'Image by KamranAydinov on Freepik', creditLink: 'https://www.freepik.com/free-photo/lentil-soup-white-bowl_7874497.htm#fromView=search&page=1&position=1&uuid=73183bc7-02f8-4766-8d46-e5ada9d034bc'}
    ]

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    for(let i = 0; i < tab.length; i++){
        //create all containers
        const foodContainer = document.createElement('div');
        const imageSection = document.createElement('section');
        const textSection = document.createElement('section');
        const title = document.createElement('h1');
        const description = document.createElement('h2');

        //add classes to them
        foodContainer.classList.add('foodContainer');
        imageSection.classList.add('imageSection');
        textSection.classList.add('textSection');
        title.classList.add('title');
        description.classList.add('description');
        
        //add all informations to them
        title.innerHTML = tab[i]['title'];
        description.innerHTML = tab[i]['description'];
        const imageSrc = tab[i]['image'];
        const imageCreditText = createCredit(tab[i]['creditText'], tab[i]['creditLink']);
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');

        //structure them
        imageContainer.appendChild(imageSrc);
        imageContainer.appendChild(imageCreditText);
        imageSection.appendChild(imageContainer);
        
        textSection.appendChild(title);
        textSection.appendChild(description);
        foodContainer.appendChild(imageSection);
        foodContainer.appendChild(textSection);
        menuContainer.appendChild(foodContainer);
    }

    
    return menuContainer;
}