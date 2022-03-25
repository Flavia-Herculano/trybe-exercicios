
function bloquearSubmissão(event){
event.preventDefault();
}

window.onload = function () {
    const buttonEnviar = document.getElementById('#button'); 
    buttonEnviar.addEventListener('click', bloquearSubmissão);
};