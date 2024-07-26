import './reset.css'
import './style.css';
import { createHeader } from './header';
import { createMain } from './main';
import { createFooter } from './footer';

const body = document.querySelector('body');
const bodyContent = document.createElement('div');
bodyContent.classList.add('bodyContent');
body.appendChild(bodyContent);

bodyContent.appendChild(createHeader());
bodyContent.appendChild(createMain());
bodyContent.appendChild(createFooter());