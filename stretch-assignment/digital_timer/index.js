
let counter = 0;

function turnRed() {  
    const digits = document.querySelectorAll('.digit');
    digits[0].textContent = '0';
    digits[1].textContent = '0';
    digits[3].textContent = '0';
    digits[4].textContent = '1';
    digits[0].style.color = 'red';
    digits[1].style.color = 'red';
    digits[3].style.color = 'red';
    digits[4].style.color = 'red';
    }
    if(digits[4])

//setTimeout keyword with arguments

function tick() {
    for(let counter = 0; counter <= 9; counter++)
    if(counter === 0){
        counter = counter++
    
    digit[4].textContent = counter.toString()
    
} 
let time = setInterval(tick,10);
let timeId = setTimeout(turnRed, 10000)
}