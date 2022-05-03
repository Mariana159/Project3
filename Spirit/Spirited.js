//src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"

console.log(navigator);

var device;



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
    console.log(midiAccess.outputs);
    for (var output of midiAccess.outputs.values()){
        device=output;
        console.log('Output device selected', device);
    }

    inputs.forEach((input)=>{
        //console.log(input);
        input.addEventListener('midimessage',handleInput);
    })
}

function colorKeys(key,clr){
    device && device.send([0x90,key,clr]);
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

    //console.log(command);
    //console.log(note);
    //console.log(velocity);

    function noteOn(note){

        //turn all colors back
        console.log(`note:${note}//on`)
        if (note == 64){
            colorKeys(36, 0); colorKeys(37, 0); colorKeys(38, 0); colorKeys(39, 0); colorKeys(40, 0); colorKeys(41, 0);
            colorKeys(42, 0);colorKeys(43, 0);colorKeys(44, 0);colorKeys(45, 0);colorKeys(46, 0);colorKeys(47, 0);colorKeys(48, 0);
            colorKeys(49, 0);colorKeys(50, 0);colorKeys(51, 0);colorKeys(52, 0);colorKeys(53, 0);colorKeys(54, 0); colorKeys(55, 0);
            colorKeys(56, 0);colorKeys(57, 0);colorKeys(58, 0);colorKeys(59, 0);colorKeys(60, 0);colorKeys(61, 0);colorKeys(62, 0);
            colorKeys(63, 0);colorKeys(64, 0);colorKeys(65, 0);colorKeys(66, 0);colorKeys(67, 0);colorKeys(68, 0);
            colorKeys(69, 0);colorKeys(70, 0);colorKeys(71, 0);colorKeys(72, 0);colorKeys(73, 0);colorKeys(74, 0);
            colorKeys(75, 0);colorKeys(76, 0);colorKeys(77, 0);colorKeys(78, 0);colorKeys(79, 0);colorKeys(80, 0);
            colorKeys(81, 0); colorKeys(82, 0); colorKeys(83, 0); colorKeys(84, 0); colorKeys(85, 0); colorKeys(86, 0);
            colorKeys(87, 0);colorKeys(88, 0);colorKeys(89, 0);colorKeys(90, 0);colorKeys(91, 0);colorKeys(92, 0);
            colorKeys(93, 0);colorKeys(94, 0);colorKeys(95, 0);colorKeys(96, 0);colorKeys(97, 0);colorKeys(98, 0);
            colorKeys(99, 0);
        }

        console.log(`note:${note}//on`)
        if (note == 36){
            colorKeys(40, 30)
            document.getElementById("testelm").innerHTML = "Hmm decent weather"
        }

        console.log(`note:${note}//on`)
        if (note == 40){
            colorKeys(40, 30)
            document.getElementById("testelm").innerHTML = "I think. I don't have thermoreceptor"
        }
        
        //lighting
        
        
        console.log(`note:${note}//on`)
        if (note == 71){
            colorKeys(71, 47)
            colorKeys(75, 30)
            light=1*clight
        }

        console.log(`note:${note}//on`)
        if (note == 75){
            colorKeys(75, 3)
            colorKeys(79, 30)
            light=2*clight
        }

        console.log(`note:${note}//on`)
        if (note == 79){
            colorKeys(79, 3)
            colorKeys(83, 30)
            light=3*clight
        }

        console.log(`note:${note}//on`)
        if (note == 83){
            colorKeys(83, 3)
            colorKeys(87, 30)
            light=4*clight
        }

        console.log(`note:${note}//on`)
        if (note == 87){
            colorKeys(87, 47)
            colorKeys(91, 30)
            light=5*clight
        }

        console.log(`note:${note}//on`)
        if (note == 91){
            colorKeys(91, 47)
            colorKeys(95, 30)
            light=6*clight
        }

        console.log(`note:${note}//on`)
        if (note == 95){
            colorKeys(95, 47)
            colorKeys(99, 30)
            light=7*clight
        }

        console.log(`note:${note}//on`)
        if (note == 99){
            colorKeys(99, 47)
            colorKeys(72, 30)
            //colorKeys(99, 30)
            light=8*clight
            document.getElementById("testelm").innerHTML = "Much Better!"
        }

        console.log(`note:${note}//on`)
        if (note == 72){
            colorKeys(72, 47)
            colorKeys(67, 6);colorKeys(63, 6);colorKeys(93, 6);colorKeys(59, 6);colorKeys(46, 6);colorKeys(61, 6);colorKeys(62, 6);
            colorKeys(53, 6);colorKeys(74, 6); colorKeys(39, 6); colorKeys(52, 6); colorKeys(81, 6); colorKeys(77, 6); colorKeys(89, 6); 
            colorKeys(54, 6);colorKeys(55, 6); colorKeys(51, 6); colorKeys(80, 6); colorKeys(98, 6); colorKeys(76, 6);
            
            colorKeys(73, 30)
            light=8*clight
            document.getElementById("weatherinfo").style.display = "none";
            document.getElementById("bigger").innerHTML = "Woah!"
        }

        console.log(`note:${note}//on`)
        if (note == 73){
            colorKeys(73, 48)
            colorKeys(96, 30)

            colorKeys(67, 3);
            colorKeys(63, 3);
            colorKeys(93, 0);
            colorKeys(59, 3);
            colorKeys(46, 48);
            colorKeys(61, 3);
            colorKeys(62, 3);
            colorKeys(53, 3);
            colorKeys(74, 3); 
            colorKeys(39, 3); 
            colorKeys(52, 47); 
            colorKeys(81, 47); 
            colorKeys(77, 48); 
            colorKeys(89, 3); 
            colorKeys(54, 48);
            colorKeys(55, 3); 
            colorKeys(51, 3);
            colorKeys(80, 3);
            colorKeys(98, 47);
            colorKeys(76, 3);
            colorKeys(93, 3);

            //colorKeys(99, 30)
           
            document.getElementById("testelm").style.display="none"
            document.getElementById("pssh1").innerHTML = "Pssh!"
            
        }

        console.log(`note:${note}//on`)
        if (note == 96){
            colorKeys(41, 30)
            colorKeys(96, 3)
            //colorKeys(99, 30)
            
            document.getElementById("psh2").innerHTML = "Pssh!"
        }

        if (note == 41){
            colorKeys(41, 3)
            colorKeys(49, 30)
            //colorKeys(99, 30)
            
            document.getElementById("psh3").innerHTML = "Pssh!"
        }

        if (note == 49){
            colorKeys(85, 30)
            colorKeys(49, 3)
            //colorKeys(99, 30)
            
            document.getElementById("psh4").innerHTML = "Pssh!"
        }

        if (note == 85){
            colorKeys(85, 48)
            colorKeys(88, 30)
            //colorKeys(99, 30)
            
            document.getElementById("psh5").innerHTML = "Psssshhhh!"
        }

        if (note == 88){
            colorKeys(56, 30)
            colorKeys(88, 3)
            //colorKeys(99, 30)
            
            document.getElementById("allpssh").style.display = "none";
            document.getElementById("vamonos").style.display="inline";
        }

        if (note == 56){
            colorKeys(56, 47)
            colorKeys(68, 30)
            //colorKeys(99, 30)
            
            document.getElementById("hibath").innerHTML = "Looks like she works in a bath house now :0.";
        }

        if (note == 68){
            colorKeys(97, 30)
            colorKeys(68, 3)
            //colorKeys(99, 30)
            
            document.getElementById("hibath").innerHTML = "Not enough bubbles tho >:(";
        }

        if (note == 97){
            colorKeys(97, 47)
            colorKeys(50,30)
            
            document.getElementById("hibath").innerHTML = "Maybe if I talk a lot I can make some appear :0. Ask me things about the movie. Let's see what happens";
        }

        if (note == 50){
            colorKeys(50,47)
            colorKeys(78, 30)
            colorKeys(82, 30)
            colorKeys(86, 30)
            colorKeys(90, 30)
            colorKeys(94, 30)

            //colorKeys(99, 30)
            
            document.getElementById("hibath").innerHTML = "Feel free to ask me any of the following questions";
            document.getElementById("questions").style.display="inline"
            //document.getElementById("Q1").innerHTML = "What is the run time of the film?";
            //document.getElementById("Q2").innerHTML = "When was it released?";
            //document.getElementById("Q3").innerHTML = "Who directed it?";
            //document.getElementById("Q4").innerHTML = "What is the summary?";
            //document.getElementById("Q5").innerHTML = "What was the orginal name?";
        }

        if (note == 94){
            colorKeys(94,47)
            
            document.getElementById("Q1").innerHTML = spiritedruntime;
        }

        if (note == 90){
            colorKeys(90,3)
            
            document.getElementById("Q2").innerHTML = spiritedrelease;
        }

        if (note == 86){
            colorKeys(86,3)
            
            document.getElementById("Q3").innerHTML = spiritdirector;
        }

        if (note == 82){
            colorKeys(82,3)
            document.getElementById("Q4").innerHTML = spiritedsum;
        }

        if (note == 78){
            colorKeys(78,3)
            
            document.getElementById("Q5").innerHTML = ogname;
        }

        
        
        
    }
   

    function noteOff(note){

        console.log(`note:${note}//off`)
        if (note == 36){
            colorKeys(36, 47)
            document.getElementById("testelm").innerHTML = "I think"
        }

        console.log(`note:${note}//off`)
        if (note == 40){ 
            colorKeys(40, 3)
            colorKeys(71, 30)
            document.getElementById("testelm").innerHTML = "I can see it's really dark tho. Follow the spirits on your board to turn on the lights!"
        }

        if (note == 99){
            
            //colorKeys(99, 30)
            light=8*clight
            document.getElementById("testelm").innerHTML = "   "
        }

        console.log(`note:${note}//off`)
        if (note == 72){

            document.getElementById("bigger").style.display="none"
            document.getElementById("testelm").innerHTML = "That's a lot of ghost";
            
           
            
        }

        if (note == 94){
           
            
            document.getElementById("Q1").innerHTML = "";
        }

        if (note == 90){
            
            
            document.getElementById("Q2").innerHTML = "";
        }

        if (note == 86){
           
            
            document.getElementById("Q3").innerHTML = "";
        }

        if (note == 82){
            
            document.getElementById("Q4").innerHTML = "";
        }

        if (note == 78){
           
            
            document.getElementById("Q5").innerHTML = "";
        }
        

    

    }
}







var temp;
var city;
var country;
var desc;


class2();

    //city name, temp, discription, country name
    function class2(){
        var APIkey ='946b694fccddd5270c19c19e8424efec';
        var lat= '33.85033';
        var lon='132.78506';
        var units='imperial';
       $.ajax({
           //Call SETTING & PARAMS
           type: 'GET',
           //GEt Post Put Delte
           dataType: 'json',
           //Use a backtick `--its near the squiggley line. This does not bring happiness ', this one does `. 
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${units}`,
           async: false,
           crossDomain: true,
        

           //What to do when the call gets returned
           // 500 is unsuccessful complete means once done with call
           complete: function (response){
               //checks if call is good, keeps if from goinging without response, check on responsejson for tis ex
               if (response.readyState === 4 && response.status === 200){
                   console.log(response);
                   
                   temp= response.responseJSON.main.temp;
                   country=response.responseJSON.sys.country;
                   desc= response.responseJSON.weather[0].description;
                   city=response.responseJSON.name;
                   var other= response.responseJSON.sys.sunrise;

                   
                   

                   console.log(temp);
                   console.log(country);
                   console.log(desc);
                   console.log(city);
                   console.log(other);

                  
                   

                
                   //isolate the info youre looking for 
                   

                   //document.querySelector(".backgroundColor").style.background, you can see these update on the console, refresh refresh
                   //after you check this you can make it do whatever you want
                  
               }

           }
        })
    }
   


var namespirited;
getValue();
function getValue(){
    $.ajax({
        //Call SETTING & PARAMS
        type: 'GET',
        //GEt Post Put Delte
        dataType: 'json',
        url: 'https://ghibliapi.herokuapp.com/people',
        async: false,
        crossDomain: true,

        //What to do when the call gets returned
        // 500 is unsuccessful complete means once done with call
        complete: function (response){
            //checks if call is good, keeps if from goinging without response, check on responsejson for tis ex
            if (response.readyState === 4 && response.status === 200){
                console.log(response);
                

                //isolate the info youre looking for 
               
               namespirited = response.responseJSON[46].name;
               
              
               
               // Long = response.responseJSON.iss_position.longitude;

                //document.querySelector(".backgroundColor").style.background, you can see these update on the console, refresh refresh
                //after you check this you can make it do whatever you want
               //console.log(namespirited);
                //console.log(Long);
            }

        }
     })
 }

 console.log(namespirited);

species();
function species(){
    $.ajax({
        //Call SETTING & PARAMS
        type: 'GET',
        //GEt Post Put Delte
        dataType: 'json',
        url: 'https://ghibliapi.herokuapp.com/films',
        async: false,
        crossDomain: true,

        //What to do when the call gets returned
        // 500 is unsuccessful complete means once done with call
        complete: function (response){
            //checks if call is good, keeps if from goinging without response, check on responsejson for tis ex
            if (response.readyState === 4 && response.status === 200){
                console.log(response);
                spiritedsum=response.responseJSON[10].description;
                spiritedrelease=response.responseJSON[10].release_date;
                spiritedruntime=response.responseJSON[10].running_time;
                spiritdirector=response.responseJSON[10].director;
                ogname=response.responseJSON[10].original_title_romanised

                console.log(spiritedsum);
                console.log(spiritedrelease);
                console.log(spiritedruntime);
               
               
            }

        }
     })
}

