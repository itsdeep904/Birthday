function btnclickme() {
    var helloDiv = document.querySelector('.tarif');
    if (helloDiv.classList.contains('d-none')) {
        helloDiv.classList.remove('d-none');
    }
}
function btndbclickme() {
    var helloDiv = document.querySelector('.tarif');
    helloDiv.classList.add('d-none');
    
}
