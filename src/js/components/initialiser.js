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
        prevText: "<i class='fa fa-arrow-left'></i>",
        nextText: "<i class='fa fa-arrow-right'></i>"
    });

}


