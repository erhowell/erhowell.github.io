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
  	$(".link").attr("href",projectData.repository);
  	if(projectData.projectSite!= ''){
  		$('.btn-secondary').after('<button type="button" class="btn btn-primary"><a class="site">View Site</a></button>');
  		$(".site").attr("href",projectData.projectSite);
  	}
 	});


$('#exampleModal').on('hide.bs.modal', function (event) {
	$(".carousel-inner").empty();
	$(".site").remove();
 });

function getDescription(project){
	console.log('start');
	switch(project){
		case 'devSite':
			var projectData= {
				image:["./images/portfolioSite.png"] ,
				name:'Porfolio Site',
				description:'This is my first attempt at a portfolio site. I utitlized Bootstrap and learned JQuery for this project. You can check out the code on my github.',
				repository:'https://github.com/erhowell/erhowell.github.io',
				projectSite: 'https://erhowell.github.io'
			};
			return projectData;
		case 'therapy':
			var projectData= {
				image:["./images/therapy/home-page.png", "./images/therapy/login.png",
				"./images/therapy/your-professional.png", "./images/therapy/find-professional.png"] ,
				name:'Therapy Site',
				description:"This was my USU Hackaton project. My team of 4 and myself put together a prototype for a website where users can sign up, find a health professional and schedule an appointment. I had never used a lamp stack, nor had I ever taken project lead. We built it on a local server  so there is no live site, but you can still see the source code. ",
				repository:'https://github.com/erhowell/therapyhelp',
				projectSite:''
			};
			return projectData;
		case 'jsBubbles':
			var projectData= {
				image:["./images/js-bubbles.png"] ,
				name:'Java Script Bubbles Animation',
				description: "A basic canvas animation. This used to be my Jumbotron background... Thank God its not anymore. open up to a new page to see it do its thing."
				repository:'https://github.com/erhowell/therapyhelp',
				projectSite:''
			};
			return projectData;
	}
}