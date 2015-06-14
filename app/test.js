var globalId 	= 0;
var canvas 		= document.getElementById('main'),
	ctx 		= canvas.getContext('2d'),
	posX 		= 0,
	posY 		= 0,
	lineHeight 	= 20; 

/*Defaults*/
ctx.font = "20px sans";
ctx.fillStyle = "#000000";

	

function updatePosition(displace,type){
	var pos = (type)?type.toLowerCase():'y';
	if(pos==='x'){
		posX += displace;
		return posX;
	}else if(pos === 'y'){
		posY += displace;
		return posY;
	}else{
		console.trace("Invalid axes specified");
	}
}


function clearCanvas(that){
	that.posY -= lineHeight; 
	that.ctx.clearRect(that.posX,that.posY,that.width,that.height);

}

function setPosition(that){
	that.posX = updatePosition(0,'x');
	that.posY = updatePosition(lineHeight,'y');
}


/*Text*/
function Text(text,options){
	this.id 	= undefined;
	this.text 	= text; 
	this.ctx 	= ctx;
	this.width 	= canvas.width;
	this.height = lineHeight;
	
	setPosition(this); 
}

Text.prototype.render = function(){
	this.ctx.fillText(this.text,this.posX,this.posY);
}

Text.prototype.update = function(text,offsetX,offsetY){
	if(text){
		clearCanvas(this);
		this.posX 	= offsetX;
		this.posY 	= offsetY;
		this.text 	= text;
		this.render();
	}else{
		console.error("Input not valid for Text update");
	}

};
