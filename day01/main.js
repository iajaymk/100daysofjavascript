// alert("Welcome to the Band Name Generator")
// let city = prompt("Whats the Name of city that you grown up?")

// let pet = prompt("What's the name of your pet?")

// let bandName = city + " " + pet

// alert("Your band name could be "+ bandName)

function generateName(){

    let city = document.getElementById('city').value
    let pet = document.getElementById('pet').value
    let bandName = city + " " + pet

    document.getElementById('output').style.display = "block"
    document.getElementById('output').textContent = bandName

}