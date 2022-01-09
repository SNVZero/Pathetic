$(document).ready(function(){
	let isMobiel={
		Android: function() { return navigator.userAgent.match(/Android/i);},
		BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i);},
		iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
		Opera: function() { return navigator.userAgent.match(/Opera Mini/i);},
		Windows: function() { return navigator.userAgent.match(/IEMobiele/i);},
		any: function() { return (isMobiel.Android() || isMobiel.BlackBerry() || isMobiel.iOS() ||isMobiel.Opera() || isMobiel.Windows() )}
	}

	let body = document.querySelector('body')
	if(isMobiel.any()){
		body.classList.add('touch');
		let arrow =	document.querySelectorAll('.arrow');
		for(i=0;i<arrow.length;i++){
			let thisLink = arrow[i].previousElementSibling;
			let subMenu = arrow[i].nextElementSibling;
			let thisArrow = arrow[i];
			const head__lang = document.querySelector('.A');
			thisLink.classList.add('parent');
			arrow[i].addEventListener('click',function(){
				head__lang.classList.toggle('active');
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			})
		}
		let arrow_2 = document.querySelectorAll('.arrow2');
		for(i=0;i<arrow_2.length;i++){
			let thisLink_2 = arrow_2[i].previousElementSibling;
			let subMenu_2 = arrow_2[i].nextElementSibling;
			let thisArrow_2 = arrow_2[i];
			const head_lang_2 = document.querySelector('.B');
			thisLink_2.classList.add('parent');
			arrow_2[i].addEventListener('click',function(){
				head_lang_2.classList.toggle('active');
				subMenu_2.classList.toggle('open');
				thisArrow_2.classList.toggle('active');
			})
		}

	}else{
		body.classList.add('desctop');
		let arrow =	document.querySelectorAll('.arrow');
		for(i=0;i<arrow.length;i++){
			let thisLink = arrow[i].previousElementSibling;
			let subMenu = arrow[i].nextElementSibling;
			let thisArrow = arrow[i];
			const head__lang = document.querySelector('.A');
			thisLink.classList.add('parent');
			arrow[i].addEventListener('click',function(){
				head__lang.classList.toggle('active');
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			})
		}
		let arrow_2 = document.querySelectorAll('.arrow2');
		for(i=0;i<arrow_2.length;i++){
			let thisLink_2 = arrow_2[i].previousElementSibling;
			let subMenu_2 = arrow_2[i].nextElementSibling;
			let thisArrow_2 = arrow_2[i];
			const head_lang_2 = document.querySelector('.B');
			thisLink_2.classList.add('parent');
			arrow_2[i].addEventListener('click',function(){
				head_lang_2.classList.toggle('active');
				subMenu_2.classList.toggle('open');
				thisArrow_2.classList.toggle('active');
			})
		}
	}

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
const menu=document.querySelector('.menu');
const menuCloseItem=document.querySelector('.menu-close');
const wrap = document.querySelector('.header_wrapper');
burgerItem.addEventListener('click',()=>{
menu.classList.toggle('header_nav_active');
wrap.classList.toggle('opened')
});

}());

	$('.slider').slick({

		slidesToShow:5,
		autoplay:true,
		speed:2000,
		autoplaySpeed:1000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
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
        slidesToShow: 4,
        slidesToScroll: 2,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2500,
        speed: 1500,
        responsive:[
			{
				breakpoint: 1100,
				settings:{
					slidesToShow:2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
    });
    $('.partners__slider-2').slick({
        centerMode: true,
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2700,
        speed: 2000,
        responsive:[
			{
				breakpoint: 1100,
				settings:{
					slidesToShow:2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},

			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
    });

	$('.faq__title').click(function(event) {
		if($('.faq-field').hasClass('one')){
			$('.faq__title').not($(this)).parent().removeClass('active');
			$('.text').not($(this).next()).slideUp(300);
		}
		$(this).next().slideToggle(300); //.toggleClass('active')
		$(this).parent().toggleClass('active');
		});


		let checkbox = document.querySelector('.checkbox__input');
		$(function(){
			checkbox.addEventListener('click',()=>{
				checkbox.classList.toggle('checked');
			})

		})

		$(function(){
			$(".ajaxForm").submit(function(e){
				e.preventDefault();
				var href = $(this).attr("action");
				$.ajax({
					type: "POST",
					dataType: "json",
					url: href,
					data: $(this).serialize(),
					success: function(response){
						if((response.status == "success")&&(checkbox.classList.contains('checked'))){
							alert("We received your submission, thank you!");
						}else if(!checkbox.classList.contains('checked')){
							alert('checkbox is not checked')
						}
						else {
							alert("An error occured: " + response.message);
						}
					}
				});
			});
	});



});