document.addEventListener('DOMContentLoaded', function() {
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
 }, false);
      

