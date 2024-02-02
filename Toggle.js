class Toggle{
	constructor(x,y){
		this.x = x 
		this.y = y
		this.on = false
		this.sc = 0.66
		this.guideLines = false;
		this.textOffset = -60; // Смещение текста по оси x относительно объекта Toggle
		this.textOptions = [
			"Your dog's pension certificate \n- if not, get a dog (uploaded)",
			"A letter of guarantee from a classmate (uploaded)",
			"Translation of passport into Sanskrit (uploaded)",
			"Reference about lack of inspiration (uploaded)",
				"Biography of a favorite book character (uploaded)",
				"Guide on growing a dinosaur\n in an apartment (reviewed)",
				"Agreement to the processing\n of personal data (uploaded)",
				"Photo (uploaded)",
				"State duty of 100 diamonds (paid)",
				"A photocopy of the certificate of completion\n of kindergarten (uploaded)",
				"A certificate of existence \non the planet Earth  (uploaded)",
				"Instructions for training bats (uploaded)",
				"Penalty for lack of sleep (paid)",
				"A blank (uploaded)",
				"Phone Usage Policy (reviewed)",
				"Chocolate composition (reviewed)",
				"Name of the inspector (reviewed)",
				"Grandfather's credit history  (uploaded)",
				"Air duty (paid)",
				"History of meme development",
				"Notification of the need to come \nto the inspector at least 3 times (reviewed)",
				"Protocol of inspection of food\n from the refrigerator (uploaded)"
			// Добавьте еще варианты текста здесь
		];
		this.label = random(this.textOptions); // Случайный выбор текста
	}
	
	click(x,y){
		if(dist(x,y,this.x-25*this.sc,this.y)<55/2*this.sc ||
			 dist(x,y,this.x,this.y)<55/2*this.sc ||
			 dist(x,y,this.x+25*this.sc,this.y)<55/2*this.sc){
			this.on = !this.on
		}
	}
	
	display(){
		push()
		translate(this.x,this.y)
		scale(this.sc)
		noStroke()
		if(this.on){
			fill(0,255,0)
		}else{
			fill(255,0,0)
		}
		beginShape()
			for(let i = 0; i < PI; i+=PI/64){
				vertex(25*cos(i+PI/2)-16.67,25*sin(i+PI/2))
			}
				for(let i = 0; i < PI; i+=PI/64){
				vertex(25*cos(i-PI/2)+16.67,25*sin(i-PI/2))
			}
		endShape(CLOSE)
		fill(255)
		if(this.on){
			ellipse(20,0,30,30)
		}else{
			ellipse(-20,0,30,30)
		}
		if(this.guideLines){
			noFill()
			strokeWeight(0.5)
			stroke(0)
			ellipse(-20,0,55,55)
			ellipse(0,0,55,55)		
			ellipse(20,0,55,55)
		}
		// Отрисовка текста
		fill(0);
		textAlign(RIGHT, CENTER);
		text(this.label, this.textOffset, 0);
		pop()
	}
}
