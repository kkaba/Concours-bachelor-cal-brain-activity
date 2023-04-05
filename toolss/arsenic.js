// Draw arrow from A to B
function arsenic(a, b) {
    console.log("arsenic");

    push();
   
    translate(a.x, a.y);
    let dir = b.copy().sub(a);
    rotate(dir.heading());
    scale(dir.mag()/20);
    strokeWeight(2);

    let radius = 2;
    
    noFill();
    stroke(0,0,255, 30);
    beginShape();
    for (let angle = 0; angle <= 720; angle += 5) {
      let xx = radius * cos(radians(angle));
      let yy = radius * sin(radians(angle));
      vertex(xx, yy);
      radius += 0.1;
    }
    endShape();
    pop();
}