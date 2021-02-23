function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    //Sky
    ctx.fillStyle = "RGB(135,206,250)";
    ctx.fillRect(0, 0, 900, 300);

    //Island
    ctx.beginPath();
    ctx.arc(450, 450, 285, 3.14159, 0);
    ctx.fillStyle = "RGB(237, 201, 175)";
    ctx.fill();

    //Water
    ctx.fillStyle = "RGB(57, 135, 201)";
    ctx.fillRect(0, 300, 900, 300);

    drawTree(ctx);
    drawImage(ctx);
    drawText(ctx);
    drawSun(ctx);

    setTimeout(animate(ctx), 10);
  }
}

function drawTree(ctx) {
  ctx.fillStyle = "RGB(139,69,19)";
  ctx.fillRect(430, 120, 15, 70);
  ctx.beginPath();
  ctx.arc(438, 110, 35, 0, 2 * Math.PI);
  ctx.fillStyle = "RGB(82,110,42)";
  ctx.fill();
}

function drawImage(ctx) {
  let img = new Image();

  img.src = "Webp.net-resizeimage.png";

  img.onload = function () {
    ctx.drawImage(img, 500, 250);
  };
}

function drawText(ctx) {
  ctx.font = "35px serif";
  ctx.fillStyle = "RGB(101, 67, 33)";
  ctx.fillText("Help!", 350, 250);
}

function drawSun(ctx) {
  ctx.beginPath();
  ctx.arc(800, 60, 60, 0, 2 * Math.PI);
  ctx.fillStyle = "RGB(249, 215, 28)";
  ctx.fill();
}
