/* eslint-disable */
import $ from 'jquery';
import CookieConsent from '../../../../../vendor/bramdeleeuw/cookieconsent/javascript/src/cookieconsent'
/* eslint-enable */

export default function () {
    const consent = new CookieConsent();
    if (!consent.isSet()) {
        $('#cookieConsentModal').modal();
    }
}
