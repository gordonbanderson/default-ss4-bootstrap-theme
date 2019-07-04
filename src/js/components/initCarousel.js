/* eslint-disable */
import $ from 'jquery';

window.$ = window.jQuery = $;
import 'owl.carousel';

/* eslint-enable */

export function initialiseCarousel() {
    console.log('Starting owl carousel');
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:100,
            nav: true, // this is not laying out correctly
            dots: true,
            navText: [
                // classes are for font awesome, and to hide the arrows at the lowest screen sizes
                "<i class='fa fa-arrow-left d-sm-none d-md-block'></i>",
                "<i class='fa fa-arrow-right d-sm-none d-md-block'></i>"
            ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            },

            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:false
        })
    });
}


