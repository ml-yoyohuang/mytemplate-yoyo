'use strict';

/* FEATURES */


//Popup
function POPUP_FEATURE() {
  var _wrap = "<div class='layout-popup-wrap'></div>",
  _bg = "<div class='layout-popup-background'><div class='poplogin-bg-layer1'></div><div class='poplogin-bg-layer2'></div><div class='poplogin-bg-layer3'></div></div>";
  this.popupWrap = $('<div />');
  this.popupWrap.html(_wrap + _bg);
}

POPUP_FEATURE.prototype = {
  popup: function(content) {
    this.popupWrap.find('.layout-popup-wrap').html(content);
  },
  popupOpen: function() {
    var event = jQuery.Event("popupOpen");
    $('body')
    .append(this.popupWrap.html())
    .trigger(event)
  },
  popupClose: function() {
    var event = jQuery.Event("popupClose");
    $('body')
    .find('.layout-popup-background, .layout-popup-wrap')
    .fadeOut(300, function() { $(this).remove(); })
    // .remove()
    .end()
    .trigger(event)
    }
  }

  var POPMsg = new POPUP_FEATURE();

  function popAlert(mytext,preventClose){
    var mystring = mytext.toString();
    $("body").find(".layout-popupalert-wrap,.layout-popupalert-background").remove();
    if( preventClose == true ){
      $("body").append('<div class="layout-popupalert-wrap"><div class="layout-popupalert-box"><div class="layout-popupalert-content"></div></div></div><div class="layout-popupalert-background do-not-close"></div>').find(".layout-popupalert-content").html(mystring);
    }else{
      $("body").append('<div class="layout-popupalert-wrap"><div class="layout-popupalert-box"><div class="layout-popupalert-content"></div></div></div><div class="layout-popupalert-background"></div>').find(".layout-popupalert-content").html(mystring);
    }
  }

  //close popAlert
  $("body").on('click', '.layout-popupalert-background,.layout-popupalert-wrap .btn-popclose, .do-popclose', function() {
    if( ! $(this).hasClass('do-not-close') ){
      $("body").find(".layout-popupalert-wrap,.layout-popupalert-background").remove();
    }
  });
  
  $("body").on('click', '.layout-popup-background, .popup-shield-shadow, .btn-popclose, .do-popclose', function() {
    POPMsg.popupClose();
  });

  function popYoutube(myvideosn){
  // alert('pop');
  // var mystring = myvideosn.toString();
  $("body").find(".layout-popupalert-wrap,.layout-popupalert-background").remove();
  $("body").append('<div class="layout-popupalert-wrap layout-popupvideo-wrap"><div class="video-wrap"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+myvideosn+'?rel=0&autoplay=1" frameborder="0" allowfullscreen=""></iframe></div></div><div class="layout-popupalert-background"></div>');
}


//EX: pagename.html#a=xxx&b=yyy
function hashToObject() {
  var pairs = window.location.hash.substring(1).split("&"),
  obj = {},
  pair,
  i;

  for ( i in pairs ) {
    if ( pairs[i] === "" ) continue;

    pair = pairs[i].split("=");
    obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
  }

  return obj;
}
var hashObj = hashToObject();

//on Document Ready
(function() {

  /* UI EFFECTS */

  //Header
  $("#header").on('mouseover', '.header-nav-item', function(event) {
    if( $(this).find('.header-subnav-item').length > 0 ){
      // $("body").addClass('is-coverd');
    }
  });
  $("#header").on('mouseout', '.header-nav-item', function(event) {
    // $("body").removeClass('is-coverd');
  });

  /* MOBILE */
  $("#header").on('click','.btn-hamburger', function(event) {
    $("body").toggleClass('is-openmenu');
  });
  $("body").on('click', '#layout-view,footer,.header-overlap', function(event) {
    // event.preventDefault();
    /* Act on the event */
    if( $("body").hasClass('is-openmenu') ){
      $("body").removeClass('is-openmenu');
    }
  });

  $(".header-menu-item > a").on('click',function(event) {
    if( $(this).closest(".header-menu-item").hasClass('with-submenu') ){
      // 預防被套壞，擋一下a預設herf行為
      event.preventDefault();
    }
    /* Act on the event */
    if( $(this).closest(".header-menu-item").hasClass('is-active') ){
      $(this).closest(".header-menu-item").removeClass('is-active');
    }else{
      $(".header-menu-item").removeClass('is-active');
      $(this).closest(".header-menu-item").addClass('is-active');
    }
  });


  var scrollNow = 0;
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    var win_h = $(window).height();
    var view_h = $("#layout-view").height();
    var top_h = $(".section-topbar") ? $(".section-topbar").height() : 0;
    if(scrollVal > win_h){
      $("body").find(".layout-container").addClass('style-scrolldown'); //footer effect
    }else{
      $("body").find(".layout-container").removeClass('style-scrolldown'); //footer effect
    }
    scrollNow = scrollVal;
  });

  //back to top
  $("body").on('click', '.btn-top', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('html,body').animate({ scrollTop:( 0 )}, 800);
  });

  //Accordion
  $("body").find(".module-accordionset").each(function(indexi, el) {

    $(this).find(".module-accordion").each(function(indexj, el) {
      $(this).on('click', '.accordion-bar', function() {
        if( !$(this).closest('.module-accordion').hasClass('is-active') ){
          //open
          // $(this).closest('.module-accordionset').find('.module-accordion').removeClass('is-active'); //開一關一
          $(this).closest('.module-accordion').addClass("is-active");
        }else{
          // close
          $(this).closest('.module-accordion').removeClass("is-active");

        }
        // console.log(indexj);
      });
    });
    
  });

  $(window).resize(function(){
  });


  //GA SEND
  $('body').on('click', '[data-label]', function(event) {
    var myLabel = $(this).attr("data-label");
    var myEvent = $(this).attr("data-event") ? $(this).attr("data-event") : 'click';
    ga('send', 'event', pagename, myEvent , myLabel);
    // console.log("page = "+ pagename +", Label = "+ myLabel +" , Event = " + myEvent );
  });

  // var pagename = location.pathname.replace("/FrontEnd/", "").replace(".html", "");
  var lastSentCategory = -1;
  $('body').on('mouseover touchstart', '[data-category]', function(event) {
    var myCat = $(this).attr("data-category");
    if( myCat != lastSentCategory){
      lastSentCategory = myCat;
      ga('send', 'pageview', pagename + "/#/"+ myCat );
      // console.log("page = "+ pagename +", Category = /#/"+ myCat );
    }
  });


  // 執行 FastClick
  FastClick.attach(document.body);

})();