var canvas = document.getElementById("game");
function resize() {
	// Our canvas must cover full height of screen
	// regardless of the resolution
	var height = window.innerHeight*.95;
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
for(var i = 0; i<12; i++){
	balls[i] =[];
	for(var j=0; j<12; j++){
		balls[i][j] ={ 	x: Math.floor(Math.random()*canvas.width), 
						y: Math.floor(Math.random()*canvas.height*4),
						dx: Math.random()+.15,
						dy: Math.random() -.5,
		 				r: Math.floor(Math.random()*canvas.width*.025),
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
	for(var i = 0; i<12; i++){
		for(var j=0; j<12; j++){
			ctx.beginPath();
			ctx.imageSmoothingEnabled = false;
			ctx.arc(balls[i][j].x,balls[i][j].y,balls[i][j].r, 0, Math.PI*2 );
			ctx.fillStyle = balls[i][j].getColor();
			ctx.fill();
			ctx.closePath();
		}
	}
}

function game(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	drawBalls();
	for(var i = 0; i<12; i++){
		for(var j=0; j<12; j++){
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

