/* eslint-disable */
import $ from 'jquery';

import '../../../node_modules/photoswipe/src/css/default-skin/default-skin.scss';

/* eslint-enable */

export function initialiseFlickrPhotoSwipe() {
    var $pswp = $('.pswp')[0];
    var image = [];

    console.log('**** FLICKR SWIPE ****');

    $('.gallery').each( function() {
        var $pic     = $(this),
            getItems = function() {
                var items = [];
                $pic.find('a').each(function() {
                    var $href   = $(this).attr('href'),
                        $size   = $(this).data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1],
                        $aperture = $(this).data('aperture'),
                        $shutterspeed = $(this).data('shutterspeed'),
                        $title=$(this).attr('title'),
                        $takenAt = $(this).data('taken-at'),
                        $link = $(this).data('link')
                    ;

                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height,
                        title: '<a href="' + $link + '"><i class="fa fa-flickr"></i></a> '+
                            '<i class="fa fa-camera"></i> f' +
                            $aperture + ' ' + $shutterspeed +'s ' +
                            '<i class="fa fa-calendar"></i> ' + $takenAt + '<br/>' +
                            $title
                    }

                    items.push(item);
                });
                return items;
            }

        var items = getItems();

        $.each(items, function(index, value) {
            image[index]     = new Image();
            image[index].src = value['src'];
        });

        $pic.on('click', 'figure', function(event) {
            event.preventDefault();

            var $index = $(this).index();
            var options = {
                index: $index,
                bgOpacity: 0.9,
                showHideOpacity: true
            }

            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });
}
