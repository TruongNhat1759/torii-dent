$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.smoothScroll();
            this.toTop();
            this.Gnavi();
            this.toggleContent();
        },

        smoothScroll: function () {
            $('a[href^="#"]').click(function () {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('html,body').animate({
                            scrollTop: p.top - 110
                        }, 600);
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 80
                        }, 600);
                    }
                }
                return false;
            });

            //Anchor scroll
            var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({scrollTop: top01 - 110}, 600);
                    } else {
                        $root.animate({scrollTop: top01 - 80}, 600);
                    }
                }
        },

        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#totop').fadeIn();
                    $('.banner-sp ul').css({'opacity':'1','visibility':'visible'});
                } else {
                    $('#totop').fadeOut();
                    $('.banner-sp ul').removeAttr('style');
                }
            });
        },

        Gnavi: function () {
            $('.over').hover(function () {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.submenu').stop().slideToggle();
                }
            });

            $('.over').click(function () {
                if($(this).hasClass('flag')){
                    if($(this).hasClass('active')){
                        $('.submenu').stop().slideUp();
                        $(this).removeClass('active');
                    } else {
                        $('.over').removeClass('active');
                        $('.submenu').stop().slideUp();
                        $(this).addClass('active');
                        $(this).find('.submenu').stop().slideToggle();
                    }
                }
            });

            $('.menu-icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').stop().fadeToggle();
                    $('.submenu').slideUp('fast');
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').stop().fadeToggle('fast');
                }
            });
            $('.close-menu').click(function () {
                $('.menu-icon').removeClass('active');
                $('#gnavi').stop().fadeOut('fast');
                $('.over').removeClass('active');
                $('.submenu').slideUp('fast');
            });

            //gnavi fixed on pc
            if($('body').hasClass('under')){
                $(window).bind("load resize scroll", function() {
                    var vW = $(window).width(),
                        sG = $(window).scrollTop(),
                        hG = $('.under #mainvisual').offset().top + 360;
                    if(vW > 640){
                        if(sG > hG){
                            $('#mainvisual').css('margin-bottom',136);
                            $('#gnavi').addClass('fixed');
                        }
                        else{
                            $('#mainvisual').removeAttr('style');
                            $('#gnavi').removeClass('fixed');
                        }
                    }
                });
            }else{
                $(window).bind("load resize scroll", function() {
                    var vW = $(window).width(),
                        sG = $(window).scrollTop(),
                        hG = $('.idx-blog').offset().top + 190;
                    if(vW > 640){
                        if(sG > hG){
                            $('.idx-blog').css('margin-bottom',180);
                            $('#gnavi').addClass('fixed');
                        }
                        else{
                            $('.idx-blog').removeAttr('style');
                            $('#gnavi').removeClass('fixed');
                        }
                    }else{
                        $('.idx-blog').removeAttr('style');
                    }
                });
            }
            
            $(window).bind("load resize", function () {
                var vW = $(window).width();
                if (vW > 640) {
                    $('.menu-icon').removeClass('active');
                    $('.over').removeClass('flag active');
                    $('.submenu').removeAttr('style');
                    $('#gnavi').removeAttr('style');
                } else {
					$('.menu-icon').removeClass('active');
                    $('#gnavi').removeClass('fixed');
                    $('#gnavi').removeAttr('style');
                    $('.over').addClass('flag');
					$('.over').removeClass('active');
                    $('.submenu').removeAttr('style');
   				}
            });
        },
        toggleContent: function() {
            $('.toggle').click(function (){
                $(this).next().stop().slideToggle();
            });
        },

    };

    obj.init();

});
