
//Cloud Art 
var canvas; 

function setup() {
    canvas= createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1') ;
}

let ssc = 30
let bsc= 45

src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
//var audio = new Audio (`sounds/testing.mp3`)

function draw(){

    //small coulds
    noStroke();

    circle(25, 35, ssc);
    circle(50, 30, bsc);
    circle(75, 35, ssc); 

    circle(675, 405, ssc);
    circle(700, 400, bsc);
    circle(725, 405, ssc);
    
}





//Keypad
console.log(navigator);

if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success,failure);
}

function failure(){
    console.log('could not connect');
}

//function update devices(event)

function updateDevices(event){
    console.log(event);
}

function success(midiAccess){
    // console.log(midiAccess);
    midiAccess.addEventListener('statechange', updateDevices);
    const inputs = midiAccess.inputs;
    //console.log(inputs);

    inputs.forEach((input)=>{
        //console.log(input);
        input.addEventListener('midimessage',handleInput);
    })

}

function handleInput(input){
    //console.log(input);
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];

    //console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`);

    switch (command){
        case 144:
        //the 0 just means pressed down
        if (velocity > 0){
            noteOn(note);
        //botton up
        } else {
            noteOff(note);
        }
        break;
    }  
}

    //console.log(command);
    //console.log(note);
    //console.log(velocity);


    //button stuff
let element=document.getElementById("kittybus");
let m1= 10%

function noteOn(note){
    console.log(`note:${note}//on`);
    if (note == 49){
        //element.getElementsByClassName("mcat").style.marginLeft = "10%";
        console.log("10")
        element.getElementById("testelm").innerHTML = "I want to ask you something"
    }

    console.log(`note:${note}//on`)
    if (note == 48){
        //let p5 = new p5();
        mkitty.style.marginLeft = "25%"
    }
}

function noteOff(note){
    console.log(`note:${note}//off`)
    if (note == 49){
    document.getElementById("testelm").innerHTML = "note off 73"
    }

    if (note == 54){
        //document.getElementById("test2").innerHTML = "note off 73"
        //audiopause();
    }
}



   


