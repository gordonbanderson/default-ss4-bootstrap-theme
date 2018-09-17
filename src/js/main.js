// Define globally exposed module objects
/* eslint-disable */

import loadtwitter from './thirdparty/loadtwitter';
import rendertweets from './thirdparty/rendertweets';
import lazysizes from './components/lazysizes';
import initialiser from './components/initialiser';
import cookieconsentpopup from './components/cookieconsentpopup';

import style from '../scss/main.scss';

lazysizes();
loadtwitter();
rendertweets();
initialiser();
cookieconsentpopup();



/* eslint-enable */
