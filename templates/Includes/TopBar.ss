<div class="container">
    <div class="row nomargin">
        <div class="col col-12">
            <div class="headnav">
                <ul>

                    <li>
                        <form id="search-form"  class="col-xs-12" name="search-form" method="get" action="/search">
                            <input id="q" type="text" name="q" placeholder="Search…">
                            <button type="submit" class="btn"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                </li>
                    <!-- <i class="fa fa-search">&nbsp;</i>Search</a></li> -->
                </ul>
            </div>

            <!-- Sign in Modal -->
            <div class="modal styled fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="pleaseLoginLabel" aria-hidden="true">
                <form {$LoginForm.AttributesHTML}>
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="pleaseLoginLabel">Please Log In</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                $LoginForm.Fields
                            </div>
                            <div id="modalLoginFooter" class="modal-footer">
                                $LoginForm.Actions
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <!-- end signin modal -->

        </div>
    </div>
</div>
