<% include Header %>
<main role="main" class="container">
    <div class="row">
        <% if $AllFacets %>
                <div class="col-md-3">
                    <% loop $AllFacets %>
                        <h5>$Name</h5>
                        <ul>
                            <% loop $Facets %>
                                <li>
                                    <% if $Selected %>{$Value}&nbsp;<a href="$Top.CleanedLink?$Params"><i class="fas fa-times"></i></a>
                                    <% else %>
                                    <a href="$Top.CleanedLink?$Params">$Value ($Count)</a>
                                    <% end_if %>
                                </li>
                            <% end_loop %>
                        </ul>
                    <% end_loop %>

                </div>
        <% end_if %>
        <div class="<% if $AllFacets %>col-md-9<% else %>col-md-12<% end_if %>">
            <h1 class="mt-5">$Title</h1>
            <form action="$URL">
                <div class="col-xs-12">
                    <div class="input-group">
                        <input name="q" type="text" class="form-control" placeholder="Search..." value="$Query">
                        <span class="input-group-btn">
                            <button class="btn btn-secondary" type="button"><i class="fa fa-search"></i></button>
                         </span>
                    </div>
                </div>
            </form>

            <% if $Records %>
                <p>$ResultsFound results found in $Time seconds</p>

                <% if $ShowResult == 'FlickrResult' %>
                    <% loop $Records %>
                        <h3><a href="$Record.Link">$Record.Title</a></h3>
                        <div>$Record.AbsoluteLink</div>
                        <img class="img-thumbnail img-responsive" src="$Record.ThumbnailURL"/>
                        $Record.Snippets.RAW
                    <% end_loop %>
                <% else %>
                    <% loop $Records %>
                        <h3><a href="$Record.Link">$Record.Title</a></h3>
                        <div>$Record.AbsoluteLink</div>
                        $Record.Snippets.RAW
                    <% end_loop %>
                <% end_if %>





            <% else %>
                <p>Sorry, your search query did not return any results.</p>
            <% end_if %>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <% with $Pagination %>
                <% if $MoreThanOnePage %>
                    <div class="pagination-container">
                        <nav aria-label="Search pagination for '$Query'">
                            <ul class="pagination justify-content-center pt4 pb4">

                                <% if $PrevLink %>
                                    <li class="page-item"><a class="page-link"
                                                             href="$PrevLink"><% _t('CommentsInterface_ss.PREV','previous') %></a>
                                    </li>
                                <% else %>
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#"
                                           tabindex="-1"><% _t('CommentsInterface_ss.PREV','previous') %></a>
                                    </li>
                                <% end_if %>

                                <% if $Pages %>
                                    <% loop $PaginationSummary(8) %>
                                        <% if $CurrentBool %>
                                            <li class="page-item active">
                          <span class="page-link">
                            $PageNum
                              <span class="sr-only">(current)</span>
                          </span>
                                            </li>
                                        <% else %>
                                            <% if $Link %>
                                                <li class="page-item"><a class="page-link" href="$Link">$PageNum</a>
                                                </li>
                                            <% else %>
                                                <a class="page-link" href="#" tabindex="-1">&hellip;</a>
                                            <% end_if %>

                                        <% end_if %>
                                    <% end_loop %>
                                <% end_if %>

                                <% if $NextLink %>
                                    <li class="page-item"><a class="page-link"
                                                             href="$NextLink"><% _t('CommentsInterface_ss.NEXT','next') %></a>
                                    </li>
                                <% else %>
                                    <a class="page-link" href="#"
                                       tabindex="-1"><% _t('CommentsInterface_ss.NEXT','next') %></a>
                                <% end_if %>
                            </ul>
                        </nav>

                    </div>
                <% end_if %>
            <% end_with %>
        </div>
    </div>

</main>

<% include Footer %>


