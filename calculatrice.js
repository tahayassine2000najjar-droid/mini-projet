const prompt = require('prompt-sync')();
let array = [];
function addition(a,b){
     jam3 = a+b;
    console.log(jam3)
   array.push(jam3)
}
function soustraction(){
    na9is= a-b;
    console.log(na9is)
    array.push(na9is)
}
function multiplication(a,b){
   darb = a*b;
    console.log(darb)
    array.push(darb)
}
function division(a,b){
    if(b===0){
        console.log(`error , division par 0`)
    }
     kisma= a/b;
    console.log(kisma)
    array.push(kisma)
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
function racine_carrée (c){
   if (c<0){
    console.log(`cannot sqrt negative number`)
    return;
   }
  racine = Math.sqrt(c) ;
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
           let unique =Number(prompt('entré un numero unique: '))
   
    if(operator === "sqrt"){
        racine_carrée(unique);
     
     }else{
        if(operator === "!"){
        factorielle(unique);
         } 
     }  
    }else if(["+","-","*","/"].includes(operator)) {
        let number1 = Number(prompt('entré le 1er  numero : '))
        let number2= Number(prompt('entré le 2éme numero : '))
        switch(operator){
    case"+":
    addition(number1,number2);
    break;
    case "-":
    soustraction(number1,number2)
    break;
     case"/":
   division(number1,number2);
    break;
    case"*":
    multiplication(number1,number2);
    break;
      default:
      console.log(`error`)
       }
   }
      }
         } 
  
menu();