'use strict'
//ZÄHLER
    document.addEventListener('DOMContentLoaded',function(){
        var anzhal = 0; 
        var text = '';
        document.getElementById('buttonPlus').addEventListener('click',plus);
        document.getElementById('buttonMinus').addEventListener('click',minus);
        
        function plus(){
            anzhal=anzhal+1;
                text='Sie haben die Zahl.'+ anzhal ;
                document.querySelector('output').innerText=text;
                    if(anzhal>-1){document.querySelector('output').style.color="green"}
        }

        function minus(){
            anzhal=anzhal -1;
                text='Sie haben die Zahl.'+anzhal;
                document.querySelector('output').innerText=text;
                    if(anzhal<0){document.querySelector('output').style.color="red";}
        }


    });

//LADE ANIMATION 
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#interaktiv').addEventListener('click', animiere);
    
        function animiere() {
            var ladebalken = document.getElementById('ladebalken');
            ladebalken.animate(
          [
            {
                        width: '1em',
                        background: 'red'
            }, 
            {
                        width: '40em',
                        background: 'yellow'
            },
            {
                        width: '60em',
                        background: 'orange'
            },
            {
                        width: '50em',
                        background: 'yellowgreen'
            }
          ], {
                    duration: 4000,
                    iterations: 1,
                    fill: 'forwards'
                });
        }
    });


//BALL
    document.addEventListener('DOMContentLoaded', function () {
        var moveAndChangeColor = [
            {
                transform: 'translate(0, 0)',
                background: 'red'
        },
            {
                transform: 'translate(200px, 200px)',
                background: 'orange'
        },
            {
                transform: 'translate(300px, 100px)',
                background: 'green'
        },
            {
                transform: 'translate(0px, 0px)',
                background: 'yellow'
        }
    ];
        var circle = document.getElementById('circle');
        document.querySelector('#Starte').addEventListener('click', function () {
                circle.animate(moveAndChangeColor, {
                    duration: 2500,
                    iterations: 2,
                    fill: 'forwards'
                });
            });
    });
