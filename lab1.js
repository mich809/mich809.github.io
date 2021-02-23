let fruit = [
  { name: "Apple", quantity: 20, color: "red" },
  { name: "Orange", quantity: 10, color: "orange" },
  { name: "Banana", quantity: 15, color: "yellow" },
  { name: "Kiwi", quantity: 3, color: "green" },
  { name: "Blueberry", quantity: 5, color: "blue" },
  { name: "Grapes", quantity: 8, color: "purple" },
];

let x = 0;

function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < fruit.length; i++) {
      var obj = fruit[i];

      ctx.fillStyle = obj.color;
      ctx.fillRect(x, 500, 150, 100);
      x += 50;
    }
  }
}
