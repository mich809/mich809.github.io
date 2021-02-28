let fruit = [
  { name: "Apple", quantity: 20, color: "red" },
  { name: "Orange", quantity: 10, color: "orange" },
  { name: "Banana", quantity: 15, color: "yellow" },
  { name: "Kiwi", quantity: 3, color: "green" },
  { name: "Blueberry", quantity: 5, color: "blue" },
  { name: "Grapes", quantity: 8, color: "purple" },
];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
drawChart(ctx);

function drawChart(ctx) {
  let position = 0;
  for (let i = 0; i < fruit.length; i++) {
    drawBar(ctx, position, fruit[i].quantity, fruit[i].color);
    writeFruitName(ctx, position, fruit[i].name);
    position += 100;
  }
}

function drawBar(ctx, position, height, fruitColor) {
  ctx.fillStyle = fruitColor;
  ctx.fillRect(position, 600, 100, -height * 20);
}

function writeFruitName(ctx, position, fruitName) {
  ctx.fillStyle = "black";
  ctx.font = "bold 20px serif";
  ctx.fillText(fruitName, position + 10, 590);
}
