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
    var _cakecut_title = document.querySelector('.cakecut_title');
    var _cutcake_btn = document.querySelector('.cutcake_btn');
    if (!helloDiv.classList.contains('d-none')) {
        helloDiv.classList.add('d-none');
        _candle_title.classList.add('d-none');
        _candle_btn.classList.add('d-none');
        _candle_btn.classList.add('d-none');
        _cakecut_title.classList.remove('d-none');
        _cutcake_btn.classList.remove('d-none');
        helloDiv.style.zIndex = '0';
    }
}


function cakecut() {
    var helloDiv = document.querySelector('.cut_cake');
    var _cutcake_btn = document.querySelector('.cutcake_btn');
    var _cakecut_title = document.querySelector('.cakecut_title');
    var _Wishh4 = document.querySelector('.Wishh4');
    if (helloDiv.classList.contains('d-none')) {
        helloDiv.classList.remove('d-none');
        _cutcake_btn.classList.add('d-none');
        _cakecut_title.classList.add('d-none');
        _Wishh4.classList.remove('d-none');
    }
}