/***Form Validation****/
$("#free-consultaion-btn").click(function(e){
      e.preventDefault();
     var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     var name = $("#usrname").val();
     var emailaddress = $("#user_email").val();
     var phone = $("#usrphone").val();
    
   
if(name == "" || name.length < 3){  $("#name-error").html('Please Enter Name'); } else{ $("#name-error").html(''); }
/**Email Validation***/
if (emailaddress == "") { $("#email-error").html('Please Enter Email');
console.log('Please Enter Email'); 
return false;
                                  
} 
else if(!emailReg.test(emailaddress)) {
$("#email-error").html('Please enter valid email ID');
return false;
}
else {
$("#email-error").html('');
}
/**Phone***/
if(phone == ""){ 

 $("#phone-error").html('Please Enter Phone Number');

}
else if(phone.length < 9){
$("#phone-error").html('Please Enter Proper Number');

} else{ $("#phone-error").html(''); 


  $.ajax({
    type: "POST",
     url: 'https://happenizedev.com/muzun/thankyou.php',
    data: 'jx=1&name=' + name + '&email=' + emailaddress + '&phone=' +phone,
    success: function (data) {
    
     window.location.href = "https://happenizedev.com/muzun/thankyou.html";
    
    }
  }); 
  
}
});   
/**Phone Numbers only validation***/
 $("#usrphone").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#phone-error").html("Digits Only").show().fadeOut("slow");
               return false;
    }
   });
   /*****Phone Select******/

    var input = document.querySelector("#usrphone");
    window.intlTelInput(input, {
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: document.body,
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
       geoIpLookup: function(callback) {
         $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
           var countryCode = (resp && resp.country) ? resp.country : "";
           callback(countryCode);
        });
       },
      // hiddenInput: "full_number",
      // initialCountry: "auto",
      // localizedCountries: { 'de': 'Deutschland' },
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
      // separateDialCode: true,
      utilsScript: "./assets/js/utils.js",
    });

 
$(window).scroll(function(){
    if ($(window).scrollTop() >= 40) {
       $('.mobile-nav-btn').addClass('dsply-none-mob');
    }
    else {
       $('.mobile-nav-btn').removeClass('dsply-none-mob');
    }
});

// wow end

// sticky social
$(document).scroll(function () {
	"use strict";
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.sticky-container').fadeIn();
    } else {
        $('.sticky-container').fadeOut();
    }

}); 
// sticky social end

$(document).ready(function() {
"use strict";

// Active Current Page
var str=location.href.toLowerCase();
$(".nav-area-full a").each(function() {
if (str.indexOf(this.href.toLowerCase()) > -1) {
$(".active").removeClass("active");
$(this).parent().addClass("active");
}
});	
// Active Current Page end

   //*****************************
    // Mobile Navigation
    //*****************************
    $('.mobile-nav-btn').click(function() {
        $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');
        

    });   

    $('.firstlevel li a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('ul').slideUp();
        }else{
            $('.firstlevel li a').removeClass('active');
            $(this).addClass('active');
            $('.dropdown').slideUp();
            $(this).siblings('ul').slideDown();
        }
    });

    $('.mainnav > li > a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parents('li').children('.firstlevel').slideUp();
        }else{
            $(this).addClass('active');
            $(this).parents('li').children('.firstlevel').slideDown();
            $(this).parents('li').siblings('li').children('a').removeClass('active');
            $(this).parents('li').siblings('li').children('.firstlevel').slideUp();
             $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');
        }
    }); 
    
////// main slider
 $(".home-slider2").slick({
    dots: true,
    arrows: true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 1,
    autoplay: !0,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    responsive: [
    {
      breakpoint: 767,
      settings: {
    dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

$('.mob-gallery').slick({
  dots: true,
    arrows: false,
    infinite: !0,
    speed: 1000,
    slidesToShow: 1,
    autoplay: !0,
    autoplaySpeed: 4000,
    
});
   



// progress bar
    /*
 var time = 4;
 var $bar, $slick, isPause, tick, percentTime;
$slick = $('.home-slider'); 
$bar = $('.slider-progress .progress');   
    
$('.slider-wrapper').on({
mouseenter: function() { isPause = true; },
mouseleave: function() { isPause = false; }
});
 function startProgressbar() { resetProgressbar(); percentTime = 0; isPause = false; tick = setInterval(interval, 10); }
  function interval() {
    if(isPause === false) { percentTime += 1 / (time+0.1); $bar.css({ width: percentTime+"%" }); if(percentTime >= 100)
        { $slick.slick('slickNext'); startProgressbar(); }
    }
  }
function resetProgressbar() { $bar.css({ width: 0+'%' }); clearTimeout(tick); }
startProgressbar();  
    */
////// main slider end

  ////// mob slider
 /*   $(".sliderxs").slick({
        arrows: false,
        dots: true,
        autoplay: true,
		adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 767,
              settings: {
                unslick: true
              }
            }
        ]
    });


    $(".sliderxs").slick({
        arrows: false,
        dots: true,
        autoplay: true,
    adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 994,
              settings: {
                unslick: true,
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
        ]
    });*/
////// mob slider end

////// testimonial slider
$(".testimonials-slider-main").slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  //fade: true,
  //cssEase: 'linear',    
    });  
////// testimonial slider end


$('.thumb-slider').slick({
centerMode: true,
centerPadding: '0px',
arrows: true,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 768,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 3
}
},
{
breakpoint: 767,
settings: {
arrows: false,
dots:false,
centerMode: false,
centerPadding: '10px',
slidesToShow: 1
}
},
{
breakpoint: 480,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 1
}
}
]
});

///// gallery simple
$('.slider-for').slick({
dots: true,
arrows:false,
infinite: true,
speed: 500,
slide: 'li',
fade: false,
cssEase: 'linear',
centerMode: true,
slidesToShow: 1,
variableWidth: true,
autoplay: true,
autoplaySpeed: 4000,
responsive: [{
	breakpoint: 800,
	settings: {
		arrows: false,
		centerMode: false,
		centerPadding: '40px',
		variableWidth: false,
		slidesToShow: 1,
		dots: true
	},
	breakpoint: 1200,
	settings: {
		arrows: false,
		centerMode: false,
		centerPadding: '40px',
		variableWidth: false,
		slidesToShow: 1,
		dots: true
	}
}],
customPaging: function (slider, i) {
	return '<button class="tab">' + $('.thumbsmain li:nth-child(' + (i + 1) + ')').html() + '</button>';
}
});
///// gallery simple end

////// gallery slider
$(".gallery-slider-main").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear',    
   asNavFor: '.gallery-nav-main'
    });  
$('.gallery-nav-main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  //vertical:true,
  asNavFor: '.gallery-slider-main',
  dots: true,
  //centerMode: true,
  focusOnSelect: true
});	
////// gallery slider end



////// thumb gallery slider
$(".bid-slider-gallery").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  //fade: true,
  //cssEase: 'linear',    
   asNavFor: '.bid-gallery-nav'
    });  
$('.bid-gallery-nav').slick({
  dots: false,
  arrows: false,  
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  vertical:true,
  focusOnSelect: true,
  //centerMode: true,
  asNavFor: '.bid-slider-gallery',
  responsive: [
{
breakpoint: 767,
settings: {
 vertical:false,
}
}
]
}); 
////// thumb gallery slider end

////// tabs generic (nav and tabs in main div)
$('.tab-custom .tab-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');

$(this).addClass('current');
$(this).closest('.tab-custom').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
$('.mob-gallery').slick('refresh');
});
////// tabs generic end

////// tabs custom (place nav and tabs anywhere separately)
$('.tabs-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this.hash).closest('.general').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
$('.mob-gallery').slick('refresh');
});
////// tabs custom end

////// Accordion 
$('.accordion .quest-title.active1').addClass('active');
$('#accordion-1').slideDown(300).addClass('open');
function close_accordion_section() {
jQuery('.accordion .quest-title').removeClass('active');
jQuery('.accordion .quest-content').slideUp(300).removeClass('open');
}
jQuery('.quest-title').click(function(e) {
// Grab current anchor value
var currentAttrValue = jQuery(this).attr('href');
if(jQuery(e.target).is('.active')) {
close_accordion_section();
}else {
close_accordion_section();
// Add active class to section title
jQuery(this).addClass('active');
// Open up the hidden content panel
jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
}
e.preventDefault();
});
////// Accordion end 

 

// car scroll top
var $scrolltop = jQuery('.car-top');
jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() >= 200) {
        $scrolltop.addClass("show");
        $scrolltop.addClass("car-down");
    } else {
        $scrolltop.removeClass("show");
        setTimeout(function() {
            $scrolltop.removeClass('car-down');
        }, 300);
    }
});
$scrolltop.on('click', function() {
jQuery('html,body').animate({
    scrollTop: 0
}, 800);
jQuery(this).addClass("car-run");
setTimeout(function() {
    $scrolltop.removeClass('car-run');
}, 1000);
return false;
});
// car scroll top end



}); // document ready end

 
 ////// slick gallery counter
var $gallery = $('.gallery-slider-main');
var slideCount = null;

$gallery.on('init', function(event, slick){
	"use strict";
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	"use strict";
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
	"use strict";
  var $el = $('.slide-count-wrap').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
	"use strict";
  var $el = $('.slide-count-wrap').find('.current');
  $el.text(currentSlide + 1);
}
////// slick gallery counter end
 
////// footer year
$(function(){
"use strict";
var theYear = new Date().getFullYear();
$('#year').html(theYear);
});	

 

/*--------------------------------Back to top----------------------------------*/
$(document).ready(function(){$("#backtop").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$("#backtop").fadeIn()}else{$("#backtop").fadeOut()}});$("#backtop a").click(function(){$("body,html").animate({scrollTop:0},800);return false})})});


// ----------------------------------Tabs--------------------//
$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});


    
  /************/
    $(document).ready(function() {
      $(".call-back-popup").removeClass('aos-animate');
    $(".get_quote").click(function(e) {
     e.preventDefault();
    //alert('check');
    
      $(".call-overlay").show();
      $(".call-back-popup").show();
    $(".call-back-popup").removeClass('aos-animate');
    setTimeout(function() {
      
      //$(".call-back-popup").show();
  $(".call-back-popup").addClass('aos-animate');
      }, 1000);
    });
    
  $(".call-overlay").click(function(e) {
    $(".call-overlay").hide(3000);
    $(".call-back-popup").hide(3000);
  });
               
  $(".cls_btn").click(function(e) {
  //	$(".call-back-popup").removeClass('aos-animate');
  //		}, 1000);
  //	});
  //	
    $(".call-overlay").hide(100);
    $(".call-back-popup").slideDown(2000).hide("slow");
  });
  
  
     $('.btn-call-float').click(function(e) {
    
	   $('.call-float-div').toggleClass('call-close'); 
	  
	 }); 
	   /****Call Us Now Slide Form******/  
  $("#quick-call-btn").click(function(e){ 
  e.preventDefault();
  var phone = $("#quickNum").val();
  /**Phone***/
  if(phone === " "){  $("#errordiv").html('Please Enter Phone Number');}
  else if(phone.length < 9){
  $("#errordiv").html('Enter Proper Phone Number');
  
  } else{ $("#errordiv").html(''); 
  $('.form-input-div').hide();
  $('#alertMsg').show();
   $.ajax({
      type: "POST",
       url: 'https://happenizedev.com/muzun/thankyou.php',
      data: 'cu=1&phone=' +phone,
      success: function (data) {
       window.location.href = "https://happenizedev.com/muzun/thankyou.html";
      console.log(data);
      
      }
    });
    
  }
        
    
    }); 
	
	/*****Phone Select ******/
      var input = document.querySelector("#user_phone");
      window.intlTelInput(input, {
          allowDropdown:true,
         geoIpLookup: function(callback) {
           $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
             var countryCode = (resp && resp.country) ? resp.country : "";
             callback(countryCode);
          });
         },
        //hiddenInput: "full_number",
         initialCountry: "auto",
        utilsScript: "./assets/js/utils.js",
      });
    
    /***Call Later**/
    var input = document.querySelector("#calllater_tel");
      window.intlTelInput(input, {
         geoIpLookup: function(callback) {
           $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
             var countryCode = (resp && resp.country) ? resp.country : "";
             callback(countryCode);
          });
         },
        //hiddenInput: "full_number",
         initialCountry: "auto",
        utilsScript: "./assets/js/utils.js",
      });
      /***Leave Msg**/
    var input = document.querySelector("#leave_tel");
      window.intlTelInput(input, {
       //allowDropdown: false,
         geoIpLookup: function(callback) {
           $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
             var countryCode = (resp && resp.country) ? resp.country : "";
             callback(countryCode);
          });
         },
         //hiddenInput: "full_number",
         initialCountry: "auto",
        utilsScript: "./assets/js/utils.js",
      });
    
	
	  /****Leave Message******/   
  $("#call_bck_btn").click(function(e){ 
        e.preventDefault();
      var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      var msgarea = $("#msg_area").val();
      var emailaddress = $("#leave_email").val();
      var phone = $("#leave_tel").val();
     
        if(msgarea == "" || msgarea.length < 3){  
            $("#leave-error1").html('Please Enter Message'); 
			 return false;
			}
        else{ $("#leave-error1").html(''); }
       //email
   
  if (emailaddress == "") { 
      $("#leave-error3").html('Please Enter Message');
  console.log('Please Enter Email'); 
 
                                    
  } 
  else if(!emailReg.test(emailaddress)) {
  $("#leave-error3").html('Please enter valid email ID');
 return false;
  }
  else {
  $("#leave-error3").html('');
  }
  /**Phone***/
  if(phone === " "){ 
  
   $("#leave-error2").html('Please Enter Phone Number');
   return false;
  }
  else if(phone.length < 9){
  $("#leave-error2").html('Please Enter Proper Number');
  return false;
  
  } else{ $("#leave-error2").html(''); 
  $('.leave_form').hide();
  $('.leavemsg-sent').show();
  
    $.ajax({
      type: "POST",
       url: 'https://happenizedev.com/muzun/thankyou.php',
      data: 'lv=1&msg=' + msgarea + '&email=' + emailaddress + '&phone=' +phone,
      success: function (data) {
       window.location.href = "https://happenizedev.com/muzun/thankyou.html";
      console.log(data);
      
      }
    }); 
    
  }  
    }); 
	
/**Call Me**/
$("#call_me_btn").click(function(e){
  var phone = $("#user_phone").val();
      /**Phone***/
  if(phone === " "){ 
  
   $("#callback-error").html('Please Enter Phone Number');
  
  }
  else if(phone.length < 9){
  $("#callback-error").html('Please Enter Proper 9 Digits Number');
  
  } else{ $("#callback-error").html('');
  $('.callme-now_form').hide();
  $('.callback-sent').show();
         
    $.ajax({
      type: "POST",
       url: 'https://happenizedev.com/muzun/thankyou.php',
      data: 'callme=1&phone=' +phone,
      success: function (data) {
       window.location.href = "https://happenizedev.com/muzun/thankyou.html";
      console.log(data);
      
      }
    }); 
        }
  });
	
	  /***Call me Later****/
  $("#calllater_btn").click(function(e){
  var phone = $("#calllater_tel").val();
  var dayval = $(".datepicker").val();
//var daytxt = $( "#day :selected" ).text();
  var timingval = $("#timing").val();
/***Day***/
if(dayval == ''){ $("#calllater-day-error").html('Please Select Day' );  }else{$("#calllater-day-error").html('');}
    
 /***timing***/
if(timingval == '0'){ $("#calllater-time-error").html('Please Select Timing'); } else{$("#calllater-time-error").html('' );} 
      /**Phone***/
  if(phone === " "){ 
  
   $("#calllater-error").html('Please Enter Phone Number');
   return false;
  }
  else if(phone.length < 9){
  $("#calllater-error").html('Please Enter Proper Number');
  return false;
  } else{ $("#calllater-error").html('');
          $.ajax({
      type: "POST",
       url: 'https://happenizedev.com/muzun/thankyou.php',
      data: 'cb=1&phone=' +phone+'&day='+dayval+'&time='+timingval,
      success: function (data) {
      window.location.href = "https://happenizedev.com/muzun/thankyou.html";
      console.log(data);
      console.log(dayval);
      }
    });
        }
  });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	 }); //ready 
