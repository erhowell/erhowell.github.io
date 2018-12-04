var canvas = document.getElementById("game");
function resize() {
	// Our canvas must cover full height of screen
	// regardless of the resolution
	var height = window.innerHeight*.85;
	var width = window.innerWidth;
	canvas.width = width;
	canvas.height = height
	// So we need to calculate the proper scaled width
	// that should work well with every resolution
	
	canvas.style.width = width+'px';
	canvas.style.height = height+'px';
}

window.addEventListener('load', resize, false);
window.addEventListener('resize', resize, false);
var ctx = canvas.getContext("2d");
var balls =[];
for(var i = 0; i<10; i++){
	balls[i] =[];
	for(var j=0; j<10; j++){
		balls[i][j] ={ 	x: Math.floor(Math.random()*canvas.width+ (canvas.width*.25)), 
						y: Math.floor(Math.random()*canvas.height),
						dx: Math.random()*2-1,
						dy: Math.random()*2 -1,
		 				r: Math.floor(Math.random()*canvas.width*.05),
		 				red:Math.floor(Math.random()*255),
		 				blue:Math.floor(Math.random()*255),
		 				green:Math.floor(Math.random()*255),
		 				getColor : function(){
		 					return "rgb("+this.red +","+ this.green+","+ this.blue+")";
		 				}
		 			};
	}
}


function drawBalls(){
	for(var i = 0; i<10; i++){
		for(var j=0; j<10; j++){
			ctx.beginPath();
			ctx.imageSmoothingEnabled = false;
			ctx.arc(balls[i][j].x,balls[i][j].y,balls[i][j].r, 0, Math.PI*2 );
			ctx.fillStyle = balls[i][j].getColor();
			ctx.fill();
			ctx.closePath();
		}
	}
}
function drawHeading(){
	if(canvas.width >800){
		ctx.font=   "100px Sedgwick Ave";
	}
	else{
			ctx.font= "60px Sedgwick Ave";
	}
	ctx.textAlign = "center";
	ctx.fillStyle ="white";
	ctx.fillText( "Liz Howell", canvas.width/2, canvas.height/2);
}

function drawSubheader(){
	if(canvas.width >800){
		ctx.font=   "75px Sedgwick Ave";
	}
	else{
			ctx.font= "45px Sedgwick Ave";
	}
	ctx.textAlign = "center";
	ctx.fillStyle ="white";
	ctx.fillText( "Developer", canvas.width/2, canvas.height/2+100);
}
function drawbackground(){
	ctx.beginPath();
	ctx.imageSmoothingEnabled = false;
	ctx.rect(canvas.width/2-(canvas.width/2), canvas.height/2-(canvas.height/2), canvas.width, canvas.height);
	ctx.fillStyle = "rgba(0,0,0,.45)";
	ctx.fill();
	ctx.closePath();
}
function game(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	drawBalls();
	drawbackground();
	drawHeading();
	drawSubheader();
	for(var i = 0; i<10; i++){
		for(var j=0; j<10; j++){
			if(balls[i][j].x +balls[i][j].dx > canvas.width-balls[i][j].r || balls[i][j].x+balls[i][j].dy < 0+balls[i][j].r){
				balls[i][j].dx=-balls[i][j].dx;
			}
			if(balls[i][j].y + balls[i][j].dy > canvas.height || balls[i][j].y +balls[i][j].dy < 0){
				balls[i][j].dy=-balls[i][j].dy;
			}
			balls[i][j].x+= balls[i][j].dx;
			balls[i][j].y+= balls[i][j].dy;
		}
	}
}

setInterval(game,10);

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

