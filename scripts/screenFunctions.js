function change_color(el) {
    
    el.style.color = "#FFA500";
}

function showContactInfo() {
    document.querySelector('#contactInfo').style.marginRight = 0;
}

function hideContactInfo() {
    document.querySelector('#contactInfo').style.marginRight = "-100%";
}

function color(elm) {

    var color = Math.floor(Math.random()*16).toString(16);

    var randomColor = '#'+color+color+color;

    elm.style.backgroundColor = randomColor;

}