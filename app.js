let number1 =0;
let number2 =0;
let summa = 0;
let minus =0;
let multiplication =0;
let division =0;

function plus_chisla(){
    number1 = Number(document.getElementById('number1').value);
    number2 = Number(document.getElementById('number2').value);
    summa = number1 + number2
    document.getElementById('result').innerHTML =  "the result is = " + summa;
}

function raznost_chisla(){
    number1 = Number(document.getElementById('number1').value);
    number2 = Number(document.getElementById('number2').value);
    minus = number1 - number2
    document.getElementById('result').innerHTML =  "the result is = " + minus;
}

function umnozhehie_chisla(){
    number1 = Number(document.getElementById('number1').value);
    number2 = Number(document.getElementById('number2').value);
    multiplication = number1 * number2
    document.getElementById('result').innerHTML =  "the result is = " + multiplication;
}

function delenie_chisla(){
    number1 = Number(document.getElementById('number1').value);
    number2 = Number(document.getElementById('number2').value);
    division = number1 / number2
    document.getElementById('result').innerHTML =  "the result is = " + division;
}

function udalitel(){
    document.getElementById('result').innerHTML = '___'
}