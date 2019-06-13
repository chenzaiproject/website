var callback;

$(function(){
            var textGimic = setInterval(function(){
                if(!($("body").hasClass("loading"))){
                    return;
                }
                textFloat();
            }, 1000);
            
            $(".btn").hover(function(){
                clearInterval(textGimic);
                textSet();
            });

            $("#intro #logos a span").hover(function(){
                clearInterval(textGimic);
                textSet();
            });

            $("#intro #logos a").click(function(){
                clearInterval(textGimic);
                textSet();

                var dalay = 500;
                
                if($("#wrapper").hasClass("sp")){
                    var dalay = 1000;
                    //console.log(dalay);
                }
                
                setTimeout(function(){
                    $("#intro").addClass("anim")
                    $("#intro").fadeOut("slow");
                }, dalay );
                setTimeout(function(){
                    $("body").removeClass("loading");
                }, dalay +500);

                return false;
            });
            $(".btn").click(function(){
                $("header").addClass("anim");
                
                var dalay = 500;
                
                if($("#wrapper").hasClass("sp")){
                    var dalay = 1500;
                    //console.log(dalay);
                }
                
                setTimeout(function(){
                    $("#intro").addClass("anim")
                    $("#intro").fadeOut("slow");
                }, dalay );
                setTimeout(function(){
                    $("body").removeClass("loading");
                }, dalay*2);
                return false;
            });

    var offset = "";
    $(window)
        .on("ready",function(){
            if(location.hash){
                $("body").addClass("ready").removeClass();
            };
            for (var i = 0; i <= 7; i++){
                apper(i);
            };
        })
        .on("load",function(){
            var header = $("header");
        })
        .on("resize",function(){
        })
        
        loadnews($("#news ul"),"news");
});


function apper(i){
    setTimeout(function(){
        $("#logos").find("span").eq(i).css({"opacity":"1"});
        if(i == 7){
            textFloat();
        }
    }, i*150);

}
function scrollPer(offset){
    var scTop = $(window).scrollTop();
    var progress = Math.floor(scTop/offset*100);
    $(".right-progress").html(progress + "%");
};

function splitText(Elm,delay){
    var setElm = Elm,
    delaySpeed = 20,
    fadeSpeed = 0;
 
    setText = setElm.html();
 
    setElm.css({visibility:'visible'}).children().addBack().contents().each(function(){
        var elmThis = $(this);
        if (this.nodeType == 3) {
            var $this = $(this);
            $this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
        }
    });
    setTimeout(function(){
        splitLength = $('.textSplitLoad').length;
        setElm.find('.textSplitLoad').each(function(i){
            splitThis = $(this);
            splitTxt = splitThis.text();
            splitThis.delay(i*(delaySpeed)).css({display:'inline-block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
        });
    },delay);
        
    
};

    function loadnews(target,cat){
        var info = 'http://www.sonymusic.co.jp/json/artist/hitorie/information/start/0/count/5';
        
/*
        callback = function(json){
            //console.log(json);
            for (var i =0; i < 6; i++ ){
        		target.append(
                    '<li><div class="tname"><a href="'+cat+'/#'+ json.items[i].id+'"><div class="head">'+
                    '<p class="date">'+json.items[i].date+'</p><p>'+ json.items[i].title +'</p>'+
                    '</div></a></div></li>'
        		);
            }
        }
*/

		$.ajax({
			url: info,
			dataType: 'jsonp',
        	jsonp: false,
        	jsonpCallback: 'callback',
            error: function(json) {
    			//console.log("エラー NEWS");
            },
			success: function(json){
                //console.log(json);
                for(var i in json.items){
            		target.append(
                        '<li><div class="tname"><a href="'+cat+'/#'+ json.items[i].id+'"><div class="head">'+
                        '<p class="date">'+json.items[i].date+'</p><p>'+ json.items[i].title +'</p>'+
                        '</div></a></div></li>'
            		);
                }
            loadmedia($("#media ul"),"media");
			}
		});

    }

    function loadmedia(target,cat){
        var callback = new function(data){};
        
    	$.ajax({
    		url: "http://www.sonymusic.co.jp/json/artist/hitorie/media/start/0/count/5",
    		type: "GET",
    		dataType: 'jsonp',
    		jsonpCallback: "callback",
    		scriptCharset: "utf-8",
    		error: function() {
    			//console.log("エラー");
    		},
    		success: function(data) {
                //console.log(data);
    			for(var i in data.items.tv){
    				target.append(
                        '<li><div class="tname"><a href="'+cat+'/#tv"><div class="head">'+
                        '<p class="date">'+data.items.tv[i].date.replace(/\//g, '.')+'</p>'+
                        '<p class="title">'+data.items.tv[i].program+'</p>'+
                        '</div></a></div></li>'
    				);
    			}

    			for(var i in data.items.radio){
    				target.append(
                        '<li><div class="tname"><a href="'+cat+'/#radio"><div class="head">'+
                        '<p class="date">'+data.items.radio[i].date.replace(/\//g, '.')+'</p>'+
                        '<p class="title">'+data.items.radio[i].program+'</p>'+
                        '</div></a></div></li>'
    				);
    			}
    			for(var i in data.items.magazine){
    				target.append(
                        '<li><div class="tname"><a href="'+cat+'/#magazine"><div class="head">'+
                        '<p class="date">'+data.items.magazine[i].date.replace(/\//g, '.')+'</p>'+
                        '<p class="title">'+data.items.magazine[i].media+'</p>'+
                        '</div></a></div></li>'
    				);
    			}
    			for(var i in data.items.web){
    				target.append(
                        '<li><div class="tname"><a href="'+cat+'/#web"><div class="head">'+
                        '<p class="date">'+data.items.web[i].date.replace(/\//g, '.')+'</p>'+
                        '<p class="title">'+data.items.web[i].media+'</p>'+
                        '</div></a></div></li>'
    				);
    			}

            }
        });
    }

function textFloat(){
        $("#logos a").removeClass("static");
    for (var i = 0; i <= 7; i++){
        var rndX = Math.floor((Math.random()*80)+10) + "%";
        var rndY = Math.floor((Math.random()*80)+10) + "%";
        $("#logos").find("span").eq(i).css({left: rndX , top: rndY });
    }
};
function textSet(){
    for (var i = 0; i <= 7; i++){
        var rndY = 49 + "%";
        var rndX = 46 + i + "%";
        $("#logos").find("span").eq(i).css({left: rndX , top: rndY});
    }
    setTimeout(function(){
        $("#logos a").addClass("static");
        $("#logos a span").css({translateX: 0, translateY: 0})
    }, 500)
};


$(document).ready(function() {
   $("#1").click(function() {
$.ajax({
url : "1.txt",
dataType: "text",
 success : function (data) {
$(".text").html(data);
 }
                         });
                    });
                     });
