<div class="container">


    <div class="row nomargin">
        <div class="col col-12">
            <div class="headnav">
                <ul>
                    <li><a href="#" class="ml-2" data-toggle="modal" data-target="#loginModal"><i class="fa fa-sign-in">&nbsp;</i>Sign In</a></li>
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
