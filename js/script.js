$('#exampleModal').on('show.bs.modal', function (event) {
  	var button = $(event.relatedTarget) // Button that triggered the modal
 	var project = button.data('whatever') 
  	var modal = $(this)
  	var projectData = getDescription(project);
  	modal.find('.modal-title').text(projectData.name)
  	modal.find('.description').text(projectData.description)
	for(var i=0 ; i< projectData.image.length ; i++) {
    $('<div class="carousel-item"><img src="'+projectData.image[i]+'"/></div>').appendTo('.carousel-inner');
  	}
  	$('.carousel-item').first().addClass('active');
  	$('#carouselExampleControls').carousel();
	$("img").css("width", "100%");
  	$(".link").attr("href",projectData.link);
 });
$('#exampleModal').on('hide.bs.modal', function (event) {
	$(".carousel-inner").empty();
 });

function getDescription(project){
	console.log('start');
	switch(project){
		case 'devSite':
			var projectData= {
				image:["./images/portfolioSite.png"] ,
				name:'Porfolio Site',
				description:'Check out the code behind the site!',
				link:'https://github.com/erhowell/erhowell.github.io'
			};
			return projectData;
		case 'therapy':
			var projectData= {
				image:["./images/therapy/home-page.png", "./images/therapy/login.png",
				"./images/therapy/your-professional.png", "./images/therapy/find-professional.png"] ,
				name:'Therapy Site',
				description:'Check out the code behind the site!',
				link:'https://github.com/erhowell'
			};
			return projectData;
	}
}