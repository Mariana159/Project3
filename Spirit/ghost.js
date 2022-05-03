
var canvas; 

function setup() {
    canvas= createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1') ;

}

var light=1
let clight=50

let z1=0.7
let movesx=1
let sx=0.4
let movex= -300
let speedz1=120
let x=15
let y=0
let h=10
let w=1
let womble=0.2
let yomble=0.05



function draw(){
    clear();
    background(0, 370-light);
    //background(0, 0, 0, 4)
    //one ghost
    //circle(x, y, d)
    //rect(x, y, w, [h], [tl], [tr], [br], [bl])
    //ellipse(x, y, w, h, [detail])

    //front ghost
    noStroke();
    fill(3,3,3,50);
	ellipse(225+movex, 190, 150+x+w, 170+h);
	rect(135+movex, 160, 172, 430,20);
	ellipse(150+movex+w, 390+3*y, 100+x+w, 200);
	ellipse(180+movex, 3100+y, 100+x+2*w, 300);
	ellipse(150+movex, 462+y, 150+x+w, 200);
	ellipse(275+movex, 410+y, 100+x+10*w, 300);

	fill(3, 3, 3, 95);
	ellipse(225+movex+w, 190, 150+w, 170);
	rect(150+movex, 160, 150, 430,20);
	ellipse(150+movex, 390+3*y, 100+w, 200);
	ellipse(180+movex, 310+y, 100+2*w, 300);
	ellipse(150+movex, 462+y, 150+5*w, 200);
	ellipse(275+movex, 410+y, 100+10*w, 300);

    fill(255, 255, 255, 100);
    circle(200+movex+0.4*w, 200+2.5*y, 10);
    circle(230+movex+0.1*w, 202-1*y, 10);

    
    //small back ghost
    fill(3,3,3,50);
	ellipse(700-movesx, 370, 85+x+0.2*movesx, 120+0.2*movesx);
	rect(610-movesx, 375, 85+0.2*movesx, 100+x+0.5*movesx,50);
	ellipse(680-movesx, 370, 100+x+0.2*movesx, 200+0.2*movesx);

	fill(3, 3, 3, 95);
	ellipse(700-movesx, 370, 85+0.2*movesx, 120+0.2*movesx);
	rect(610-movesx, 375, 85+0.2*movesx, 100+0.5*movesx,50);
	ellipse(680-movesx, 370, 100+0.2*movesx, 200+0.2*movesx);
	

    fill(255, 255, 255, 100);
    circle(700-movesx+2.5*y, 290+0.4*w, 10);
    circle(680-movesx-1*y, 295+0.4*w, 10);

    //ghost to the right
    //fill(3,3,3,50);
	fill(3, 3, 3, 50);
	ellipse(1000+0.1*movesx, 200, 185-0.2*movesx+x, 300-0.2*movesx);
	ellipse(1010+0.1*movesx, 200, 185-0.2*movesx+x,200-0.5*movesx);
	ellipse(1020+0.1*movesx, 200, 180-0.2*movesx+x, 200-0.2*movesx);

	fill(3, 3, 3, 95);
	ellipse(1000+0.1*movesx, 200, 185-0.2*movesx+yomble, 300-0.2*movesx+yomble);
	ellipse(1010+0.1*movesx, 200, 185-0.2*movesx,200-0.5*movesx);
	ellipse(1020+0.1*movesx, 200, 180-0.2*movesx, 200-0.2*movesx);
	
    fill(255, 255, 255, 100);
    circle(1000+0.1*movesx+0.6*w, 110+0.4*w, 10);
    circle(1030+0.1*movesx-0.4*w, 115-0.1*w, 10);

    //chubby ghost in front
    fill(3, 3, 3, 70);
    rect(1050-movesx, 200, 300, 500,200);

    fill(255, 255, 255, 100);
    circle(1300-movesx+2.5*y, 290+0.4*w, 10);
    circle(1200-movesx-1*y, 295+0.4*w, 10);


    //extra eyeballs
    fill(255, 255, 255, 100);
    circle(600-movesx+2.5*y, 490+0.4*w, 10);
    circle(580-movesx-1*y, 495+0.4*w, 10);

    fill(255, 255, 255, 100);
    circle(300-movesx+2.5*y, 190+0.4*w, 10);
    circle(380-movesx-1*y, 195+0.4*w, 10);

    fill(255, 255, 255, 100);
    circle(1000+movex+0.4*w, 500+2.5*y, 10);
    circle(1030+movex+0.1*w, 502-1*y, 10);

   
    
    w=w+womble
    if(w >=10 || w<=-1){
        womble=(-1)*womble;

    }

    y=y+yomble
    if(y >=7 || y<=-2){
        yomble=(-1)*yomble;

    }

    movex=movex+z1
    movesx=movesx+sx
    if(movex >=windowWidth+600 || movex<=-600){
        z1=(-1)*z1;
        movesx=0

    }
 

   


    

    
    
    
}
