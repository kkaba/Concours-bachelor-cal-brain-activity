let gridQttX = 200;
let gridQttY = 100;
let columnWidth;
let rowHeight;
let alpha;
//
function calculateGrid() {
    columnWidth = round(width/gridQttX);
    rowHeight = round(height/gridQttY);
}
//
function getRandomPoint() {
    let x = random(0, width);
    let y = random(0, height);
    x = gridifyX(x);
    y = gridifyY(y);
    return createVector(x, y);
}
//
function getPointAround(x, y, dst = 1) {
    let centerV = createVector(width/2, height/2);
    let a = createVector(x, y);
    let b = centerV.copy().sub(a);
    
    let starterAngle = a.angleBetween(b);
    let alpha= 0;
    let randomAngle = random(-alpha, alpha);
    let finalAngle = starterAngle+randomAngle;
   

    let qttX = floor(random(1, dst+1))*columnWidth;
    let qttY = floor(random(1, dst+1))*rowHeight;
    //return createVector(x+qttX*dirX, y+qttY*dirY);
    return createVector(x+cos(finalAngle)*qttX, y+sin(finalAngle)*qttY);
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