function alertRedirect(event) {
     boutons = event.target;
let ecran = document.querySelector(".ecran");
let egal = document.querySelector(".egal");
let ac = document.querySelector(".ac")
    if (boutons != egal) {
        ecran.textContent += boutons.textContent;
    }
    else {
     let calcul = eval(ecran.textContent);
     ecran.textContent = calcul
        }
    if (boutons != ac) {
       ecran.textcontent = boutons.textContent;
    }
    else {
        ecran.textContent = "";
    }
}
let touches = document.querySelector(".touches");
touches.addEventListener("click", alertRedirect);






















