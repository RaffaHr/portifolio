let slideIndex = 1;
exibirSlides(slideIndex);

function mudarSlide(n) {
    exibirSlides(slideIndex + n);
}

function irParaSlide(n) {
    exibirSlides(n);
}

function exibirSlides(n) {
    const slides = document.querySelectorAll('.card-work');
    const pontos = document.querySelectorAll('.ponto');

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    for (let i = 0; i < pontos.length; i++) {
        pontos[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.opacity = "1";
    pontos[slideIndex - 1].classList.add("active");
}
