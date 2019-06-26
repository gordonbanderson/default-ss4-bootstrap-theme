/* eslint-disable */
import $ from 'jquery';
import timeago from 'timeago';

/* eslint-enable */

export function initaliseTimeAgo() {
    // timeago
    console.log('**** INIT TIME AGO ****');
    $(document).ready(function() {
        $("time.timeago").timeago();
    });
}
