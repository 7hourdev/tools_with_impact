  // window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '1582676111982658',
  //     xfbml      : true,
  //     version    : 'v2.3'
  //   });
  // };
  // (function(d, s, id){
  //    var js, fjs = d.getElementsByTagName(s)[0];
  //    if (d.getElementById(id)) {return;}
  //    js = d.createElement(s); js.id = id;
  //    js.src = "//connect.facebook.net/en_US/sdk.js";
  //    fjs.parentNode.insertBefore(js, fjs);
  //  }(document, 'script', 'facebook-jssdk'));
$(document).ready(function(){
    $('.social-feed-container').socialfeed({
        // FACEBOOK
        facebook:{
            accounts: ['!toolswithimpact'],
            limit: 6,
            access_token: '1582676111982658|4e58346a0c3eff583bb681ebb3cf3252' // APP_ID|APP_SECRET
        },
        // TWITTER
        twitter:{
            accounts: ['@ToolsWithImpact'],
            limit: 2,
            consumer_key: '6t6NEJMUPSUbqpCy5aijWZ3nj', // make sure to have your app read-only
            consumer_secret: 'chMLH53kA3CQ4cpzXokqqiybebuj3N4dvh2bN3gd6HhCbqNZee', // make sure to have your app read-only
         },
        // GENERAL SETTINGS
        show_media:true,
        // Moderation function - if returns false, template will have class hidden
        moderation: function(content){
            return  (content.text) ? content.text.indexOf('fuck') == -1 : true;
        },
        //update_period: 5000,
        // When all the posts are collected and displayed - this function is evoked
        callback: function(){
            console.log('all posts are collected');
        }
    });
    $('.social-feed-container-small').socialfeed({
        // FACEBOOK
        facebook:{
            accounts: ['!toolswithimpact'],
            limit: 2,
            access_token: '1582676111982658|4e58346a0c3eff583bb681ebb3cf3252' // APP_ID|APP_SECRET
        },
        // TWITTER
        twitter:{
            accounts: ['@ToolsWithImpact'],
            limit: 2,
            consumer_key: '6t6NEJMUPSUbqpCy5aijWZ3nj', // make sure to have your app read-only
            consumer_secret: 'chMLH53kA3CQ4cpzXokqqiybebuj3N4dvh2bN3gd6HhCbqNZee', // make sure to have your app read-only
         },
        // GENERAL SETTINGS
        show_media:true,
        template: "template2.html",
        // Moderation function - if returns false, template will have class hidden
        moderation: function(content){
            return  (content.text) ? content.text.indexOf('fuck') == -1 : true;
        },
        //update_period: 5000,
        // When all the posts are collected and displayed - this function is evoked
        callback: function(){
            console.log('all posts are collected');
        }
    });
    $(window).load(function(){
      $('.social-feed-container-small').isotope({
        // options
        itemSelector: '.social-media',
        layoutMode: 'masonry'
      });
      $('.social-feed-container').isotope({
        // options
        itemSelector: '.social-media',
        layoutMode: 'masonry'
      });
    });
    $('.social-feed-container-small').imagesLoaded( function() {
      $('.social-feed-container-small').isotope({
        // options
        itemSelector: '.social-media',
        layoutMode: 'masonry'
      });
    });
  $(".counter").each(function(element){
      $(this).countTo();
  });
  var mySwiper = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 0,
      loop:true,
      // If we need pagination
      pagination: '.swiper-pagination',
      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      autoplay:4000
  });
});