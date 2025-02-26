let numberOne = 1;
let stringOne = '1';
let numberThirty = 30;
let stringThirty = '30';
let numberTen= 10;
let stringTen = '10';


//COMPARAR QUE TENGA EL MISMO VALOR PERO DE TIPO DIFERENTE
if(numberOne == stringOne){
    console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
}else{
    console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}



//COMPARA QUE TENGA EL MISMO VALOR Y EL MISMO TIPO
if(numberThirty === stringThirty){
    console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
}else{
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}


//COMPARE QUE NO TENGA EL MISMO VALOR
if(numberTen !== stringTen){
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
}else{
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}