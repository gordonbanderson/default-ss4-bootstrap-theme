import {initaliseLazy} from "../components/lazysizes";
import {loadTwitter} from "../components/loadtwitter";
import {renderTweets} from "../components/rendertweets";
import {initaliseTimeAgo} from "../components/timeago";
import {initialiseFlickrPhotoSwipe} from "../components/flickrswipe";
import {initialiseFlexSlider} from "../components/flexslider";

console.log('INIT');
initaliseLazy();
loadTwitter();
renderTweets();
initaliseTimeAgo();
initialiseFlickrPhotoSwipe();
initialiseFlexSlider();
