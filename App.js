let addressCase = document.querySelector("#address");

let fullNameCase = document.querySelector("#full-name");

let emailCase = document.getElementById("email");

let phoneCase = document.getElementById("phone");

let cityCase = document.getElementById("city");

let countryCase = document.getElementById("country");



addressCase.addEventListener("click", ()=> {

    fullNameCase.value = fullNameCase.value.toUpperCase();
});

phoneCase.addEventListener("click", ()=>{
    emailCase.value = emailCase.value.toUpperCase();

});

cityCase.addEventListener("click", ()=> {

    addressCase.value = addressCase.value.toUpperCase();
});

countryCase.addEventListener("click", ()=> {

    cityCase.value = cityCase.value.toUpperCase();
});

let button1 = document.querySelector("#button--1");

let button2 = document.querySelector("#button--2");

let product1 = document.querySelector("#product--1");

let button3 = document.querySelector("#button--3");

let button4 = document.querySelector("#button--4");

let product2 = document.querySelector("#product--2");

button2.addEventListener("click", ()=> {

    if (product1.innerText == 10) {
        product1.innerText = 10;

    } else {
        product1.innerText = parseInt(product1.innerText) + 1

    }

});

button1.addEventListener("click", ()=> {

    if (product1.innerText == 0) {
        product1.innerText = 0;

    } else {
        product1.innerText = parseInt(product1.innerText) - 1

    }


    
});

button4.addEventListener("click", ()=> {

    if (product2.innerText == 10) {
        product2.innerText = 10;

    } else {
        product2.innerText = parseInt(product2.innerText) + 1

    }

});

button3.addEventListener("click", ()=> {

    if (product2.innerText == 0) {
        product2.innerText = 0;

    } else {
        product2.innerText = parseInt(product2.innerText) - 1

    }


    
});
