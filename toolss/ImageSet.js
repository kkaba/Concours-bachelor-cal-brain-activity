function ImageSet(a, b, imgToDraw) {
    console.log("Image");
    push();
    let wordNumber;
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    scale(dir.mag()); 
    push();
    if(random(0,1) < 0.5) {
        rotate(PI/3);
    } else {
        rotate(PI/6);
    }
    image(imgToDraw,0,0,1,1);
    pop();
    pop();
}
