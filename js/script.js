(function() {

window.addEventListener('load', _ => {

    let burger = document.querySelector('.header .burger'),
        nav = document.querySelector('.header .nav');

        if (burger && nav) burger.addEventListener('click', _ => { nav.classList.toggle('active'); });

});

}());