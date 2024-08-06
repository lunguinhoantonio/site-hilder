function switchTheme() {
    const body = document.querySelector('body')
    body.classList.toggle('light')

    const pfp = document.querySelector('.top-image img');
    const meiaLuaStudios = document.querySelector('.meia-lua-studio-img');
    const matosEntertainment = document.querySelector('.matos-entertainment-img');

    if(body.classList.contains('light')){
        pfp.setAttribute('src', './assets/pfp-hilder-matos-light.png');
        meiaLuaStudios.setAttribute('src', './assets/meia-lua-studios-light.png');
        matosEntertainment.setAttribute('src', './assets/matos-entertainment-light.png');
    } else {
        pfp.setAttribute('src', './assets/pfp-hilder-matos.png');
        meiaLuaStudios.setAttribute('src', './assets/meia-lua-studios.png');
        matosEntertainment.setAttribute('src', './assets/matos-entertainment.png');
    }

}

function backTop() {
    button.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
    });
}
