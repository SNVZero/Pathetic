import App from './App';
import { createApp } from 'vue';
createApp(App).mount('#app')


import $ from 'jquery';

import 'vue-slick';
import '../node_modules/slick-carousel/slick/slick.css';
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
$(document).ready(function(){

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
						alert("Ваша заявка оформлена");
					}else if(!checkbox.classList.contains('checked')){
						alert('Вы не подтвердили согласине на обработку, подтвердите и попробуйте попытку позже')
					}
					else {
						alert("Произошла ошибка при отправке формы, повторите попытку позже " + response.message);
					}
				}
			});
		});
	});


	

	



});