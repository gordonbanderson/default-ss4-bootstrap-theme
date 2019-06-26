/* eslint-disable */
import $ from 'jquery';

/* eslint-enable */

export function initaliseLazy() {
    document.addEventListener('lazyloaded', function (e) {
        e.target.parentNode.parentNode.classList.add('image-loaded');
        e.target.parentNode.parentNode.classList.remove('loading');
    });

}
