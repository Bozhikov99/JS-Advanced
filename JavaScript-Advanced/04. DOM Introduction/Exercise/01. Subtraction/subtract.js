function subtract() {
    let resultElement=document.getElementById('result');
    let firstNumberElement=document.getElementById('firstNumber');
    let secondNumberElement=document.getElementById('secondNumber');

    let a=firstNumberElement.value;
    let b=secondNumberElement.value;

    resultElement.textContent=Number(a)-Number(b);
}