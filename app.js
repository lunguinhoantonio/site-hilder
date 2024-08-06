function switchTheme() {
    const body = document.querySelector('body')
    body.classList.toggle('light')

    const pfp = document.querySelector('.top-image img');
    if(body.classList.contains('light')){
        pfp.setAttribute('src', './assets/pfp-hilder-matos-light.png');
    } else {
        pfp.setAttribute('src', './assets/pfp-hilder-matos.png');
    }
}

function backTop() {
    button.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
    });
}
