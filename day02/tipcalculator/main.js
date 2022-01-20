function amount(){
    let billAmount = document.getElementById('bill').value
    let tip = document.getElementById('tip').value
    let people = document.getElementById('people').value
    let tipPercentage = tip/100
    let tipAdded = tipPercentage * billAmount
    let finalAmount = Number(tipAdded) + Number(billAmount)
    alert(finalAmount)
    let individualAmount = finalAmount / people
    document.getElementById('result').textContent = "Everyone pay: "+individualAmount
}