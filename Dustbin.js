class Dustbin{
  constructor(x,y){
	this.x=x;
	this.y=y;
	this.Width=200;
	this.Height=100;
	this.Thickness=20;
	this.angle=0;	
		
	this.bottomBody=Bodies.rectangle(this.x, this.y, this.Width, this.Thickness, {isStatic:true})
	this.leftWallBody=Bodies.rectangle(this.x-this.Width/2, this.y-this.Height/2, this.Thickness, this.Height, {isStatic:true})
	Matter.Body.setAngle(this.leftWallBody, this.angle);
		

	this.rightWallBody=Bodies.rectangle(this.x+this.Width/2, this.y-this.Height/2, this.Thickness, this.Height, {isStatic:true})
	Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
	World.add(world, this.bottomBody)
	World.add(world, this.leftWallBody)
	World.add(world, this.rightWallBody);

  }
  display(){
	var posBottom=this.bottomBody.position;
	var posLeft=this.leftWallBody.position;
	var posRight=this.rightWallBody.position;
	
	push()
	translate(posLeft.x, posLeft.y);
	rectMode(CENTER)
    angleMode(RADIANS)
	fill("yellow")
	stroke("yellow")
	rotate(this.angle)
	rect(0,0,this.Thickness, this.Height);
	pop()

	push()
	translate(posRight.x, posRight.y);
	rectMode(CENTER)
	stroke("yellow")
	angleMode(RADIANS)
	fill("yellow")
	rotate(-1*this.angle)
	rect(0,0,this.Thickness, this.Height);
	pop()

	push()
	translate(posBottom.x, posBottom.y);
	rectMode(CENTER)
	stroke("yellow")
	angleMode(RADIANS)
	fill("yellow")
	rect(0,0,this.Width, this.Thickness);
	pop()

  }

}