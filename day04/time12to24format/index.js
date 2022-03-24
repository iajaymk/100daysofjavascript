let hr
let newtime = ''
function convertTime()
{
    input = document.getElementById('input-el').value
    var timeTextLower = input.toLowerCase();
    let [hours, mins] = timeTextLower.split(":");
  
  
    if (timeTextLower.endsWith("am"))
          hours = hours == 12 ? "0" : hours;
    else if (timeTextLower.endsWith("pm"))
          hours = hours == 12 ? hours : String(+hours + 12);
  
    newtime = hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
  
    
    document.getElementById('result-el').textContent = newtime
}