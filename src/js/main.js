// Define globally exposed module objects
/* eslint-disable */

import loadtwitter from './thirdparty/loadtwitter';
import rendertweets from './thirdparty/rendertweets';
import lazysizes from './components/lazysizes';
import initialiser from './components/initialiser';
import cookieconsentpopup from './components/cookieconsentpopup';

// @todo Is there a better way to reference JS installed by node?  The ~/name syntax did not seem to work as with css
// **** THIS IS NOT A COMPONENT **** <<<< that's the issue
import photoswipe from "../../node_modules/photoswipe/dist/photoswipe.js";
import photoswipeui from "../../node_modules/photoswipe/dist/photoswipe-ui-default";

import flickrphotoswipe from './thirdparty/flickrswipe';


import style from '../scss/main.scss';

lazysizes();
loadtwitter();
rendertweets();
initialiser();
cookieconsentpopup();
photoswipe();
photoswipeui();
flickrphotoswipe();



/* eslint-enable */
