function bmi(){
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    let bmi = weight / Math.pow(height,2)
    document.getElementById('result').textContent = Math.round(bmi)
}