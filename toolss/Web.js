
function Web(a, b) {
    let dir = b.copy().sub(a);
     let diameter = 20;
     stroke(120,120,120.40);
    push();
    scale(map(dir.mag(), 0, width, 0, 6));
    noFill();
  
    for (k = 0; k < 20; k++) {
      star(0, 0, k * 10, k * 8, 6);
    }
    let angle = PI; 
    let pointCount = 12;
    for (let i = angle; i < TWO_PI + angle; i += TWO_PI / pointCount) {
      let x = (diameter / 2) * Math.cos(i) ;
      let y = (diameter / 2) * Math.sin(i);
  
      push();
      translate(x, y);
  
      v = createVector(200, 0);
      v.rotate(i);
  
      line(0, 0, v.x, v.y);
      pop();
    }
    pop();
  }
  
  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  
