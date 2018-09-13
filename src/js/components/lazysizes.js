/* eslint-disable */
import $ from 'jquery';
/* eslint-enable */

export default function () {
    var lazy = function lazy() {
        document.addEventListener('lazyloaded', function (e)  {
            e.target.parentNode.parentNode.classList.add('image-loaded');
            e.target.parentNode.parentNode.classList.remove('loading');
        });
    }

    lazy();
}
