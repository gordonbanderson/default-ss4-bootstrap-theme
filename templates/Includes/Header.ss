<!-- start header -->
<header>
    <div class="container">
        <div class="row">
            <div class="col col-xs-4">
                <div class="logo">
                    <a href="index.html"><img src="img/logo.png" alt="" class="logo"/></a>
                    <h1>$SiteConfig.Tagline</h1>
                </div>
            </div>

            <div class="col col-xs-8">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <% loop $Menu(1) %>
                                <li class="nav-item<% if $IsCurrent %> active<% end_if %><% if $Children %> dropdown<% end_if %>">
                                    <a class="nav-link<% if $Children %> dropdown-toggle<% end_if %>" href="$Link"
                                        <% if $Children %> id="navbarDropdown{$ID}" role="button" data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false"<% end_if %>
                                    >
                                        $Title
                                        <% if $IsCurrent %><span class="sr-only">(current)</span><% end_if %>
                                    </a>
                                    <% if $Children %>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown{$ID}">
                                            <% loop $Children %>
                                                <a class="dropdown-item" href="$Link">$Title</a>
                                            <% end_loop %>
                                        </div>
                                    <% end_if %>
                                </li>
                            <% end_loop %>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>

<!-- end header -->

<section id="inner-headline">
    <div class="container">
        <div class="row h-100">
            <div class="col col-8 my-auto">
                <div class="inner-heading">
                    <h1>
                        <% if $URLSegment == 'home' %>$SiteConfig.Title<% else %><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %><% end_if %>
                    </h1>
                </div>
            </div>
            <div class="col col-4 my-auto">
                $Breadcrumbs
            </div>
        </div>
    </div>
</section>







