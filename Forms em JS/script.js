const name = document.querySelector("#name");
const password = document.querySelector("#password");
const form = document.querySelector("form");

form.addEventListener("submit", (e) =>  {
    let enviarform = true;


    if(nome.value) {
        console.log("O nome está vazio");
        enviarform = false;
    
    if (senha.value) {
        console.log("A senha está vazia");
        enviarform = false;
    }

    }

    if (enviarform) {
        e.preventDefault();   
    } 
})