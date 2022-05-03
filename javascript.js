src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
var audio = new Audio (`sounds/testing.mp3`)



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
            noteOff(note)
        }
        break;
    }
    //console.log(command);
    //console.log(note);
    //console.log(velocity);

    function noteOn(note){
        console.log(`note:${note}//on`)
        if (note == 73){
            document.getElementById("testelm").innerHTML = "I want to ask you something"
        }

        console.log(`note:${note}//on`)
        if (note == 72){
            //let p5 = new p5();
            document.getElementById("test2").innerHTML = "I want to ask you something"
            audioplay();
        }
    }

    function noteOff(note){
        console.log(`note:${note}//off`)
        if (note == 73){
        document.getElementById("testelm").innerHTML = "note off 73"
        }

        if (note == 72){
            document.getElementById("test2").innerHTML = "note off 73"
            audiopause();
        }
    }

   
}

    function audioplay() {
        audio.play();
        
    }

    function audiopause(){
        audio.pause();
    }
    
    function testingGoogleSearch(){
        api_key = "8932e55c31df4b1f8913561fa79734b50df212f792add95f5917d3208d98a999"
        search='Chicago'
        $.ajax({
            type:'GET',
            dataType:'Json',
            url: "https://serpapi.com/playground?q=Chicago&tbm=isch&ijn=0",
            async: false,
            crossDomain: true,



        })
    }