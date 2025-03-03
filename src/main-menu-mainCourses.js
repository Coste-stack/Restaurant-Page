import butterChicken from './assets/main-courses/butter-chicken.jpg';
import palakPaneer from './assets/main-courses/palak-paneer.jpg';
import choleBhature from './assets/main-courses/chole-bhature.jpg';
import lambRoganJosh from './assets/main-courses/lamb-rogan-josh.jpg';
import dalTadka from './assets/main-courses/dal-tadka.jpg';

import samosas from './assets/appetizers/samosas.jpg';
import pakoras from './assets/appetizers/pakoras.jpg';
import paneerTikka from './assets/appetizers/paneer-tikka.jpg';
import alooTikki from './assets/appetizers/aloo-tikki.jpg';

import gulabJamun from './assets/desserts/gulab-jamun.jpg';
import rasgulla from './assets/desserts/rasgulla.jpg';
import jalebi from './assets/desserts/jalebi.jpg';
import mangoLassi from './assets/desserts/mango-lassi.jpg';

import { createImage } from './images.js';
import { createCredit } from './images.js';

export function createMainCourses(tab){
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


export const mainCourses = [
    {
        title: 'Butter Chicken', 
        description: 'Tender chicken pieces simmered in a rich, creamy tomato-based sauce with a blend of spices, served with naan or rice', 
        image: createImage(butterChicken), 
        creditText: 'Image by timolina on Freepik', 
        creditLink: 'https://www.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine-top-view_6572208.htm#fromView=search&page=1&position=0&uuid=5158a7bb-3002-4b4d-9e30-37fdbcc8599d'
    },
    {
        title: 'Chole Bhature', 
        description: 'Spicy chickpea curry served with deep-fried bread (bhature) and a side of pickles and onions', 
        image: createImage(choleBhature), 
        creditText: 'Image by freepik', 
        creditLink: 'https://www.freepik.com/free-photo/pita-spicy-indian-food_5622270.htm#fromView=search&page=1&position=0&uuid=a8cc8544-bc06-413e-a410-5d7ad3685555'
    },
    {
        title: 'Palak Paneer', 
        description: 'Indian cottage cheese cooked in a spiced spinach gravy, a vegetarian delight served with roti or paratha', 
        image: createImage(palakPaneer), 
        creditText: 'Image by freepik', 
        creditLink: 'https://www.freepik.com/free-photo/top-view-pakistani-food-arrangement_12144194.htm#fromView=search&page=1&position=2&uuid=26cea397-9382-4258-b2b6-9907d5f01712'
    },
    {
        title: 'Lamb Rogan Josh', 
        description: 'Slow-cooked lamb in a fragrant and spicy sauce with yogurt, tomatoes, and aromatic spices, paired with basmati rice or naan', 
        image: createImage(lambRoganJosh), 
        creditText: 'Image by freepik', 
        creditLink: 'https://www.freepik.com/free-photo/tasty-pakistani-dish-view_12144207.htm#fromView=search&page=1&position=2&uuid=3be4dc03-f393-4e39-9a5d-52262459e3b3'
    },
    {
        title: 'Dal Tadka', 
        description: 'Yellow lentils cooked with onions, tomatoes, and a tempering of cumin, garlic, and ghee, served with steamed rice or roti', 
        image: createImage(dalTadka), 
        creditText: 'Image by KamranAydinov on Freepik', 
        creditLink: 'https://www.freepik.com/free-photo/lentil-soup-white-bowl_7874497.htm#fromView=search&page=1&position=1&uuid=73183bc7-02f8-4766-8d46-e5ada9d034bc'
    }
]

export const appetizers = [
    {
        title: 'Samosas', 
        description: 'Crispy pastry filled with spiced potatoes, peas, and cumin seeds, served with mint chutney', 
        image: createImage(samosas), 
        creditText: 'Photo by Karthikeyan Anand', 
        creditLink: 'https://www.pexels.com/photo/delicious-fried-samosa-in-a-wicker-tray-14477873/'
    },
    {
        title: 'Pakoras', 
        description: 'Assorted vegetables (onions, potatoes, spinach) dipped in a spiced gram flour batter and deep-fried, accompanied by tamarind chutney', 
        image: createImage(pakoras), 
        creditText: 'Image by ArtificialOG from Pixabay', 
        creditLink: 'https://pixabay.com/photos/pakora-indian-food-indian-kitchen-3856054/'
    },
    {
        title: 'Paneer Tikka', 
        description: 'Marinated cubes of paneer (Indian cottage cheese) grilled to perfection with bell peppers and onions, served with a side of mint yogurt sauce', 
        image: createImage(paneerTikka), 
        creditText: 'Image by ArtificialOG from Pixabay', 
        creditLink: 'https://pixabay.com/photos/tandoori-chicken-tikka-indian-food-3856045/'
    },
    {
        title: 'Aloo Tikki', 
        description: 'Spiced potato patties served with tamarind and cilantro-mint chutneys', 
        image: createImage(alooTikki), 
        creditText: 'Image by freepik', 
        creditLink: 'https://www.freepik.com/free-photo/delicious-boneless-chicken-sauce-arrangement_35022709.htm#fromView=search&page=1&position=10&uuid=4c8ede54-d0d7-4d3d-bdda-770924cf2795'
    }
]

export const desserts = [
    {
        title: 'Gulab Jamun', 
        description: 'Soft, deep-fried milk-based dumplings soaked in a fragrant sugar syrup, often garnished with cardamom and rose water', 
        image: createImage(gulabJamun), 
        creditText: 'Image by Imran from Pixabay ', 
        creditLink: 'https://pixabay.com/photos/indian-sweet-gulab-jamun-indian-371357/'
    },
    {
        title: 'Mango Lassi', 
        description: 'A refreshing yogurt-based drink blended with ripe mangoes, perfect for cooling off after a spicy meal', 
        image: createImage(mangoLassi), 
        creditText: 'Photo by SimplyArt4794 ', 
        creditLink: 'https://www.pexels.com/photo/glasses-of-delicious-mango-lassi-on-round-wooden-board-14509267/'
    },
    {
        title: 'Jalebi', 
        description: 'Sweet, crispy spiral-shaped treats made from fermented dough, deep-fried and soaked in sugar syrup, served warm', 
        image: createImage(jalebi), 
        creditText: 'Photo by Saveurs Secretes ', 
        creditLink: 'https://www.pexels.com/photo/jalebi-on-a-stainless-plate-5831655/'
    },
    {
        title: 'Rasgulla', 
        description: 'Light and spongy cheese balls soaked in a sweet syrup, made from chenna (curdled milk) and flavored with cardamom', 
        image: createImage(rasgulla), 
        creditText: 'Image by Vikram Gautam from Pixabay', 
        creditLink: 'https://pixabay.com/photos/laddu-sweets-mithai-diwali-dessert-6258444/'
    }
]
