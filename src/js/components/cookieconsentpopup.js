/* eslint-disable */
import $ from 'jquery';
import CookieConsent from '../../../../../vendor/bramdeleeuw/cookieconsent/javascript/src/cookieconsent'
/* eslint-enable */

export default function () {
    console.log('Cookie consent T1');
    const consent = new CookieConsent();
    if (!consent.isSet()) {
        console.log('Cookie consent T2');
        $('#cookieConsentModal').modal();
        alert('show cookie modal');
    }
    console.log('Cookie consent T3');
}
