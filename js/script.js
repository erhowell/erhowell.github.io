$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var project = button.data('whatever') 
  var modal = $(this)
  var projectData = getDescription(project);
  modal.find('.modal-title').text(projectData.name)
  modal.find('.description').text(projectData.description)
  $(".image").attr("src", projectData.image);
  $(".link").attr("href",projectData.link);
});

function getDescription(project){
	var projectData= {
		image: '',
		name:'',
		description:'',
		link:''
	};
	switch(project){
		case 'devSite':
			projectData.image="./images/portfolioSite.png";
			projectData.name='Porfolio Site';
			projectData.description = "Check out the code behind the site!";
			projectData.link= "https://github.com/erhowell/erhowell.github.io";
			return projectData;
	}
}