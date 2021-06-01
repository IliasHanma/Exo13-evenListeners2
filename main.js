// ### 1. Récupère le h1 dans une variable 
let myH1 = document.querySelector('h1');

// ### 2. Créer un programme qui met le texte du h1 en bleu
// myH1.style.color = "blue";
// ### 3. Met ce programme dans une function
function myFunction(myH1) {
    myH1.style.color = "blue";
    return;
}
// ### 4. Appelle cette function pour qu'elle soit executé 
myFunction(myH1);
// ### 5. Met un écouteur d'événement sur le h1, qui au clique lance la function
myH1.addEventListener("click", ()=>{
    myFunction(myH1);
})