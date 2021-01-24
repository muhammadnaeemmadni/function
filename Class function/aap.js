// function doSomething(){
//     let totoal = 18000;
//     let obtained = 500;

//     let percentage = obtained / totoal * 100; 

//     console.log(percentage

function avr (arr,arr2){
    let avr = arr/arr2
    return avr;
}

let arr = +prompt("enter any number")
let arr2 = +prompt("enter other number")
let sum = avr(arr,arr2)
document.write(sum)