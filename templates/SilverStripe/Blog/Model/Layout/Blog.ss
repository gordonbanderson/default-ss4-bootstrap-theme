<% require css('silverstripe/blog: client/dist/styles/main.css') %>

<% include Header %>


<!-- Page Content -->
<div class="container">

    <div class="row">

        <!-- Blog Entries Column -->
        <div class="col-md-8">

            <h1 class="my-4">Page Heading
                <small>Secondary Text</small>
            </h1>

            <% if $PaginatedList.Exists %>
                <% loop $PaginatedList %>
                    popopop
                    <% include SilverStripe\\Blog\\PostSummary %>
                <% end_loop %>
            <% else %>
                <p><%t SilverStripe\\Blog\\Model\\Blog.NoPosts 'There are no posts' %></p>
            <% end_if %>

            <!-- Pagination -->
            <% with $PaginatedList %>
                <% include SilverStripe\\Blog\\Pagination %>
            <% end_with %>

        </div>

        <!-- Sidebar Widgets Column -->
        <div class="col-md-4">

            <!-- Search Widget -->
            <div class="card my-4">
                <h5 class="card-header">Search</h5>
                <div class="card-body">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for...">
                        <span class="input-group-btn">
                  <button class="btn btn-secondary" type="button">Go!</button>
                </span>
                    </div>
                </div>
            </div>

            <!-- Categories Widget -->
            <div class="card my-4">
                <h5 class="card-header">Categories</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#">Web Design</a>
                                </li>
                                <li>
                                    <a href="#">HTML</a>
                                </li>
                                <li>
                                    <a href="#">Freebies</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#">JavaScript</a>
                                </li>
                                <li>
                                    <a href="#">CSS</a>
                                </li>
                                <li>
                                    <a href="#">Tutorials</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Side Widget -->
            <div class="card my-4">
                <h5 class="card-header">Side Widget</h5>
                <div class="card-body">
                    You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                </div>
            </div>

        </div>

    </div>
    <!-- /.row -->

</div>
<!-- /.container -->

<main role="main" class="container">
	<% if $SideBar %>
		<% include SideBar %>
	<% end_if %>
	<h1 class="my-4"<% if $ArchiveYear %>
            <%t SilverStripe\\Blog\\Model\\Blog.Archive 'Archive' %>:
            <% if $ArchiveDay %>
                $ArchiveDate.Nice
            <% else_if $ArchiveMonth %>
                $ArchiveDate.format('F, Y')
            <% else %>
                $ArchiveDate.format('Y')
            <% end_if %>
        <% else_if $CurrentTag %>
            <%t SilverStripe\\Blog\\Model\\Blog.Tag 'Tag' %>: $CurrentTag.Title %>
        <% else_if $CurrentCategory %>
            <%t SilverStripe\\Blog\\Model\\Blog.Category 'Category' %>: $CurrentCategory.Title %>
        <% else %>
            $Title
        <% end_if %></h1>
	$Content

	<% if $PaginatedList.Exists %>
    			<% loop $PaginatedList %>
                    popopop
    				<% include SilverStripe\\Blog\\PostSummary %>
    			<% end_loop %>
    		<% else %>
    			<p><%t SilverStripe\\Blog\\Model\\Blog.NoPosts 'There are no posts' %></p>
    		<% end_if %>

	$Form
	$CommentsForm

	<% include SilverStripe\\Blog\\BlogSideBar %>

</main>

<% include Footer %>


