var poid ;
var taille ;
var imc;

function Convertiseur() {
    taille = taille/100;

    return taille;
}

function calculeIMC() {

    console.log(poid);
    console.log(taille);
    
    taille = Convertiseur();
    let tailleCalculeCarre = Math.pow(taille,2);
    imc = poid/tailleCalculeCarre;  
   

    return imc;

}


function ResultImc(ImcCalcule) {
    console.log(ImcCalcule);
    
    document.getElementById('IMCValeur').setAttribute('class','None');
    let positionPointeur;
    if (ImcCalcule >15) {
        positionPointeur = 81 + 60*(ImcCalcule-15);
    }
    else{
        positionPointeur = 0;
    }
    
   
    if (ImcCalcule <=18) {
        document.getElementById('bloc1').setAttribute('class','miseAvant');
        document.getElementById('bloc2').style.setProperty('background-color','gray');
        document.getElementById('bloc3').style.setProperty('background-color','gray');
        document.getElementById('bloc4').style.setProperty('background-color','gray');
        document.getElementById('bloc5').style.setProperty('background-color','gray');
        document.getElementById('bloc6').style.setProperty('background-color','gray');

        document.getElementById('pointeur').style.left = (positionPointeur)+'px';
       document.getElementById('pointeur').style.setProperty('display','block');
    }
    else{ 
    
        if (ImcCalcule >18 && ImcCalcule<20) {
            document.getElementById('bloc2').setAttribute('class','miseAvant');
            document.getElementById('bloc1').style.setProperty('background-color','gray');
            document.getElementById('bloc3').style.setProperty('background-color','gray');
            document.getElementById('bloc4').style.setProperty('background-color','gray');
            document.getElementById('bloc5').style.setProperty('background-color','gray');
            document.getElementById('bloc6').style.setProperty('background-color','gray');

            document.getElementById('pointeur').style.left = (positionPointeur)+'px';
           document.getElementById('pointeur').style.setProperty('display','block');
        }else{
            if (ImcCalcule >=20 && ImcCalcule<26) {
                document.getElementById('bloc3').setAttribute('class','miseAvant');
                document.getElementById('bloc2').style.setProperty('background-color','gray');
                document.getElementById('bloc1').style.setProperty('background-color','gray');
                document.getElementById('bloc4').style.setProperty('background-color','gray');
                document.getElementById('bloc5').style.setProperty('background-color','gray');
                document.getElementById('bloc6').style.setProperty('background-color','gray');

                document.getElementById('pointeur').style.left = (positionPointeur)+'px';
               document.getElementById('pointeur').style.setProperty('display','block');
            } 
            else 
            {
                if (ImcCalcule >=26 && ImcCalcule<30) {
                    document.getElementById('bloc4').setAttribute('class','miseAvant');
                    document.getElementById('bloc2').style.setProperty('background-color','gray');
                    document.getElementById('bloc3').style.setProperty('background-color','gray');
                    document.getElementById('bloc1').style.setProperty('background-color','gray');
                    document.getElementById('bloc5').style.setProperty('background-color','gray');
                    document.getElementById('bloc6').style.setProperty('background-color','gray');

                    document.getElementById('pointeur').style.left = (positionPointeur)+'px';
                   document.getElementById('pointeur').style.setProperty('display','block');
                } else {
                    
                    if (ImcCalcule >=30 && ImcCalcule<39) {
                        document.getElementById('bloc5').setAttribute('class','miseAvant');
                        document.getElementById('bloc2').style.setProperty('background-color','gray');
                        document.getElementById('bloc3').style.setProperty('background-color','gray');
                        document.getElementById('bloc4').style.setProperty('background-color','gray');
                        document.getElementById('bloc1').style.setProperty('background-color','gray');
                        document.getElementById('bloc6').style.setProperty('background-color','gray');

                        document.getElementById('pointeur').style.left = (positionPointeur)+'px';
                        document.getElementById('pointeur').style.setProperty('display','block');
                    } else {

                        if (ImcCalcule >=39 ) {
                            document.getElementById('bloc6').setAttribute('class','miseAvant');
                            document.getElementById('bloc2').style.setProperty('background-color','gray');
                            document.getElementById('bloc3').style.setProperty('background-color','gray');
                            document.getElementById('bloc4').style.setProperty('background-color','gray');
                            document.getElementById('bloc5').style.setProperty('background-color','gray');
                            document.getElementById('bloc1').style.setProperty('background-color','gray');

                            document.getElementById('pointeur').style.left = (positionPointeur)+'px';
                           document.getElementById('pointeur').style.setProperty('display','block');
                        } 
                        
                    }
                }
            }

        }
        
    } 

    document.getElementById('Restart').style.setProperty('display','block');
  
}

function getValue() {
    poid = document.getElementById('poid').value;
    taille = document.getElementById('taille').value;
   

    imc = calculeIMC();
    ResultImc(imc);

}
function RetourZero() {
    
    document.getElementById('IMCValeur').removeAttribute('class','None');
    document.getElementById('bloc1').removeAttribute('class','miseAvant');
    document.getElementById('bloc2').removeAttribute('class','miseAvant');
    document.getElementById('bloc3').removeAttribute('class','miseAvant');
    document.getElementById('bloc4').removeAttribute('class','miseAvant');
    document.getElementById('bloc5').removeAttribute('class','miseAvant');
    document.getElementById('bloc6').removeAttribute('class','miseAvant');

    document.getElementById('bloc6').style.removeProperty('background-color');
    document.getElementById('bloc2').style.removeProperty('background-color');
    document.getElementById('bloc3').style.removeProperty('background-color');
    document.getElementById('bloc4').style.removeProperty('background-color');
    document.getElementById('bloc5').style.removeProperty('background-color');
    document.getElementById('bloc1').style.removeProperty('background-color');

    document.getElementById('bloc6').style.setProperty('background-color','orange');
    document.getElementById('bloc2').style.setProperty('background-color','yellow');
    document.getElementById('bloc3').style.setProperty('background-color','green');
    document.getElementById('bloc4').style.setProperty('background-color','yellow');
    document.getElementById('bloc5').style.setProperty('background-color','orange');
    document.getElementById('bloc1').style.setProperty('background-color','red');

    document.getElementById('Restart').style.setProperty('display','none');
    document.getElementById('pointeur').style.setProperty('display','none');



}









