const prompt = require('prompt-sync')();
let array = [];
function addition(a,b){
     jam3 = a+b;
    console.log(jam3)
   array.push(jam3)
}
function soustraction(a,b){
    na9is= a-b;
    array.push(na9is)
    console.log(na9is)
    
}
function multiplication(a,b){
   darb = a*b;
      array.push(darb)
    console.log(darb)
 
}
function division(a,b){
    if(b===0){
        console.log(`error , division par 0`)
    }
     kisma= a/b;
      array.push(kisma)
    console.log(kisma)
   
}
function factorielle(c){
    if (c<0){
        console.log(`error , enter a positif number`)
        return ;
    }
            let fact= 1
     for(let i = 1 ;i<=c ; i++){
          fact*=i ;
           console.log(fact)
           array.push(fact)
          
}
}
function racine_carrée(c){
   if (c<0){
    console.log(`cannot sqrt negative number`)
    return;
   }
  let racine = Math.sqrt(c) ;
   console.log(racine)
   array.push(racine)
     
    
}

function menu() {
    while(true){
        console.log("*****welcome to menu*****");
        let operator = prompt("entré votre operateur +,-,*,/,!,sqrt,0 pour quitter , 00 pour l'historique): ");
        if (operator === "0"){
            console.log("vous avez quitter");    
            break;
        }
        if  (operator ==="00"){
            console.log("historique: ", array);
            continue;
        }
    if(operator ==="sqrt" ||operator === "!"){
           let c =Number(prompt('entré un numero unique: '))
   
    if(operator === "sqrt"){
        racine_carrée(c);
         } 
     if(operator === "!"){
        factorielle(c);
         } 
     }  
    else if(["+","-","*","/"].includes(operator)) {
        let a = Number(prompt('entré le 1er  numero : '))
        let b= Number(prompt('entré le 2éme numero : '))
        switch(operator){
    case"+":
    addition(a,b);
    break;
    case "-":
    soustraction(a,b)
    break;
     case"/":
   division(a,b);
    break;
    case"*":
    multiplication(a,b);
    break;
      default:
      console.log(`error`)
       }
   }
      }
         } 
  
menu();
        
