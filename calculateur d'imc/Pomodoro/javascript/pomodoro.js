var compteur;
var seconde =0;
var minute;
var intervalId = null;
var minuteurAllumer = 0;
var MinuteMemory;



  
if(!window.Notification) {
    alert('Sorry, non suporté.');
} else {
    Notification.requestPermission(function(p) {
        if (p === 'denied') {
            
        } else {
           
        }
    });
} 
    


function ChangeButton(ChoiceButton) {
   
    switch (ChoiceButton) {
        case 1:
            if (minuteurAllumer == 1) {
                
                if(confirm("voulez vous stopper le timer")){
                    minuteurAllumer = 0;
                    finish();
                    ChangeButton(ChoiceButton);
                }
                
            }
            else{
                document.getElementById('CourtePause').style.setProperty('background-color','rgba(0, 0, 0, 0.15)');
                document.getElementById('Pomodoro').style.setProperty('background-color','transparent');
                document.getElementById('LonguePause').style.setProperty('background-color','transparent');
    
                document.getElementById('screen').style.setProperty('background-color','rgb(70, 142, 145)');
    
                document.getElementById('time').innerHTML = "05:00";
                document.getElementById('Start').style.setProperty('color','rgb(70, 142, 145)'); 
            }
            
            
            break;

        case 2:

            if (minuteurAllumer == 1) {
                
                if(confirm("voulez vous stopper le timer")){
                    minuteurAllumer = 0;
                    finish();
                    ChangeButton(ChoiceButton);
                }
                
            }
            else{
                document.getElementById('Pomodoro').style.setProperty('background-color','rgba(0, 0, 0, 0.15)');
                document.getElementById('CourtePause').style.setProperty('background-color','transparent');
                document.getElementById('LonguePause').style.setProperty('background-color','transparent');

                document.getElementById('screen').style.setProperty('background-color','rgb(219, 82, 77)');

                document.getElementById('time').innerHTML = "25:00";
                document.getElementById('Start').style.setProperty('color','rgb(219, 82, 77)');

                clearInterval(intervalId);
                compteur=0;
            }
            break;

        case 3:
            if (minuteurAllumer == 1) {
                
                if(confirm("voulez vous stopper le timer")){
                    minuteurAllumer = 0;
                    finish();
                    ChangeButton(ChoiceButton);
                }
                
            }
            else{
                document.getElementById('LonguePause').style.setProperty('background-color','rgba(0, 0, 0, 0.15)');
                document.getElementById('Pomodoro').style.setProperty('background-color','transparent');
                document.getElementById('CourtePause').style.setProperty('background-color','transparent');

                document.getElementById('screen').style.setProperty('background-color','rgb(67, 126, 168)');

                document.getElementById('time').innerHTML = "25:00";
                document.getElementById('Start').style.setProperty('color','rgb(67, 126, 168)');

                clearInterval(intervalId);
                compteur=0;
            }
            break;

      
    
        default:
            break;
    }

}

function start(){
    minuteurAllumer = 1;
    intervalId = setInterval(Decompte, 1000);
    var text = document.getElementById('time').textContent;
    text = text.split(':');
    
    
    minute = text[0];
    minute = minute.replace('0','');
    MinuteMemory = minute;
    
    if (minute == 05) {
        compteur = 300;
    }
    else{
        compteur = 1500;
    }

    document.getElementById('Stop').style.setProperty('display','initial');
    
    document.getElementById('Start').style.setProperty('display','none');
    document.getElementById('Reset').style.setProperty('display','none');


}

function stop() {
    clearInterval(intervalId);
    document.getElementById('Stop').style.setProperty('display','none');
    
    document.getElementById('Start').style.setProperty('display','initial');
    document.getElementById('Reset').style.setProperty('display','initial');
}

function reset() {
    document.getElementById('Stop').style.setProperty('display','none');
    
    document.getElementById('Start').style.setProperty('display','initial');
    document.getElementById('Reset').style.setProperty('display','none');
    document.getElementById("titre").innerHTML ="Pomodoro";

    if (MinuteMemory < 10) {
    
        document.getElementById("time").innerHTML = "0"+MinuteMemory+":"+"00" ;
    }
    else{
        document.getElementById("time").innerHTML = MinuteMemory+":"+"00" ;
    }
    seconde = 00;

}


function finish() {
    clearInterval(intervalId);
    
    if (Notification.permission === 'default')
    {
        alert('Autorisez les notifications pour utiliser');
    } 
    else 
    {
        notify = new Notification('Fin du minuteur', {
            body: 'votre minuteur en cour est terminé',
            icon: '../images/pomodoro.jfif',
            tag: '0001'
        });
        
    }

    if (MinuteMemory < 10) {
    
        document.getElementById("time").innerHTML = "0"+MinuteMemory+":"+"00" ;
    }
    else{
        document.getElementById("time").innerHTML = MinuteMemory+":"+"00" ;
    }
    seconde = 00;



}


function Decompte() {
    
    compteur--;
    console.log(compteur);
    if (seconde == 0) {
        minute--;
        seconde=59;
    }

    if(compteur == 0){
        finish();
    }
    else {
        
        if (minute >=10) {
            if (seconde >=10) {
            
                document.getElementById("time").innerHTML = minute+":"+seconde;
                document.getElementById("titre").innerHTML = minute+":"+seconde+" Pomodoro";
            }
            else{
                document.getElementById("time").innerHTML = minute+":0"+seconde;
                document.getElementById("titre").innerHTML = minute+":0"+seconde+" Pomodoro";
            }
        
        }
        else{
            if (seconde <10) {
                document.getElementById("time").innerHTML = "0"+minute+":0"+seconde;
                document.getElementById("titre").innerHTML = "0"+minute+":0"+seconde+" Pomodoro";
            }
            else{
                document.getElementById("time").innerHTML = "0"+minute+":"+seconde;
                document.getElementById("titre").innerHTML = "0"+minute+":"+seconde+" Pomodoro";
            }
        }
        seconde--;
       
    }
    
        
}	



