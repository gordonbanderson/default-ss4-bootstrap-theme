<div class="container">
 <div class="row">
  <div class="col col-sm-12">
   <div class="row">
    <article>
     <div class="col col-lg-12">
      <a href="#flickrSetNavigation" class="downThePageNavigation">&darr;&nbsp;Navigation</a>
      $Description

      <div class="gallery" itemscope itemtype="http://schema.org/ImageGallery">
       <% loop $FlickrSetForPage.FlickrPhotos.Sort(TakenAt)  %>
        <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="slide orientation{$Orientation}">
         <a id="photo_$ID" href="$LargeURL" title="$Title" data-size="{$LargeWidth}x{$LargeHeight}">
          <img src="$ThumbnailURL" itemprop="thumbnail" height="$ThumbnailHeight" width="$ThumbnailWidth" alt="$Title"
               style="height:{$ThumbnailHeight}px; width:{$ThumbnailWidth}px; margin-left:{$HorizontalMargin(120)}px;margin-top:{$VerticalMargin(120)}px;"/>
         </a>
        </figure>
       <% end_loop %>
      </div>

     </div>
    </article>
   </div>
   $Form
   $CommentsForm
  </div>
 </div>
</div>

<% include Includes/PhotoSwipeCore %>
