/*
Copyright (c) 2017 
------------------------------------------------------------------


-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var MoneyExchange = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- MoneyExchange Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.Search();
			this.Magnific_popup();
			this.MainSlider();
			this.ConutTo();
			this.TestimonialSlider();
			this.ProductSlider();
			this.Project_sorting();
			this.ContactFormSubmit();
			
		},
		
		/*-------------- MoneyExchange Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function () {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");	
			}		
		},
		//Search 
		Search:function(){
			$(".me_search_icon i").on("click", function(){
				$(".me_search_wrapper").toggleClass("me_search_open");
			});
		},
		// wowanimation: function(){
			// new WOW().init()
		// },
		
		//counter on home page
		ConutTo: function(){
			if($('.timer').length > 0){	
				$('.timer').appear(function() {
					$(this).countTo();
				});
			}
		},
		//Testimonial slider on home page
		TestimonialSlider: function(){
			if($('.me_clientslider .owl-carousel').length > 0){		
				$('.me_clientslider .owl-carousel').owlCarousel({
					margin:30,
					nav: false,
					// navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
					dots: false,
					autoplay:true,
					stagePadding:30,
					smartSpeed:450,
					loop:true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						768:{
							items:2
						},
						992:{
							items:1
						},
						1200:{
							items:2
						}
					}
				});
			}
		},
		ProductSlider: function(){
			if($('.me_project_slider .owl-carousel').length > 0){		
				$('.me_project_slider .owl-carousel').owlCarousel({
					margin:0,
					nav: false,
					// navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
					dots: false,
					autoplay:true,
					smartSpeed:450,
					loop:true,
					items:1
				});
			}
		},
		//Magnific Popuo
		Magnific_popup: function() {
            $('.me_project_overlay .zoom_icon').magnificPopup({
				type: 'image',
               gallery: {
                  enabled: true
				}
			}); 
			//for video
            $('.play_btn').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'video_container',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        },
		MainSlider: function(){
			var tpj=jQuery;
			var revapi149;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_149_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_149_1");
				}else{
					revapi149 = tpj("#rev_slider_149_1").show().revolution({
						sliderType:"standard",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "vertical",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							arrows: {
								style:"uranus",
								enable:true,
								hide_onmobile:false,
								hide_onleave:false,
								tmp:'',
								left: {
									h_align:"left",
									v_align:"center",
									h_offset:10,
									v_offset:0
								},
								right: {
									h_align:"right",
									v_align:"center",
									h_offset:10,
									v_offset:0
								}
							}
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[868,768,960,720],
						lazyType:"none",
						scrolleffect: {
							blur:"off",
							maxblur:"20",
							on_slidebg:"on",
							direction:"top",
							multiplicator:"2",
							multiplicator_layers:"2",
							tilt:"10",
							disable_on_mobile:"off",
						},
						parallax: {
							type:"scroll",
							origo:"slidercenter",
							speed:400,
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
						},
						shadow:0,
						spinner:"spinner3",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "60px",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}				
			});
		},
		Project_sorting: function(){
			if($('.me_portfolio_filter a').length > 0){
				$(".me_portfolio_filter a").on("click", function(e) {
					e.preventDefault();
				});
				$('#portfolio').mixItUp();
			}	
		},
		//contact form submition
		ContactFormSubmit: function(){
			if($('#send_btn').length > 0){	
				$("#send_btn").on("click", function() {
					var e = $("#ur_name").val();
					var t = $("#ur_mail").val();
				// //var ph = $("#ur_phone").val();
					var s = $("#sub").val();
					var r = $("#msg").val();
					$.ajax({
						type: "POST",
						url: "ajaxmail.php",
						data: {
							username: e,
							useremail: t,
						// //userphone: ph,
							usersub: s,
							mesg: r
						},
						success: function(n) {
							var i = n.split("#");
							if (i[0] == "1") {
								$("#ur_name").val("");
								$("#ur_mail").val("");
							// //$("#ur_phone").val("");
								$("#sub").val("");
								$("#msg").val("");
								$("#err").html(i[1]);
							} else {
								$("#ur_name").val(e);
								$("#ur_mail").val(t);
							// // $("#ur_phone").val(ph);
								$("#sub").val(s);
								$("#msg").val(r);
								$("#err").html(i[1]);
							}
						}
					});
				});
			}
		}
		
		
		   
	};

	MoneyExchange.init();

	// Load Event
	// Loader js
	$(window).on('load', function() {
		jQuery("#me_preloader_box").fadeOut();
		jQuery("#me_preloader_wrapper").delay(350).fadeOut("slow"); 
               //window height
		//var h = window.innerHeight;
		//$(".im_mainslider img").css("height", h);
		//$(".im_mainslider img").css("width", "100%");
	});

	// Scroll Event
	// fixed menu
	$(window).on('scroll', function () {
	     if ($(this).scrollTop() > 300) {
                 $(".ac_mainheader").addClass("ac_fixed");
            } else {
                $(".ac_mainheader").removeClass("ac_fixed");
	    }
	});
	
	
// menu js

    var pluginName = 'ScrollIt',
        pluginVersion = '1.0.3';

    /*
     * OPTIONS
     */
    var defaults = {
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: 0
    };

    $.scrollIt = function(options) {

        /*
         * DECLARATIONS
         */
        var settings = $.extend(defaults, options),
            active = 0,
            lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

        /*
         * METHODS
         */

        /**
         * navigate
         *
         * sets up navigation animation
         */
        var navigate = function(ndx) {
            if (ndx < 0 || ndx > lastIndex) return;

            var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
            $('html,body').animate({
                scrollTop: targetTop,
                easing: settings.easing
            }, settings.scrollTime);
        };

        /**
         * doScroll
         *
         * runs navigation() when criteria are met
         */
        var doScroll = function(e) {
            var target = $(e.target).closest("[href]").attr('href') ||
                $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
            navigate(parseInt(target));
        };

        /**
         * keyNavigation
         *
         * sets up keyboard navigation behavior
         */
        var keyNavigation = function(e) {
            var key = e.which;
            if ($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
                return false;
            }
            if (key == settings.upKey && active > 0) {
                navigate(parseInt(active) - 1);
                return false;
            } else if (key == settings.downKey && active < lastIndex) {
                navigate(parseInt(active) + 1);
                return false;
            }
            return true;
        };

        /**
         * updateActive
         *
         * sets the currently active item
         */
        var updateActive = function(ndx) {
            if (settings.onPageChange && ndx && (active != ndx)) settings.onPageChange(ndx);

            active = ndx;
            $('[href]').removeClass(settings.activeClass);
            $('[href=' + ndx + ']').addClass(settings.activeClass);
        };

        /**
         * watchActive
         *
         * watches currently active item and updates accordingly
         */
        var watchActive = function() {
            var winTop = $(window).scrollTop();

            var visible = $('[data-scroll-index]').filter(function(ndx, div) {
                return winTop >= $(div).offset().top + settings.topOffset &&
                    winTop < $(div).offset().top + (settings.topOffset) + $(div).outerHeight()
            });
            var newActive = visible.first().attr('data-scroll-index');
            updateActive(newActive);
        };

        /*
         * runs methods
         */
        $(window).on('scroll', watchActive).scroll();

        $(window).on('keydown', keyNavigation);

        $('.mv_menu').on('click', '[href], [data-scroll-goto]', function(e) {
            e.preventDefault();
            doScroll(e);
        });

    };
    $(window).ready(function(e) {
        $.each($('div.progress-bar'), function() {
            $(this).css('width', $(this).attr('aria-valuetransitiongoal') + '%');
        });
    });
}(jQuery));
// menu js