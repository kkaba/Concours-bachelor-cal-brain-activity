function karim (a,b){
    console.log("karim");
    push();
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    push();
    if(random(0,1) <0.5){
        rotate(PI/2);
    }
    image(img,0.5,0.5,1,1);

    pop();
    pop();
}
