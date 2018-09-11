/* eslint-disable */
import $ from 'jquery';
/* eslint-enable */

export default function () {

    // timeago
    $(document).ready(function() {
        $("time.timeago").timeago();
    });


    // slider
    $('.flexslider').flexslider({
        animation: "slide",
        prevText: "<",
        nextText: ">"
    });

}


