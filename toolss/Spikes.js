function Spikes(a, b) {
    console.log("spikes");
    push();
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    scale(dir.mag()/1.5);
    strokeWeight(1 / dir.mag());
    let nbVertices=10;
    push();
    noFill();
    
    for(i=4;i<nbVertices;i++){
        stroke(map(i, 4, nbVertices, 0, 200));
        beginShape();
        vertex(i*0.1,i*0.3);
        vertex(i*0.1+0.2,i*0.2);
        vertex(i*0.2+0.1,i*0.3);
        vertex((i+1)*0.1,(i+1)*0.3);
        endShape();
    }
    
    pop();
    pop();
}