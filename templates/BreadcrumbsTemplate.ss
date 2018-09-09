<% if $Pages %>
    <nav role="navigation">
        <p class="sr-only" id="breadcrumbs-label"><%t SiteTree.BREADCRUMBSLABEL "You are here" %></p>
        <ol class="breadcrumb align-self-center" aria-labelledby="breadcrumbs-label">
            <li>
                <i class="fa fa-home"></i>
                <a href="$BaseHref">
                    <%t SiteTree.DEFAULTHOMETITLE "Home" %>
                </a>
                <i class="fa fa-angle-right"></i>
            </li>
            <% loop $Pages %>
                <% if $Last %>
                    <li class="active">$Title.XML</li>
                <% else %>
                    <li><a href="$Link">$MenuTitle.XML</a><i class="fa fa-angle-right"></i></li>

                <% end_if %>
            <% end_loop %>
        </ol>
    </nav>
<% end_if %>
