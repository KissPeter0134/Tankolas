$(document).ready(function () {
	$('.accordion-item .title').on('click', function () {
    $(this).siblings('div.accordion-content').slideToggle();
  })
})