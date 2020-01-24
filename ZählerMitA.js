'use strict'
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
