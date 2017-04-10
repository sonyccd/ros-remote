!function(i){function s(s,t,c){function r(t){s.each(function(){i(this).find("div.instrument.attitude div.roll").css("transform","rotate("+t+"deg)")})}function e(t){t>_.pitch_bound?t=_.pitch_bound:t<-_.pitch_bound&&(t=-_.pitch_bound),s.each(function(){i(this).find("div.instrument.attitude div.roll div.pitch").css("top",.7*t+"%")})}function n(t){s.each(function(){i(this).find("div.instrument.heading div.heading").css("transform","rotate("+-t+"deg)")})}function o(t){s.each(function(){i(this).find("div.instrument.turn_coordinator div.turn").css("transform","rotate("+t+"deg)")})}function a(t){t>_.vario_bound?t=_.vario_bound:t<-_.vario_bound&&(t=-_.vario_bound),t*=90,s.each(function(){i(this).find("div.instrument.vario div.vario").css("transform","rotate("+t+"deg)")})}function d(t){t>_.airspeed_bound_h?t=_.airspeed_bound_h:t<_.airspeed_bound_l&&(t=_.airspeed_bound_l),t=90+2*t,s.each(function(){i(this).find("div.instrument.airspeed div.speed").css("transform","rotate("+t+"deg)")})}function l(t){var c=90+t%1e3*360/1e3,r=t/1e4*360;s.each(function(){i(this).find("div.instrument.altimeter div.needle").css("transform","rotate("+c+"deg)"),i(this).find("div.instrument.altimeter div.needleSmall").css("transform","rotate("+r+"deg)")})}function g(t){t=2*t-1980,s.each(function(){i(this).find("div.instrument.altimeter div.pressure").css("transform","rotate("+t+"deg)")})}function m(t){s.each(function(){i(this).find("div.instrument").css({height:t,width:t})})}function u(){s.each(function(){i(this).find("img.box.background").show()})}function v(){s.each(function(){i(this).find("img.box.background").hide()})}var h=this,b=i.extend({size:200,roll:0,pitch:0,turn:0,heading:0,vario:0,airspeed:0,altitude:0,pressure:1e3,showBox:!0,img_directory:"img/"},c),_={pitch_bound:30,vario_bound:1.95,airspeed_bound_l:0,airspeed_bound_h:160};return s.each(function(){switch(t){case"heading":i(this).html('<div class="instrument heading"><img src="'+b.img_directory+'fi_box.svg" class="background box" alt="" /><div class="heading box"><img src="'+b.img_directory+'heading_yaw.svg" class="box" alt="" /></div><div class="mechanics box"><img src="'+b.img_directory+'heading_mechanics.svg" class="box" alt="" /><img src="'+b.img_directory+'fi_circle.svg" class="box" alt="" /></div></div>'),n(b.heading);break;case"variometer":i(this).html('<div class="instrument vario"><img src="'+b.img_directory+'fi_box.svg" class="background box" alt="" /><img src="'+b.img_directory+'vertical_mechanics.svg" class="box" alt="" /><div class="vario box"><img src="'+b.img_directory+'fi_needle.svg" class="box" alt="" /></div><div class="mechanics box"><img src="'+b.img_directory+'fi_circle.svg" class="box" alt="" /></div></div>'),a(b.vario);break;case"turn_coordinator":i(this).html('<div class="instrument turn_coordinator"><img src="'+b.img_directory+'fi_box.svg" class="background box" alt="" /><img src="'+b.img_directory+'turn_coordinator.svg" class="box" alt="" /><div class="turn box"><img src="'+b.img_directory+'fi_tc_airplane.svg" class="box" alt="" /></div><div class="mechanics box"><img src="'+b.img_directory+'fi_circle.svg" class="box" alt="" /></div></div>'),o(b.turn);break;case"airspeed":i(this).html('<div class="instrument airspeed"><img src="'+b.img_directory+'fi_box.svg" class="background box" alt="" /><img src="'+b.img_directory+'speed_mechanics.svg" class="box" alt="" /><div class="speed box"><img src="'+b.img_directory+'fi_needle.svg" class="box" alt="" /></div><div class="mechanics box"><img src="'+b.img_directory+'fi_circle.svg" class="box" alt="" /></div></div>'),d(b.airspeed);break;case"altimeter":i(this).html('<div class="instrument altimeter"><img src="'+b.img_directory+'fi_box.svg" class="background box" alt="" /><div class="pressure box"><img src="'+b.img_directory+'altitude_pressure.svg" class="box" alt="" /></div><img src="'+b.img_directory+'altitude_ticks.svg" class="box" alt="" /><div class="needleSmall box"><img src="'+b.img_directory+'fi_needle_small.svg" class="box" alt="" /></div><div class="needle box"><img src="'+b.img_directory+'fi_needle.svg" class="box" alt="" /></div><div class="mechanics box"><img src="'+b.img_directory+'fi_circle.svg" class="box" alt="" /></div></div>'),l(b.altitude),g(b.pressure);break;default:i(this).html('<div class="instrument attitude"><img src="'+b.img_directory+'fi_box.svg" class="background box" alt="" /><div class="roll box"><img src="'+b.img_directory+'horizon_back.svg" class="box" alt="" /><div class="pitch box"><img src="'+b.img_directory+'horizon_ball.svg" class="box" alt="" /></div><img src="'+b.img_directory+'horizon_circle.svg" class="box" alt="" /></div><div class="mechanics box"><img src="'+b.img_directory+'horizon_mechanics.svg" class="box" alt="" /><img src="'+b.img_directory+'fi_circle.svg" class="box" alt="" /></div></div>'),r(b.roll),e(b.pitch)}i(this).find("div.instrument").css({height:b.size,width:b.size}),i(this).find("div.instrument img.box.background").toggle(b.showBox)}),this.setRoll=function(i){r(i)},this.setPitch=function(i){e(i)},this.setHeading=function(i){n(i)},this.setTurn=function(i){o(i)},this.setVario=function(i){a(i)},this.setAirSpeed=function(i){d(i)},this.setAltitude=function(i){l(i)},this.setPressure=function(i){g(i)},this.resize=function(i){m(i)},this.showBox=function(){u()},this.hideBox=function(){v()},h}i.flightIndicator=function(t,c,r){return new s(i(t),c,r)},i.fn.flightIndicator=function(s,t,c){return this.each(function(){i.flightIndicator(this,t,c)})}}(jQuery);