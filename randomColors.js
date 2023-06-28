function generateColor(){
    let red = Math.floor(Math.random()*223);
    let green = Math.floor(Math.random()*225);
    let blue = Math.floor(Math.random()*113);
    return `rgb(${red}, ${green}, ${blue})`;
}
// document.querySelector('body').innerHTML = generateColor();
// console.log(generateColor());

function generate(){
   
    document.querySelector('#pallet').innerHTML = "";
    for(let i=0; i<10; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = generateColor();
        div.classList.add("col");
        let copy = document.createElement("div");
        copy.innerHTML = `<br> <p>${div.style.backgroundColor} </p>`
        copy.classList.add("copy");
        div.appendChild(copy)
        pallet.appendChild(div)
    }
  
}
document.querySelector('#generateBtn').addEventListener("click", function(){
    generate();
})