try{var siteoriginSlider={};jQuery(function(e){var i=siteoriginSlider.playSlideVideo=function(i){e(i).find("video").each(function(){"undefined"!=typeof this.play&&this.play()})},t=siteoriginSlider.pauseSlideVideo=function(i){e(i).find("video").each(function(){"undefined"!=typeof this.pause&&this.pause()})},n=siteoriginSlider.setupActiveSlide=function(i,t,n){var s=e(i).find(".cycle-sentinel"),o=e(t),d=o.find("video.sow-background-element");if(void 0==n?s.css("height",o.outerHeight()):s.animate({height:o.outerHeight()},n),d.length){var a=o.outerWidth()/o.outerHeight(),c=d.outerWidth()/d.outerHeight();a>c?d.css({width:"100%",height:"auto"}):d.css({width:"auto",height:"100%"}),d.css({"margin-left":-Math.ceil(d.width()/2),"margin-top":-Math.ceil(d.height()/2)})}};e(".sow-slider-images").each(function(){var s=e(this),o=s.siblings(".sow-slider-pagination"),d=s.closest(".sow-slider-base"),a=d.find(".sow-slide-nav"),c=s.find(".sow-slider-image"),l=s.data("settings");c.each(function(i,t){var n=e(t),s=n.data("url");n.click(function(i){if(void 0!==s){var t=e(i.target);"A"!==t.prop("tagName")&&(i.preventDefault(),window.open(s.url,s.new_window?"_blank":"_self"))}})});var r=function(){if(d.show(),s.find(".sow-slider-image").each(function(){var i=e(this);e(window).on("resize panelsStretchRows",function(){i.css("height",i.find(".sow-slider-image-wrapper").outerHeight())}).resize()}),s.on({"cycle-after":function(t,s,o,d,a){var c=e(this);i(d),n(c,d),e(d).trigger("sowSlideCycleAfter")},"cycle-before":function(i,s,d,a,c){var l=e(this);o.find("> li").removeClass("sow-active").eq(s.slideNum-1).addClass("sow-active"),t(d),n(l,a,s.speed),e(a).trigger("sowSlideCycleBefore")},"cycle-initialized":function(t,d){i(e(this).find(".cycle-slide-active")),n(s,d.slides[0]),o.find(">li").removeClass("sow-active").eq(0).addClass("sow-active"),e(this).find(".cycle-slide-active").trigger("sowSlideInitial"),d.slideCount<=1&&(o.hide(),a.hide()),e(window).resize()}}).cycle({slides:"> .sow-slider-image",speed:l.speed,timeout:l.timeout,swipe:l.swipe,"swipe-fx":"scrollHorz"}),s.find("video.sow-background-element").on("loadeddata",function(){n(s,s.find(".cycle-slide-active"))}),o.add(a).hide(),!d.hasClass("sow-slider-is-mobile")&&c.length>1){var r=!1;d.mouseenter(function(){o.add(a).clearQueue().fadeIn(150),r=!1}).mouseleave(function(){r=!0,setTimeout(function(){r&&o.add(a).clearQueue().fadeOut(150),r=!1},750)})}e(window).resize(function(){n(s,s.find(".cycle-slide-active"))}),o.find("> li > a").click(function(i){i.preventDefault(),s.cycle("goto",e(this).data("goto"))}),a.find("> a").click(function(i){i.preventDefault(),s.cycle(e(this).data("action"))}),d.keydown(function(e){37===e.which?s.cycle("prev"):39===e.which&&s.cycle("next")})},f=s.find("img"),h=0,u=!1;f.each(function(){e(this);this.complete?h++:e(this).one("load",function(){h++,h!==f.length||u||(r(),u=!0)}).attr("src",e(this).attr("src")),h!==f.length||u||(r(),u=!0)}),0===f.length&&r()})});}catch(e){}