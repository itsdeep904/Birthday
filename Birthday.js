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

function showmusicsysytem(){
    var helloDiv = document.querySelector('.audiotag');
    var helloDivmusic = document.querySelector('.musicpermission');
    if (helloDiv.classList.contains('d-none')) {
        helloDiv.classList.remove('d-none');
        helloDivmusic.classList.add('d-none');
    }
}

function sureshowmusicsysytem(){
    var helloDiv = document.querySelector('.audiotag');
    var helloDivmusic = document.querySelector('.musicpermission');
    var helloDivmusicmessage = document.querySelector('.music_message');
    if (helloDiv.classList.contains('d-none')) {
        helloDiv.classList.remove('d-none');
        helloDivmusicmessage.classList.remove('d-none');
        helloDivmusic.classList.add('d-none');
    }
}

function showcakeimage(){
    var helloDiv = document.querySelector('.cake_image_div');
    var _message_cake = document.querySelector('.message_cake');
    var _message_content = document.querySelector('.message_content');
    if (helloDiv.classList.contains('d-none')) {
        helloDiv.classList.remove('d-none');
        _message_cake.classList.add('d-none');
        _message_content.classList.add('d-none');

    }
}

function showcandle(){
    var helloDiv = document.querySelector('.candle_hidden');
    var _candle_title = document.querySelector('.candle_title');
    var _candle_btn = document.querySelector('.candle_btn');
    if (!helloDiv.classList.contains('d-none')) {
        helloDiv.classList.add('d-none');
        _candle_title.classList.add('d-none');
        _candle_btn.classList.add('d-none');
        helloDiv.style.zIndex = '0';
    }
}
