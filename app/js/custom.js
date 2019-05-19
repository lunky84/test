

$(document).ready(function(){

	$('body').on('click', '.accordion-heading', function() {
		let accordion = $( this ).parent();
		let accordion_heading = $( this );
		let accordion_container = accordion_heading.next();
		let current_height = accordion_container.height();
		let target_height = accordion_container.prop('scrollHeight'); // obtaining the scroll height allows me to animate the height with css transition
		let duration = 500; // duration matches the css transition duration
		if (current_height == 0){
			accordion.addClass('active');
			accordion_container.height(0);
			accordion_container.height(target_height);
			setTimeout(function(){
				accordion_container.height('auto');
			}, duration);
		} else {
			accordion_container.height(target_height);
			accordion_container.height(0);
			accordion.removeClass('active');
		}
		return false;
	});

});