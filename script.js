let c = document.getElementById("canvas");
let cHeight = window.innerHeight;
let cWidth = window.innerWidth;
c.height = `${cHeight}`;
c.width = `${cWidth}`;

let ctx = c.getContext('2d');

// Draw random lines at regular intervals
setInterval(draw, 100);

function draw() {
  let ranW = Math.floor(Math.random() * 1000);
  let ranX = Math.floor(Math.random() * 1800);
  let ranY = Math.floor(Math.random() * 1000);
  let ranZ = Math.floor(Math.random() * 1000);
  let ranColorR = Math.floor(Math.random() * 255);
  let ranColorG = Math.floor(Math.random() * 255);
  let ranColorB = Math.floor(Math.random() * 255);

  // Draw a random line
  ctx.beginPath();
  ctx.moveTo(ranW, ranZ);
  ctx.lineTo(ranX, ranY);
  ctx.strokeStyle = `rgb(${ranColorR},${ranColorG},${ranColorB})`;
  ctx.stroke();

  // Display the random X coordinate as text on the canvas
  ctx.font = "30px Arial";
  ctx.fillStyle = `rgb(${ranColorR},${ranColorG},${ranColorB})`;
  ctx.fillText(`X: ${ranX}`, 50, 50);
}

// Clear the canvas every 60 seconds
setInterval(clearCanvas, 60000);

function clearCanvas() {
  ctx.clearRect(0, 0, c.width, c.height);
}
