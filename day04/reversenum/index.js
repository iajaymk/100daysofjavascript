function reverseNum(){
    let newnum = 0;
    const num = parseInt(document.getElementById('input-el').value)
    let numb = num
    console.log(typeof(num))
    while (numb >0){
        let a = numb % 10
        numb = Math.floor(numb / 10)
        newnum = newnum * 10 + a
    }
    document.getElementById('result-el').textContent = newnum
}