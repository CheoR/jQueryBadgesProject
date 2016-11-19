$(function() {
	$.ajax({
		url: 'https://www.codeschool.com/users/615776.json',
		dataType: 'jsonp',
		success: function(response){
			var courses = response.courses.completed;

			courses.forEach(function(element){
				$("<div class='course'></div").appendTo("#badges")
					.append("<h3>" + element.title + "</h3>")
					.append("<img src='" + element.badge + "'>")
					.append("<a class='btn btn-primary' target='_blank' href='" + element.url + "'>See Course</a>");
			}); // courses.forEach
		}
	}) // .ajax
}); // $(function)
