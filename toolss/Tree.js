function drawDebugLineFromTo(a, b) {
    line(a.x, a.y, b.x, b.y);
}
// Draw arrow from A to B
function drawElementFromTo(a, b, vitality = 0) {
    push();
    translate(a.x, a.y);
    let dir = b.copy().sub(a);
    rotate(dir.heading());
    randomDrawing(createVector(0,0), dir);
    pop();
    //
    function createChild() {
        vitality--;
        if (vitality > 0) {
            for(let i=0; i<random(dens); i++) {
                let c = getPointInSimlarDirection(b.x, b.y, dir.heading());
                drawElementFromTo(b, c, vitality);
            }
        }
    }
    //
    setTimeout(createChild, random(tim, 3*tim));
}
function Stress(){
    vit = map(master, 0, 100, 2, 8);
    tim = map(master,0,100, 400,200);
    dens=floor(map(master,0,100,2,6));
}
function getPointInSimlarDirection(x, y, starterAngle) {
    let alpha= PI/6;
    let randomAngle = random(-alpha, alpha);
    let finalAngle = starterAngle+randomAngle;
    return createVector(x+cos(finalAngle)*random(50, 150), y+sin(finalAngle)*random(50, 150));
}

function randomDrawing(aa, bb) {
    let randomFunction = floor(random(1, 7));
    if(randomFunction == 1) {
        Spikes(aa, bb);
    }
    if(randomFunction == 2) {
        Web(aa, bb);
    }
    if(randomFunction == 3) {
        ImageSet(aa, bb, imgHead);
    }
    if(randomFunction == 4) {
        ImageSet(aa, bb, imgLogo);
    }
    if(randomFunction == 5){
        Words(aa,bb);
    }
    if(randomFunction == 6){
        arsenic(aa,bb);
    }

}