import './reset.css'
import './style.css';
import { createHeader } from './header';
import { createFooter } from './footer';

const body = document.querySelector('body');

body.appendChild(createHeader());
body.appendChild(createFooter());