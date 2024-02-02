var togs = [];
var mice = [];
let r;
let title = "\n\n\n\nWelcome to the State Authority website!\n\nWe appreciate your visit and want to ensure that you have a smooth experience.\nBefore proceeding further, we kindly request you to carefully review and acknowledge the following:\n\n";
let confirmationStatus = false; // Variable to track the confirmation status
let submitButton;
let errorWindow;
let closeButton;

function setup() {
  createCanvas(innerWidth, innerHeight);
  r = max(innerWidth, innerHeight);
  background(255);

  submitButton = createButton("Submit");
  submitButton.position(width / 2 - 50, height - 80);
  submitButton.style("background-color", "#03A9F4");
  submitButton.style("color", "#FFFFFF");
  submitButton.style("padding", "25px 50px");
  submitButton.style("font-size", "16px");
	
  submitButton.mousePressed(showErrorWindow);

  let w = int(width / 220);
  let h = int(height / 150);
  for (let i = 0; i <= 2; i++) {
    for (let i = 0; i < togs.length; i++) {
      togs[i].x -= 100;
    }

    for (let j = -2; j <= 4; j++) {
      togs.push(new Toggle(width / 2.0 + 750 * i, height / 2.0 + 125 * j));
    }
  }

  if (togs.length > 13) {
    togs.splice(13); // Удаляем лишние объекты Toggle
  }
}

function draw() {
  background(245, 245, 220);
  for (let i = 0; i < togs.length; i++) {
    togs[i].display();
  }
  mice.forEach(x => x.update());
  mice.forEach(x => x.display());
  for (let i = mice.length - 1; i >= 0; i--) {
    if (mice[i].click) {
      click(mice[i].pos.x, mice[i].pos.y);
      mice.splice(i, 1);
    }
  }
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text(title, width / 2, 80);
}

function mousePressed() {
  click(mouseX, mouseY);
}

function click(x, y) {
  for (let i = 0; i < togs.length; i++) {
    let prev = togs[i].on;
    togs[i].click(x, y);
    let curr = togs[i].on;
    if (!prev && curr) {
      let a = random(TAU);
      mice.push(new Cursor(r * cos(a) + innerWidth / 2, r * sin(a) + innerHeight / 2, togs[i].x, togs[i].y));
    }
  }
}

function showErrorWindow() {
  errorWindow = createDiv("ERROR! You haven't downloaded all the information, reload the page and try again");
  errorWindow.position(width / 2 - width / 8, height / 2 - height / 8);
  errorWindow.style("background-color", "#FFFFFF");
  errorWindow.style("padding", "20px");
  errorWindow.style("font-size", "24px");
  errorWindow.style("text-align", "center");
  errorWindow.style("width", width / 4 + "px");
  errorWindow.style("height", height / 4 + "px");
  
  closeButton = createButton("X");
  closeButton.position(width / 2 - width / 8 + width / 4 - 30, height / 2 - height / 8 + 10);
  closeButton.style("background-color", "#FF0000");
  closeButton.style("color", "#FFFFFF");
  closeButton.style("padding", "5px 10px");
  closeButton.style("font-size", "16px");
  closeButton.mousePressed(removeErrorWindow);
  
  submitButton.attribute("disabled", true); // Disable submit button
}

function removeErrorWindow() {
  errorWindow.remove(); // Remove error window
  closeButton.remove(); // Remove close button
  submitButton.removeAttribute("disabled"); // Enable submit button
}
