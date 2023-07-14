// TODO:

/* 
Create player
Shoot projectiles
Create enemies
Detect collision on enemy / projectile hit
Detect collision on enemy / player hit
Remove off screen projectiles
Colorize game
Shrink enemies on hit
Create particle explosion on hit
Add score
Add game overUI
Add restart button
Add start game button
*/

// Create const canvas and set width and height
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

//Create a class for player
class Player {
  // capital P for class
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Player in the middle
const x = canvas.width / 2;
const y = canvas.height / 2;

const player = new Player(x, y, 30, "blue");
player.draw();

console.log(player);
