
const textInput = document.querySelector("#textInput");
const count = document.querySelector("#count");
const maxSymbol = document.querySelector("#maxSymbol");

textInput.maxLength = "10";
count.textContent = "0";
maxSymbol.innerText = "10";
let limit = 10;

function counter() {
    const currentLength = textInput.value.length;
    count.textContent = currentLength;

    const left = limit - currentLength;
    maxSymbol.innerText = left;

}

textInput.addEventListener("input", counter);




