const numberDraw = Math.round(Math.random() * 10);
let attempts = 1;

function clickButton(event){

    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");
    console.log(inputNumber.value);

    if(Number(inputNumber.value) == numberDraw){
        document.querySelector(".screen1").classList.add("hide");
        document.querySelector(".screen2").classList.remove("hide");

        
        let h1 = document.querySelector(".screen2 h1").innerHTML = `voce acertou em ${attempts} tentavias, numero sorteado foi:${numberDraw}` ;
    }
    attempts++;
    
    

    
    
}