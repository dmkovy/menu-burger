$(document).ready(function () { //дожидаемся полной загрузки документа и вызываем функцию
	$('.menu-toggle').click(function () { //событие клик по классу вызывает функцию
		$(this).toggleClass('active'); // присваиваем этому элементу класс актив-по клику(снимаем так же)
		$('.menu').slideToggle(300, function () { //метод .slideToggle() позволяет плавно отобразить или скрыть выбранные элементы скользящим движением.
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style'); //вызванная в методе slideToggle функция удаляет аттрибут style у выбранного элемента, если в css display:none
			}
		});
	});
});