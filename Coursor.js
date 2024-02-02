class Cursor{
	constructor(x,y,target_x,target_y){
		this.pos = createVector(x,y)
		this.target = createVector(target_x,target_y);
		this.click = false
		this.speed = 10
		this.a = random(PI,TAU);
		this.t = random(1000)
	}
	
	update(){
		let v = p5.Vector.sub(this.target,this.pos);
		let h = v.normalize().heading() + (noise(this.t)-0.5)*this.a
		this.t += 0.01;
		let v2 = createVector(cos(h),sin(h))
		this.pos.add(v2.normalize().mult(min(this.speed,dist(this.target.x,this.target.y,this.pos.x,this.pos.y)*0.25)));
		if(dist(this.target.x,this.target.y,this.pos.x,this.pos.y)<3){
			this.click = true
		}
	}
	
	display(){
		push()
		translate(this.pos.x,this.pos.y)
		strokeWeight(0.7)
		beginShape()
		vertex(0,0)
		vertex(13,13)
		vertex(7,13)
		vertex(11,20)
		vertex(8,20)
		vertex(4,13)
		vertex(0,17)
		endShape(CLOSE)
		pop()
	}
}
