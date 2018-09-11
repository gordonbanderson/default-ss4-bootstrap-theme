<section id="featured">
    <!-- start slider -->
    <div class="container">
        <div class="flexslider">
            <ul class="slides">
                <% loop $FeaturedPosts %>
                    <li>
                        <img src="$FeaturedImage.FocusFillMax(750,500).URL" alt="Featured image for blog post $Title" class="main-img"/>
                        <h2 class="flex-caption">$Title</h2>

                        <% if $Summary %>
                            $Summary
                        <% else %>
                            <p>$Excerpt</p>
                        <% end_if %>
                    </li>
                <% end_loop %>

            </ul>
        </div>
</section>
