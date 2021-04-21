
// Слайдеры 
$(".slick_banner").slick({
    dots:true,
    fade: true,
    centerMode: false,
    slidesToShow:1,
    infinite: true,
    slidesToScroll:1,
    autoplay:true,
    appendDots: $(".slide_banner_dots"),
    prevArrow:$(".sl_banner_prev"),
    nextArrow:$(".sl_banner_next"),
    variableWidth: false,
    variableHeight: false,
    touchThreshold: 20,
    swipeToSlide: true
})
 
$(".slick_banner_product").slick({
    dots:true,
    centerMode: false,
    slidesToShow:1,
    infinite: true,
    slidesToScroll:1,
    speed: 200,
    appendDots: $(".slide_product_dots"),
    prevArrow:$(".sl_banner_banner_prev"),
    nextArrow:$(".sl_banner_banner_next"),
    touchThreshold: 20,
    variableWidth: true,
    swipeToSlide: true
})

$(".slick_product").slick({
    dots:false,
    centerMode: false,
    slidesToShow:4,
    infinite: true,
    slidesToScroll:1,
    speed: 200,
    touchThreshold: 20,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true
          }
        },
      ]
})

$(".slick_product-arrow").slick({
  dots:false,
  centerMode: false,
  slidesToShow:3,
  infinite: true,
  slidesToScroll:1,
  speed: 200,
  touchThreshold: 20,
  swipeToSlide: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false
      }
    }
  ]
})

$(".slick_banner_2").slick({
    dots:true,
    fade: true,
    centerMode: false,
    autoplay:true,
    slidesToShow:1,
    infinite: true,
    slidesToScroll:1,
    variableWidth: false,
    variableHeight: false,
    touchThreshold: 20,
    swipeToSlide: true
})

$(".slick_reviews").slick({
    dots:false,
    centerMode: false,
    slidesToShow:1,
    infinite: true,
    slidesToScroll:1,
    variableWidth: true,
    touchThreshold: 20,
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true
          }
        },
        {
            breakpoint: 575,
            settings: {
                dots: true,
              variableWidth: false,
              adaptiveHeight: true,
            }
          },
      ]
})

// catalog 
$(".catalog_button").hover(function(){
    $(".catalog_box").fadeIn(50);
    $(".catalog_box").addClass('open');
    $(".catalog_overlay").fadeIn(50);
    $(this).addClass("catalog_button_hovered")
})

$(".catalog_overlay, .header").hover(function(){
    $(".catalog_box").fadeOut(50);
    $(".catalog_box").removeClass('open');
    $('.catalog_overlay').fadeOut(50);
    $(".catalog_button").removeClass("catalog_button_hovered")
})

$('.close_catalog_nav, .catalog_nav li a').click(function () {
    $('.catalog_overlay').fadeOut(50);
    $('.overlay').removeClass('open');
    $(".catalog_box").removeClass('open');
    $(".catalog_button").removeClass("catalog_button_hovered");
});

// catalog media 
if(window.innerWidth < 991){
  $(".header_bottom .catalog_nav li").click(function(){
    $(".header_bottom .catalog_nav li").find("ul").css("display", "none" );
    $(this).find("ul").css("display", "inline-block");
  })
}

// mobile nav 
$('.navbar-toggler').click(function () {
    $('.navbar-collapse').addClass('open');
    $('.overlay').addClass('open');
});
$('.close_nav, .overlay, .navbar-collapse a').click(function () {
    $('.navbar-collapse').removeClass('open');
    $('.overlay').removeClass('open');
});

// Поиск в моб. 
$(".search_button_mobile").click(function(){
    $(".catalog_button").addClass("zIndex");
    $('.overlay_search').fadeIn();
    $(".hidden_search_mobile").addClass("show");
})
$('.overlay_search').click(function () {
    $(".catalog_button").removeClass("zIndex");
    $(".hidden_search_mobile").removeClass("show");
    $(this).fadeOut(50);
});

// ТАБЫ (ВРУЧНУЮ) 
$(function() {
    $('.tab_content:first-child').show();
    $('.tab_switch').bind('click', function(e) {
      $this = $(this);
      $tabs = $this.parent().parent().next();
      $target = $($this.data("target")); // get the target from data attribute
      $this.siblings().removeClass('tab_switch_show');
      $target.siblings().css("display", "none")
        $this.addClass('tab_switch_show');
        $target.fadeIn("fast");
     
    });
    $('.tab_switch:first-child').trigger('click');
});

//Фильтры 
$('.sidebar__title').click(function () {
  $('.sidebar__list').toggleClass('open');
});

$('.sidebar__list li').click(function () {
  $('.sidebar__list li').removeClass('active');
  $(this).addClass('active');
});

$('.filter__title').click(function () {
  $(this).toggleClass('open');
  $(this).siblings('.filter__body').toggleClass('open');
});

$('#categories').click(function () {
  var sidebarPosition = $('#categories').offset().top;
  $('.filter').removeClass('open');
  $('#filter').removeClass('active');
  $('.sidebar').toggleClass('open').css('top', sidebarPosition - 200);
  $(this).toggleClass('active');
});

$('#filter').click(function () {
  var filterPosition = $('#filter').offset().top;
  $('.sidebar').removeClass('open');
  $('#categories').removeClass('active');
  $('.filter').toggleClass('open').css('top', filterPosition - 200);
  $(this).toggleClass('active');
});

$('#layout-list').click(function () {
  $('.products').addClass('layout-list');
  $('.layout button').removeClass('active');
  $(this).addClass('active');
});

$('#layout-table').click(function () {
  $('.products').removeClass('layout-list');
  $('.layout button').removeClass('active');
  $(this).addClass('active');
});

$('#layout-row').click(function () {
  $('.products').removeClass('layout-list');
  $('.layout button').removeClass('active');
  $(this).addClass('active');
});



// Карта 
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map")

    
   
    if(window.innerWidth < 768){
        var myMap = new ymaps.Map('map', {
              center: [56.291259, 43.998602],
              controls: ['zoomControl'],
              zoom: 10,

          });
      }
      else{
        var myMap = new ymaps.Map('map', {
            center: [56.291259, 43.998602],
            controls: [],
            zoom: 11,

        });
      }

      $(window).on("resize", function () {
        if ($(window).width() > 1024 ) {
            myMap.behaviors.disable('scrollZoom');
         }
         else {
            myMap.behaviors.disable('drag');
         }
      }).resize();
      


// Создаем метку:
myPlacemark1 = new ymaps.Placemark([56.276264, 43.919542], {id:'1',hintContent: 'пр. Ленина, 57'},
{
  iconLayout: 'default#image',
  iconImageHref: 'svg/location-icon.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-15, -42]
});
myPlacemark2 = new ymaps.Placemark([56.229261, 43.868634], {id:'2',hintContent: 'Южное шоссе, 41'},
{
  iconLayout: 'default#image',
  iconImageHref: 'svg/location-icon.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-15, -42]
});
myPlacemark3 = new ymaps.Placemark([56.291259, 43.998602], {id:'3',hintContent: 'ул. Бекетова, 24'},
{
  iconLayout: 'default#image',
  iconImageHref: 'svg/location-icon.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-15, -42]
});
myPlacemark4 = new ymaps.Placemark([56.232644, 43.952653], {id:'4',hintContent: 'ул. Военных Комиссаров, 1'},
{
  iconLayout: 'default#image',
  iconImageHref: 'svg/location-icon.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-15, -42]
});
myPlacemark5 = new ymaps.Placemark([56.266982, 43.976674], {id:'5',hintContent: 'ул. Батумская, 2А'},
{
  iconLayout: 'default#image',
  iconImageHref: 'svg/location-icon.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-15, -42]
});         
myPlacemark7 = new ymaps.Placemark([56.256918, 43.852662], {id:'7',hintContent: 'ул. Краснодонцев, д. 23'},
 {
   iconLayout: 'default#image',
   iconImageHref: 'svg/location-icon.svg',
   iconImageSize: [30, 42],
   iconImageOffset: [-15, -42]
});
myPlacemark8 = new ymaps.Placemark([56.259908, 43.876818], {id:'8',hintContent: 'ул. Дьяконова, д. 8'},
{
  iconLayout: 'default#image',
  iconImageHref: 'svg/location-icon.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-15, -42]
});
myPlacemark9 = new ymaps.Placemark([56.311886, 44.023899], {id:'9',hintContent: 'ул. Ижорская, д. 27,'},
{
  iconLayout: 'default#image',
  iconImageHref: 'svg/location-icon.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-15, -42]
});
myPlacemark10 = new ymaps.Placemark([56.285348, 44.070476], {id:'10',hintContent: 'ул. Верхнепечерская 14 корп. 1,'},
  {
    iconLayout: 'default#image',
    iconImageHref: 'svg/location-icon.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-15, -42]
});
myPlacemark11 = new ymaps.Placemark([56.348996, 43.871589], {id:'11',hintContent: 'ул. Васенко 3,'},
    {
    iconLayout: 'default#image',
    iconImageHref: 'svg/location-icon.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-15, -42]
});
myPlacemark12 = new ymaps.Placemark([56.324231, 43.995054], {id:'12',hintContent: 'ул. Долгополова 19'},
{
    iconLayout: 'default#image',
    iconImageHref: 'svg/location-icon.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-15, -42]
});
myPlacemark13 = new ymaps.Placemark([56.318286, 44.017206], {id:'13',hintContent: 'ул. Горького, 149а'},
{
    iconLayout: 'default#image',
    iconImageHref: 'svg/location-icon.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-15, -42]
});
myPlacemark14 = new ymaps.Placemark([56.290969, 44.045440], {id:'14',hintContent: 'ул. Козицкого, 4'},
{
    iconLayout: 'default#image',
    iconImageHref: 'svg/location-icon.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-15, -42]
});
myPlacemark15 = new ymaps.Placemark([56.231748, 43.945691], {id:'15',hintContent: 'ул. Гагарина, 113'},
{
    iconLayout: 'default#image',
    iconImageHref: 'svg/location-icon.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-15, -42]
});
myPlacemark16 = new ymaps.Placemark([56.226564, 43.861214], {id:'16',hintContent: 'Южное шоссе, 21'},
{
    iconLayout: 'default#image',
    iconImageHref: 'svg/location-icon.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-15, -42]
});
myMap.geoObjects.add(myPlacemark1);
myMap.geoObjects.add(myPlacemark2);
myMap.geoObjects.add(myPlacemark3);
myMap.geoObjects.add(myPlacemark4);
myMap.geoObjects.add(myPlacemark5);
myMap.geoObjects.add(myPlacemark7);
myMap.geoObjects.add(myPlacemark8);
myMap.geoObjects.add(myPlacemark9);
myMap.geoObjects.add(myPlacemark10);
myMap.geoObjects.add(myPlacemark11);
myMap.geoObjects.add(myPlacemark12);
myMap.geoObjects.add(myPlacemark13);
myMap.geoObjects.add(myPlacemark14);
myMap.geoObjects.add(myPlacemark15);
myMap.geoObjects.add(myPlacemark16);
myMap.behaviors.disable('scrollZoom');
myMap.geoObjects.events.add('click', clickOnPlacemark);
function clickOnPlacemark(e){  var placemark = e.get('target');
var id = placemark.properties.get('id');

// Получаем данные для запроса из свойств метки.
jQuery('.j-tab-' + id).addClass('active').siblings().removeClass('active');
console.log(id);
}


}


