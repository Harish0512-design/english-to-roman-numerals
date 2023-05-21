// input text box reference
const inputRef = document.querySelector("#numeric-value");
const buttonRef = document.querySelector("#btn-translate");
const outputRef = document.querySelector("#output-display");
const outputErrRef = document.querySelector("#output-error");

// Request URL
const reqURL = "https://api.funtranslations.com/translate/roman-numerals.json"

// translate URL
function translateURL(input) {
   return reqURL+'?text='+input
}

// handle error
function handlerServerError(err){
    console.log(err);
    outputErrRef.innerText = "Something wrong with server. Please try again 🙂"
}

// function to handle request , process and gives response
function onSubmitHandler(){
    let inputValue = inputRef.value;
    console.log(inputValue);
    fetch(translateURL(inputValue))
    .then(response=>response.json())
    .then(json=> outputRef.textContent=json.contents.translated)
    .catch(err=>handlerServerError(err));
}


buttonRef.addEventListener('click',onSubmitHandler);