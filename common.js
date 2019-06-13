

	
$(function() {
   $(".twb").hover(function(){
	 $('.sub').fadeIn();
  },function(){
	   $(".sub").hover(function(){
	 $('.sub').fadeIn();
  },function(){
	 $('.sub').fadeOut();
 });
 
 
 return false

 });
 
 
 
 
});



var _artistFolder = 'hitorie';
var _artistId = '73100602';
var _linkColor = '#cccccc'
var _linkColor2 = '#eeeeee'


$(function() {

  // sp
    if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
        $("#wrapper").addClass("sp");
    }else{
        $("#wrapper").addClass("pc");
    }

$('ul.menu li').hover(
    function(){ 
	
	$(this).find('img.hv').stop().animate({opacity:'1',top:'-32px',left:'49%',marginLeft:'-12px',right:'auto',width:'24px',height:'22px'},300);

	  },
	  function(){	
	
	$(this).find('img.hv').stop().animate({opacity:'0',top:'-22px',left:'49%',marginLeft:'-1px',right:'auto',width:'2px',height:'2px'},300);
	
  });


$(".fo").hover(function(){
	 $(this).fadeTo("fast",0.7);
  },function(){
	 $(this).fadeTo("fast",1.0); 
});
  
	var topBtn = $('.totop');
	topBtn.hide();
	$(window).scroll(function () {
	if ($(this).scrollTop() > 600) {
	topBtn.fadeIn();
	} else {
	topBtn.fadeOut();
	}
	});
	topBtn.click(function () {
	$('body,html').animate({
	scrollTop: 0
	},300,"swing");
	return false;
  });
});


// add 2016 0809


$(function() {
/*
    $("header h1 a span").css({translateY: -300});
    setTimeout(function(){
        for (var i = 0; i <= 7; i++){
            fadeIN(i);
        }
    }, 500);
*/
    $("h1 a").addClass("gimic");
    setTimeout(function(){
        $("h1 a").removeClass("gimic");
        $("body").removeClass("ready");
    }, 200)
    
    $(window)
        .on("scroll",function(){
            var wH = $(window).height();
            var contentH = $("body").outerHeight();
            offset = contentH - wH;
            scrollPer(offset);
        })

    var flash = $('<div />');
    if($(".main-title").text()){
        flash.addClass("flash").html($(".main-title h2").text());
    }else if($(".profile-title").text()){
        flash.addClass("flash").html($(".profile-title h2").text());
    }else{
        flash.addClass("flash").html($(".image-list-title h2").text());
    }
    $("#frame").addClass("on");
    $("#frame").append(flash);
    setTimeout(function(){
        $("#frame .flash").fadeOut(500);
    }, 500)

    $("nav h3").click(function(){
       $("nav").toggleClass("open");
    });

    var FlameLine = '</span><span class="tr"></span><span class="r"></span><span class="b"></span><span class="l"></span><span class="tl">'

    $(".linewrap").append(FlameLine).hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    });
    
    $(".btn-Top").click(function(){
        $('html,body').animate({ 
            scrollTop:0
        }, 500, 'swing');
        
        return false;
    });
    
    $("header h1 a").click(function(){
        var href = $(this).attr("href");
/*
        for (var i = 0; i <= 7; i++){
            fade(i);
        }
*/      
        $("h1 a").addClass("gimic2");
        setTimeout(function(){
           location.href = href;
        }, 300);
        return false;
    });

/*
    function fade(i){
        setTimeout(function(){
            $("h1 a span").eq(i).animate({translateY:-150},300);
        }, 50*i);
    }

    function fadeIN(i){
        setTimeout(function(){
            $("h1 a span").eq(i).animate({translateY:0},300);
        }, 50*i);
    }
*/

    function scrollPer(offset){
        var scTop = $(window).scrollTop();
        var progress = Math.floor(scTop/offset*100);
        $(".right-progress span").html(progress + "%");
    };
  
});
















