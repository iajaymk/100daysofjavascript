function reverseString(){
    let word = document.getElementById('input-el').value
    let wordlen = word.length-1
    for(let i = wordlen; i >= 0; i--){
        document.getElementById('result-el').textContent += word[i]
    }
}