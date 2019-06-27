/* eslint-disable */
import $ from 'jquery';
import * as flexslider from 'flexslider';

/* eslint-enable */

export function initialiseFlexSlider() {
    console.log('++++ FLEX SLIDER ++++');
    console.log(flexslider);

    $( document ).ready(function() {
        console.log( "ready!" );
        $('.flexslider').flexslider({
            animation: "slide",
            prevText: "<i class='fa fa-arrow-circle-left'></i>",
            nextText: "<i class='fa fa-arrow-circle-right'></i>"
        });
    });


}
