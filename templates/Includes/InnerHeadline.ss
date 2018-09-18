<section id="inner-headline">
    <div class="container">
        <div class="row h-100">
            <div class="col col-12 col-md-6 my-auto">
                <div class="inner-heading">
                    <h1>
                        <% if $URLSegment == 'home' %>$SiteConfig.Title<% else %><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %><% end_if %>
                    </h1>
                </div>
            </div>
            <div class="col col-12 col-md-6 my-auto">
                $Breadcrumbs
            </div>
        </div>
    </div>
</section>
