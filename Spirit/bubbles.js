var canvas; 

function setup() {
    canvas= createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1') ;

    smooth(8);
    noStroke();
   

}

function draw(){
    
    clear();
    background(0, 10);
    //background(0, 0, 0, 4)
    //one ghost
    //circle(x, y, d)
    //rect(x, y, w, [h], [tl], [tr], [br], [bl])
    //ellipse(x, y, w, h, [detail])


    fill(200, 30, 40, 70);
    circle(700, 290, 30);
   
}
//var rs;





