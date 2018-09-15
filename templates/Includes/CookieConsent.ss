
<!-- Modal -->
<div id="cookieConsentModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">$SiteConfig.CookieConsentTitle</h4>
            </div>
            <div class="modal-body">
                $SiteConfig.CookieConsentContent

                <div class="cookie-consent__buttons">
                    <a class="btn btn-primary cookie-consent__button cookie-consent__button--accept" href="$AcceptAllCookiesLink"><%t CookieConsent.AcceptAllCookies 'Accept all cookies' %></a>
                    <a class="btn btn-primary hollow cookie-consent__button cookie-consent__button--manage" href="$CookiePolicyPage.Link"><%t CookieConsent.ManageCookies 'Manage cookie settings' %></a>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>
