function sum(){
    let number = document.getElementById('number').value
    if (number / 100 >= 1 || number / 10 <= 1){
        alert("Please enter a two digit number.")
    }
    else{
        firstDigit = number % 10
        number = number / 10 - firstDigit/10
        secondDigit = number % 10
        let sum = firstDigit + secondDigit
        document.getElementById('sumofdigits').style.display = "block"
        document.getElementById('sumofdigits').textContent = sum 
    }
}