function initImage() {
  let img = loadImage("https://res.cloudinary.com/dk8ffjlmo/image/upload/v1704257948/img/13.jpg");
  src(img)
    .out(o0)
}

function blend() {
  src(o0)
    .blend(o0, 0.5)
    .out(o1)
}

function modulate() {
  src(o1)
    .modulate(osc(10), 0.5)
    .out()
}

initImage();
blend();
modulate();