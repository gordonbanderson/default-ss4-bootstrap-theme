<section id="featured">
    <!-- start slider -->
    <div class="container-fluid" id="slider-wrapper">
        <div class="container" id="slider-wrapper-inner">
            <div class="owl-carousel">
                <% loop $FeaturedPosts %>
                <div>
                    <div class="row">
                        <div class="col col-12 col-md-8">
                            <h2 class="flex-caption"><a href="$Link">$Title</a></h2>

                            <% if $Summary %>
                                $Summary
                            <% else %>
                                <p>$Excerpt</p>
                            <% end_if %>
                        </div>

                        <div class="col col-12 col-md-4">
                            <a href="$Link"><img src="$FeaturedImage.FocusFillMax(256,256).URL"
                                 alt="Featured image for blog post $Title" class="main-img"/></a>
                        </div>
                    </div>
                </div>
                <% end_loop %>

            </div>
            </div>
        </div>
</section>




