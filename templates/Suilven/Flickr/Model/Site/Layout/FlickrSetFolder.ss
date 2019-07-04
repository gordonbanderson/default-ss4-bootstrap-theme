<div class="container">
 <div class="row">
  <div class="col col-sm-12">
   <div class="row">
    <article>
     <div class="col col-sm-12">
      $Description

      <div class="row">
      <% loop $Children %>
       <div class="col col-sm-1 col-m-2 col-lg-3">
        <% if $ClassName = 'Suilven\Flickr\Model\Site\FlickrSetPage' %>
         <a href="$Link">
          <% with $FlickrSetForPage.PrimaryFlickrPhoto %>
           <img class="media-object" src="$MediumURL"><% end_with %>
         <h6>$Title</h6>
         </a>
        <% end_if %>

           <% if $ClassName = 'Suilven\Flickr\Model\Site\FlickrSetFolder' %>
               <a href="$Link">
                   <% with $FlickrSetForPage.PrimaryFlickrPhoto %>
                       <img class="media-object" src="$SmallURL"><% end_with %>
                   <h6>$Title</h6>
               </a>
           <% end_if %>

       </div>
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
