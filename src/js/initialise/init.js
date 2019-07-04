import {initaliseLazy} from "../components/lazysizes";
import {loadTwitter} from "../components/loadtwitter";
import {renderTweets} from "../components/rendertweets";
import {initaliseTimeAgo} from "../components/timeago";
import {initialiseFlickrPhotoSwipe} from "../components/flickrswipe";
import {initialiseCarousel} from "../components/initCarousel";
// node_modules/owl.carousel/dist/owl.carousel.js

console.log('INIT');
initaliseLazy();
loadTwitter();
renderTweets();
initaliseTimeAgo();
initialiseFlickrPhotoSwipe();
initialiseCarousel();
