function simplePopup(e,o){$(".pop-shell").css({width:"0px",height:"0px"}),popNamespace.popHeight=0,popNamespace.popWidth=0,dfltOptions={"shrink-in":!0,"slide-in":!1,"slide-out":!1,"btn-style":"none","round-corners":"true","head-align":"center","body-align":"center","foot-align":"center","header-bg-shade":!1,"footer-bg-shade":!1,dragable:!0,"pop-title":"Title Here","pop-body":"Body Content Here","btn-text":"OK","auto-break":-1,"click-fn":function(){}},e||(e={}),e["btn-style"]&&("default"!==e["btn-style"]&&"error"!==e["btn-style"]&&"success"!==e["btn-style"]&&"primary"!==e["btn-style"]&&"none"!==e["btn-style"]||(dfltOptions["btn-style"]=e["btn-style"])),!0!==e["round-corners"]&&!1!==e["round-corners"]||(dfltOptions["round-corners"]=e["round-corners"]),e["head-align"]&&("left"!==e["head-align"]&&"center"!==e["head-align"]&&"right"!==e["head-align"]||(dfltOptions["head-align"]=e["head-align"])),e["body-align"]&&("left"!==e["body-align"]&&"center"!==e["body-align"]&&"right"!==e["body-align"]||(dfltOptions["body-align"]=e["body-align"])),e["foot-align"]&&("left"!==e["foot-align"]&&"center"!==e["foot-align"]&&"right"!==e["foot-align"]||(dfltOptions["foot-align"]=e["foot-align"])),e["auto-break"]&&(dfltOptions["auto-break"]=e["auto-break"]),!1!==e["header-bg-shade"]&&!0!==e["header-bg-shade"]||(dfltOptions["header-bg-shade"]=e["header-bg-shade"]),!1!==e["footer-bg-shade"]&&!0!==e["footer-bg-shade"]||(dfltOptions["footer-bg-shade"]=e["footer-bg-shade"]),!1!==e["shrink-in"]&&!0!==e["shrink-in"]||(dfltOptions["shrink-in"]=e["shrink-in"]),!1!==e["slide-in"]&&!0!==e["slide-in"]||(dfltOptions["slide-in"]=e["slide-in"]),!1!==e["slide-out"]&&!0!==e["slide-out"]||(dfltOptions["slide-out"]=e["slide-out"]),!1!==e.dragable&&!0!==e.dragable||(dfltOptions.dragable=e.dragable),e["click-fn"]&&(dfltOptions["click-fn"]=e["click-fn"]),e["pop-title"]&&(dfltOptions["pop-title"]=e["pop-title"]),e["pop-body"]&&(dfltOptions["pop-body"]=e["pop-body"]),e["btn-text"]&&(dfltOptions["btn-text"]=e["btn-text"]),-1!==dfltOptions["auto-break"]&&(dfltOptions["pop-body"].match(/<.+?>/g)||(dfltOptions["pop-body"]=['<div class="pop-text-wrapper">',breakText(dfltOptions["pop-body"],dfltOptions["auto-break"]),"</div>"].join(""))),$(".pop-shell").removeClass("corner-style-round-all"),$(".pop-head").removeClass("head-align-left head-align-center head-align-right"),$(".pop-bod").removeClass("body-align-left body-align-center body-align-right"),$(".pop-foot").removeClass("foot-align-left foot-align-center foot-align-right"),$(".pop-data-head").removeClass("corner-style-round-tops header-bg-shade-true header-bg-shade-false"),$(".pop-data-cell").removeClass("body-align-center body-align-right"),$(".pop-data-foot").removeClass("corner-style-round-btms footer-bg-shade-true footer-bg-shade-false"),$(".pop-dismiss-btn").removeClass("btn-style-error btn-style-success btn-style-primary"),dfltOptions.dragable&&(popNamespace.moveHandle=document.getElementById("pop-head"),popNamespace.moveHandle.style.cursor="move",popNamespace.movePop=document.getElementById("pop-holder"),popNamespace.moveHandle.addEventListener("mousedown",mouseDown,!1),window.addEventListener("mouseup",mouseUp,!1)),"none"===dfltOptions["btn-style"]?($(".pop-data-foot").html('<div tabindex="1" class="pop-dismiss-txt-btn"></div>'),$(".pop-dismiss-txt-btn").html(dfltOptions["btn-text"]),$(".pop-dismiss-txt-btn").addClass("btn-style-"+dfltOptions["btn-style"]),$(".pop-dismiss-txt-btn").click(function(){exitFn()})):($(".pop-data-foot").html('<button tabindex="1" class="pop-dismiss-btn" value="ok">OK</button>'),$(".pop-dismiss-btn").html(dfltOptions["btn-text"]),$(".pop-dismiss-btn").addClass("btn-style-"+dfltOptions["btn-style"]),$(".pop-dismiss-btn").click(function(){exitFn()})),dfltOptions["round-corners"]&&($(".pop-holder").addClass("corner-style-round-all"),$(".pop-shell").addClass("corner-style-round-all"),$(".pop-data-head").addClass("corner-style-round-tops"),$(".pop-data-foot").addClass("corner-style-round-btms")),$(".pop-data-head").addClass("header-bg-shade-"+dfltOptions["header-bg-shade"]),$(".pop-data-foot").addClass("footer-bg-shade-"+dfltOptions["footer-bg-shade"]),$(".pop-head").addClass("head-align-"+dfltOptions["head-align"]),$(".pop-bod").addClass("body-align-"+dfltOptions["body-align"]),$(".pop-foot").addClass("foot-align-"+dfltOptions["foot-align"]),$(".pop-data-head").html(dfltOptions["pop-title"]),$(".pop-data-cell").html(dfltOptions["pop-body"]),assignPopEvent("resize",!1,function(){popNamespace.scrollOSX=$(document).scrollLeft(),popNamespace.scrollOSY=$(document).scrollTop(),$(".pop-holder").css({left:$(window).width()/2-$(".pop-shell").width()/2+popNamespace.scrollOSX+"px"}),$(".pop-holder").css({top:$(window).height()/2-$(".pop-shell").height()/2+popNamespace.scrollOSY+"px"}),$(".modalbg").css({top:popNamespace.scrollOSY+"px",left:popNamespace.scrollOSX+"px"})}),assignPopEvent("scroll",!1,function(){popNamespace.scrollOSX=$(document).scrollLeft(),popNamespace.scrollOSY=$(document).scrollTop(),$(".pop-holder").css({left:$(window).width()/2-$(".pop-shell").width()/2+popNamespace.scrollOSX+"px"}),$(".pop-holder").css({top:$(window).height()/2-$(".pop-shell").height()/2+popNamespace.scrollOSY+"px"}),$(".modalbg").css({top:popNamespace.scrollOSY+"px",left:popNamespace.scrollOSX+"px"})}),$(".pop-holder").css({visibility:"hidden",display:"block"}),popNamespace.popWidth=$(".pop-shell").width(),popNamespace.popHeight=$(".pop-shell").height(),popNamespace.scrollOSX=$(document).scrollLeft(),popNamespace.scrollOSY=$(document).scrollTop(),$(".pop-holder").css({visibility:"visible",display:"none"}),$(".pop-holder").css({left:$(window).width()/2-popNamespace.popWidth/2+popNamespace.scrollOSX+"px"}),$(".pop-holder").css({top:$(window).height()/2-popNamespace.popHeight/2+popNamespace.scrollOSY+"px"}),$(".modalbg").css({top:popNamespace.scrollOSY+"px",left:popNamespace.scrollOSX+"px"}),dfltOptions["slide-in"]?($(".pop-holder").css({top:$(window).height()/2-$(".pop-shell").height()/2+popNamespace.scrollOSY+50+"px"}),$(".pop-holder").fadeIn(150).animate({top:$(window).height()/2-$(".pop-shell").height()/2+popNamespace.scrollOSY+"px"},{duration:150,queue:!1})):$(".pop-holder").fadeIn(150),!0===dfltOptions["shrink-in"]&&($(".pop-shell").css({width:popNamespace.popWidth+30+"px",height:popNamespace.popHeight+30+"px"}),$(".pop-shell").animate({height:popNamespace.popHeight+"px",width:popNamespace.popWidth+"px"},{duration:150,queue:!1}),$(".pop-holder").animate({left:$(window).width()/2-popNamespace.popWidth/2+popNamespace.scrollOSX+15+"px",top:$(window).height()/2-popNamespace.popHeight/2+popNamespace.scrollOSY+15+"px"},{duration:150,queue:!1})),$(".modalbg").fadeIn(150),"none"===dfltOptions["btn-style"]?$(".pop-dismiss-txt-btn").focus():$(".pop-dismiss-btn").focus(),o&&o()}function breakText(e,o){popNamespace.tempBody=e.replace(/\s+/gm," "),popNamespace.bodyLen=popNamespace.tempBody.length,popNamespace.breakat=o;var p=[],t="";return popNamespace.tempBody.split(" ").forEach(function(e){t.length<popNamespace.breakat?(t.length>0&&(t+=" "),t+=e):(p.push(t),t=e)}),p.push(t),p.join("<br>")}function assignPopEvent(e,o,p){o=o||!1,window.addEventListener?window.addEventListener(e,p,o):window.attachEvent("on"+e,p)}function mouseUp(){window.removeEventListener("mousemove",divMove,!0)}function mouseDown(e){popNamespace.offY=e.clientY-parseInt(popNamespace.movePop.offsetTop),popNamespace.offX=e.clientX-parseInt(popNamespace.movePop.offsetLeft),window.addEventListener("mousemove",divMove,!0)}function divMove(e){popNamespace.movePop.style.top=e.clientY-popNamespace.offY+"px",popNamespace.movePop.style.left=e.clientX-popNamespace.offX+"px"}function exitFn(e){dfltOptions["slide-out"]?$(".pop-holder").fadeOut(150).animate({top:$(window).height()/2-$(".pop-shell").height()/2+popNamespace.scrollOSY+100+"px"},{duration:150,queue:!1}):$(".pop-holder").fadeOut(150),$(".modalbg").fadeOut(150),e?e():dfltOptions["click-fn"]()}var popNamespace={},dfltOptions={};popNamespace.popframe=['<div id="pop-holder" class="pop-holder">','<div class="pop-shell">','<div id="pop-head" class="pop-head">','<div class="pop-data-head"></div>',"</div>",'<div class="pop-bod">','<div class="pop-data-cell"></div>',"</div>",'<div class="pop-foot">','<div class="pop-data-foot"></div>',"</div>","</div>","</div>",'<div class="modalbg"></div>'].join(""),document.write(popNamespace.popframe);