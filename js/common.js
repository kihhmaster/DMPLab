
document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	let noregistButton = document.querySelector('.noregist__button'),
		regist = document.querySelector('.regist'),
		registMobail = document.querySelector('.regist--mobail'),
		noregistButtonMobail = document.querySelector('.noregist__button--mobail'),
		cross = document.querySelector('.cross'),
		overlay = document.querySelector('.overlay'),
		hamburger = document.querySelector('.hamburger--img')

		hamburger.addEventListener('click', ()=>{
		overlay.style.display = "flex"
	});

	cross.addEventListener('click', ()=>{
		overlay.style.display = "none"
	});

	// noregistButton.addEventListener('click', ()=>{
	// 	noregistButton.classList.toggle('hide')
	// 	regist.classList.toggle('show')  
	// });
	// noregistButtonMobail.addEventListener('click', ()=>{
	// 	noregistButtonMobail.classList.toggle('hide')
	// 	registMobail.classList.toggle('show')  
	// })
	let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
	let popup = document.querySelector('.popup'); // Само окно
	let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
	let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

	openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
	});
	closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
	});
	document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
	});

	$(function(){
	
		$('.owl-carousel').owlCarousel({
			center: true,
			items: 2,
			nav: true,
			loop:true,
			margin:10,
			center: false,
			lazyLoad: true,
			responsive:{
				0:{
					items:1
				},
				600:{
						items:2
				},
				1000:{
						items:2
				}
			}
		});

		

	});


});
