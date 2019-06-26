<% if not $ConfigValue('LeKoala\DebugBar\DebugBar', 'disabled') && $IsDev %>
    <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
    <script src="/resources/themes/default-ss4-bootstrap-theme/dist/js/bootstrap4.js"></script>
<% else %>
    $ClearAllRequirements
    <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
        crossorigin="anonymous"></script>
    <script src="/resources/themes/default-ss4-bootstrap-theme/dist/js/bootstrap4.js"></script>
    <script src="/resources/themes/default-ss4-bootstrap-theme/dist/js/vendor.js"></script>
    <script src="/resources/themes/default-ss4-bootstrap-theme/dist/js/main.js"></script>
<% end_if %>


