
let imgHead;
let imgLogo;
let vit, tim, dens, master;
let stressLevel;
// P5JS preload
function preload() {
    imgHead= loadImage("assets/Head_détouré.png");
    imgLogo= loadImage("assets/Logo_détouré.png");
}
// user input
function mousePressed() {
    if(!sliderCollision(mouseX,mouseY,width/2+40,110,90,30)){
    let x = gridifyX(mouseX);
    let y = gridifyY(mouseY);
    let a = createVector(x, y);
    let b = getPointAround(x, y, 3);
    drawElementFromTo(a, b, vit);
    }
    else{}
}
function sliderCollision(p1x, p1y, r1x, r1y, r2x, r2y) {
    distx = dist(p1x, 0, r1x, 0);
    disty = dist(0, p1y, 0, r1y);
    return distx <= r2x/2 && disty <= r2y/2;
    }
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    calculateGrid();
    //
    background(255);
    rectMode(CENTER);
    Stress();
    stressLevel = createSlider(10,100, 80, 10);
    stressLevel.position(width/2, 100);
    stressLevel.style('width', '80px');
    master=stressLevel.value();
}
// P5JS draw
function draw() {
    master = stressLevel.value();
    Stress();
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    calculateGrid();
}
function keyPressed() {
    console.log(keyCode);
    if(keyCode  == 71) {
        drawGrid();
    }
    if(keyCode  == 32) {
        background(255);
    }
    let x = gridifyX(mouseX);
    let y = gridifyY(mouseY);
    let a = createVector(x, y);
    let b = getPointAround(x, y, 3);
    let c = a.copy();
    let d = b.copy();
    //
    
}

//Import from index T3
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    columnWidth = round(width/gridQttX);
    rowHeight = round(height/gridQttY);
}
// Draw arrow from A to B
function getRandomPoint() {
    let x = random(0, width);
    let y = random(0, height);
    x = gridifyX(x);
    y = gridifyY(y);
    return createVector(x, y);
}
//
function getPointAround(x, y, dst = 1) {
    let dirX = 1;
    if(random(0, 1) <0.5) {
        dirX = -1;
    }
    let dirY = 1;
    if(random(0, 1) <0.5) {
        dirY = -1;
    }
    let qttX = floor(random(1, dst))*columnWidth;
    let qttY = floor(random(1, dst))*rowHeight;
    return createVector(x+qttX*dirX, y+qttY*dirY);
}
function gridifyX(n) {
    return round(n/columnWidth)*columnWidth;
}
function gridifyY(n) {
    return round(n/rowHeight)*rowHeight;
}
function drawGrid() {
    for(let x=0; x<gridQttX; x++) {
        line(x*columnWidth, 0, x*columnWidth, height);
    }
    for(let y=0; y<gridQttY; y++) {
        line(0, y*rowHeight, width, y*rowHeight);
    }
}

