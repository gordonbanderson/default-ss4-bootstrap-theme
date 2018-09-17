<!-- start header -->
<header>
    <div class="container">
        <div class="row">
            <div class="col col-12 col-md-4">
                <div class="logo">
                    <h1><span class="logo1">GORDON</span><span class="logo2">B</span><span class="logo1">ANDERSON</span></h1>
                    <h2>$SiteConfig.Tagline</h2>
                </div>
            </div>

            <div class="col col-md-8">
                <nav class="navbar navbar-expand-md navbar-light">
                    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse navbar-toggleable-sm" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <% loop $Menu(1) %>
                                <li class="nav-item<% if $Children %> dropdown<% end_if %>">
                                    <a class="nav-link $LinkingMode<% if $Children %> dropdown-toggle<% end_if %>" href="$Link"
                                        <% if $Children %> id="navbarDropdown{$ID}" role="button" data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false"<% end_if %>
                                    >
                                        $Title
                                        <% if $IsCurrent %><span class="sr-only">(current)</span><% end_if %>
                                    </a>
                                    <% if $Children %>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown{$ID}">
                                            <% loop $Children %>
                                                <a class="dropdown-item $LinkingMode" href="$Link">$Title</a>
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
