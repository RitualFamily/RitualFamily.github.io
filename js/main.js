var swiper=new Swiper(".accessories_slider",{spaceBetween:30,slidesPerView:'auto',});$('.accordion').accordion({heightStyle:'content'});$(function(){var tab=$('#tabs .tabs-items > div');tab.hide().filter(':first').show();$('#tabs .tabs-nav a').click(function(){tab.hide();tab.filter(this.hash).show();$('#tabs .tabs-nav a').removeClass('active');$(this).addClass('active');return false;}).filter(':first').click();$('.tabs-target').click(function(){$('#tabs .tabs-nav a[href='+$(this).attr('href')+']').click();});if(window.location.hash){$('#tabs-nav a[href='+window.location.hash+']').click();window.scrollTo(0,$("#".window.location.hash).offset().top);}});$('.menu-burger__header').click(function(){$('.menu-burger__header').toggleClass('open-menu');$('.header_nav').toggleClass('open-menu');$('html').toggleClass('fixed-page');});$(window).scroll(function(){var height=$(window).scrollTop();if(height>50){$('.header').addClass('header-fixed');$('.main').addClass('top_padding');}else{$('.header').removeClass('header-fixed');$('.main').removeClass('top_padding');}});$(document).ready(function(){ymaps.ready(function(){var myMap=new ymaps.Map('map',{center:[55.212966,36.477359],zoom:16},{searchControlProvider:'yandex#search'}),MyIconContentLayout=ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),myPlacemark=new ymaps.Placemark(myMap.getCenter(),{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[67,88],iconImageOffset:[0,0]})
myMap.controls.remove('geolocationControl');myMap.controls.remove('searchControl');myMap.controls.remove('trafficControl');myMap.controls.remove('typeSelector');myMap.controls.remove('fullscreenControl');myMap.controls.remove('rulerControl');myMap.geoObjects.add(myPlacemark);myMap.geoObjects.add(new ymaps.Placemark([55.784450,38.444858],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.854476,38.441866],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.780340,38.650976],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.746436,38.009049],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.797007,37.938118],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.812206,38.183143],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.760515,37.855150],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.805842,38.981601],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.909665,37.736132],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.918953,37.815211],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.920220,37.991532],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));$(".goto").click(function(e){var lat=parseFloat($(this).attr('data-lat'));var lon=parseFloat($(this).attr('data-ling'));myMap.setCenter([lat,lon])})});});$(document).ready(function(){ymaps.ready(function(){var myMap=new ymaps.Map('map3',{center:[55.189249,36.648892],zoom:16},{searchControlProvider:'yandex#search'}),MyIconContentLayout=ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),myPlacemark=new ymaps.Placemark(myMap.getCenter(),{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[67,88],iconImageOffset:[0,0]})
myMap.controls.remove('geolocationControl');myMap.controls.remove('searchControl');myMap.controls.remove('trafficControl');myMap.controls.remove('typeSelector');myMap.controls.remove('fullscreenControl');myMap.controls.remove('rulerControl');myMap.geoObjects.add(myPlacemark);myMap.geoObjects.add(new ymaps.Placemark([55.784450,38.444858],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.854476,38.441866],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.780340,38.650976],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.746436,38.009049],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.797007,37.938118],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.812206,38.183143],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.760515,37.855150],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.805842,38.981601],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.909665,37.736132],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.918953,37.815211],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.920220,37.991532],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));$(".goto").click(function(e){var lat=parseFloat($(this).attr('data-lat'));var lon=parseFloat($(this).attr('data-ling'));myMap.setCenter([lat,lon])})});});$(document).ready(function(){ymaps.ready(function(){var myMap=new ymaps.Map('map1',{center:[55.012667,36.461351],zoom:16},{searchControlProvider:'yandex#search'}),MyIconContentLayout=ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),myPlacemark=new ymaps.Placemark(myMap.getCenter(),{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[67,88],iconImageOffset:[0,0]})
myMap.controls.remove('geolocationControl');myMap.controls.remove('searchControl');myMap.controls.remove('trafficControl');myMap.controls.remove('typeSelector');myMap.controls.remove('fullscreenControl');myMap.controls.remove('rulerControl');myMap.geoObjects.add(myPlacemark);myMap.geoObjects.add(new ymaps.Placemark([55.784450,38.444858],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.854476,38.441866],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.780340,38.650976],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.746436,38.009049],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.797007,37.938118],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.812206,38.183143],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.760515,37.855150],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.805842,38.981601],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.909665,37.736132],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.918953,37.815211],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));myMap.geoObjects.add(new ymaps.Placemark([55.920220,37.991532],{hintContent:''},{iconLayout:'default#image',iconImageHref:'/img/map_pointer.svg',iconImageSize:[20,25]}));$(".goto").click(function(e){var lat=parseFloat($(this).attr('data-lat'));var lon=parseFloat($(this).attr('data-ling'));myMap.setCenter([lat,lon])})});});