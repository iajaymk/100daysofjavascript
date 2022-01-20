function daysRemaining(){
    let age = document.getElementById('age').value
    let yearsleft = 90 - age
    let daysLeft = yearsleft * 356
    let monthsLeft = yearsleft * 12
    let weeksLeft = yearsleft * 52
    let message = "You have "+daysLeft+" days, "+monthsLeft+" months, and "+weeksLeft+"weeks left."
    document.getElementById('remaining').textContent = message
    alert(message)
    document.getElementById('warning').textContent = "** Assuming 90 years as total life span."
}