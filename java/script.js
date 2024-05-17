
let weight= document.querySelector("[name='Weight']")
let Height= document.querySelector("[name='Height']")
let calculate= document.querySelector("[data-calculate]")
let calcbtn= document.querySelector("#calcbtn")


function results() {
   let BMI= weight.value / ( (Height.value/100) ** 2)
    calculate.value=BMI

}

calcbtn.addEventListener("click", results)