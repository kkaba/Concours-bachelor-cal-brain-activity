function Words(a, b, imgToDraw) {
    console.log("Words");
    push();
    let wordNumber;
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    push();
    if(random(0,1) < 0.5) {
        rotate(PI/3);
    } else {
        rotate(PI/6);
    }
    var mots= ["Liar", "Uncomfortable", "Stress","Music","Call girlfriend","Friends","Self-conscious","Food" ]
    textSize(32);
    fill(255,0,0,70);
    wordNumber = floor(random(0,9));
    console.log(mots[wordNumber]);
    text(mots[wordNumber], 10,30);
    pop();
    pop();
}
