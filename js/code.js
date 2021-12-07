$(document).ready(function(){
	(function(){
    const header=document.querySelector('.header');
    window.onscroll= () => {
        if(window.pageYOffset>50){
            header.classList.add('header_active');
        }
        else{
            header.classList.remove('header_active');
        }
    };
}());

(function(){
const burgerItem=document.querySelector('.burger');
const menu=document.querySelector('.header_nav');
const menuCloseItem=document.querySelector('.header_nav-close');
burgerItem.addEventListener('click',()=>{
menu.classList.add('header_nav_active');
});
menuCloseItem.addEventListener('click',()=>{
    menu.classList.remove('header_nav_active');
    });
}());
	$('.slider').slick({

		slidesToShow:6,
		autoplay:true,
		speed:2000,
		autoplaySpeed:1000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:4
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});

	$("#slider").owlCarousel({
	items: 1,
	loop: true,
	nav: true,
	dots: false,
	smartSpeed: 700,
	animateOut:  'slideOutDown' ,
	animateIn:  'slideOutDown' ,
	slideSpeed : 1000,
    singleItem : true,


	});


	$('.reviews__slider').on(`init reInit`, function (event, slick) {
        $('.slick-slide-num-current').text('0' + 1 + ' '); // ' / ' + '0' + slick.slideCount
    })
    $('.reviews__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
        $('.slick-slide-num-current').text('0' + (currentSlide + 1) + ' '); // + ' / 0' + slick.slideCount
    })
    $('.reviews__slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: true,
        easing: 'ease',
        appendArrows: '.slick__arrows',
        prevArrow: '<span class="slick-prev"><</span>',
        nextArrow: '<span class="slick-next">></span>'

    });

	$('.partners__slider-1').slick({
         centerMode: true,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2500,
        speed: 1500,
        responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
    });
    $('.partners__slider-2').slick({
        centerMode: true,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2700,
        speed: 2000,
        responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:4
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
    });
});