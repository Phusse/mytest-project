let reg = document.getElementById("input")
let error = document.getElementById("error")
let submit = document.getElementById("submit")
let secError = document.getElementById("error2")
let valid = document.getElementById("valid")
submit.addEventListener("click", showError)

function showError(){
    event.preventDefault()
    if (reg.value == "") {
        error.style.display = "block"
        secError.style.display = "none"
        valid.style.display = "none"
    }
    else if(reg.value[0] != "R") {
        secError.style.display = "block"
        error.style.display = "none"
        valid.style.display = "none"

    }else{
        valid.style.display = "block"
        error.style.display = "none"
        secError.style.display = "none"
        reg.value = ""
    }
}