import './reset.css'
import './style.css';
import { createHeader } from './header';

const body = document.querySelector('body');

body.appendChild(createHeader());