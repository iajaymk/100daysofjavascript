function LeapYear(){
    let year = document.getElementById('year').value
    if( year % 4 == 0){
        if (year % 100 == 0){
            if(year % 400 == 0){
            document.getElementById('result').textContent = "Leap Year!"
            }
            document.getElementById('result').textContent = "Not a Leap Year!"
        }
        document.getElementById('result').textContent = "Leap Year!"
    }
    else{
        document.getElementById('result').textContent = "Not a Leap Year!"
    }    
}