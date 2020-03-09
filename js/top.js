// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.idxsliders();
			this.getBlog();
		},

		idxsliders:function(){
			new WOW().init();
			$('.idx-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				arrows:false,
			  	dots: true,
			  	fade:true,
			  	autoplaySpeed: 3000
			});
		},

		getBlog : function() {
			$.ajax({
				'url' : 'blog/_custom/?limit=15',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
						var tlt = val.title.length < 55 ? val.title : val.title.substr(0,55)+'...';
						var cate = val.category_name.length < 9 ? val.category_name : val.category_name.substr(0,9)+'...';
						var $li = $('<li><span class="blog-date">'+val.date+'</span><span class="blog-cate">'+cate+'</span><span class="blog-tlt"><a href="blog/'+val.url+'">'+tlt+'</a></span></li>' );
						$li.appendTo('.idx-blog > ul');	
					});
					$('.idx-blog > ul').slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay: false,
						arrows:true,
					});
				}
			});
		},

	};
	
	obj.init();
	
});