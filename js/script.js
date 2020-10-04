var slider, botaod, botaoe, imgAtual = 0, proxImg = 0, marc = [], cont = 0, anima, titulo;
carregaSlide = () => {
    slider.style.backgroundImage = `url(images/slider${proxImg}.jpg)`;
    marc[imgAtual].style.backgroundColor = "rgba(0,0,0,0.1)";
    marc[proxImg].style.backgroundColor = "white";
    cont = 0;
    proxImg = parseInt(proxImg, 10);
    switch (proxImg) {
        case 0:
            titulo.innerHTML = `<h2>ATUAMOS NAS MAIS DIVERSAS ÁREAS JURÍDICAS</h2>`;
            break;
        case 1:
            titulo.innerHTML = `<h2>COMPROMETIMENTO COM O CLIENTE
            DE FORMA ÉTICA E RESPONSÁVEL</h2>`;
            break;
        case 2:
            titulo.innerHTML = `<h2>ESCRITÓRIO DE ADVOCACIA,
            CONSULTORIA JURÍDICA E GESTÃO DE CRISES</h2>`;
            break;
        case 3:
            titulo.innerHTML = `
            <h2>AGENDE UMA VISITA!</h2><button title="Clique para saber mais">Saiba mais</button>`;
            break;
    }
    imgAtual = proxImg;
}
mudaSlide = (dir) => {
    dir == "d" ? proxImg++ : proxImg--;
    if (proxImg > 3) proxImg = 0;
    else if (proxImg < 0) proxImg = 3;
    carregaSlide();
}
mudaSlidemarc = (img) => {
    proxImg = img;
    carregaSlide();
}
tempoTroca = () => {
    cont++;
    if (cont > 700) {
        mudaSlide("d");
        cont = 0;
    }
    barra.style.width = `${cont / 7}%`;
    anima = requestAnimationFrame(tempoTroca);
}
inicia = () => {
    titulo = document.querySelector("header .overlay .titulo");
    barra = document.querySelector(".barra");
    overlay = document.querySelector(".overlay");
    overlay.addEventListener("mouseover", () => {
        window.cancelAnimationFrame(anima);
    });
    overlay.addEventListener("mouseout", tempoTroca);
    slider = document.querySelector("header");
    botaod = document.querySelector(".direita");
    botaoe = document.querySelector(".esquerda");
    botaod.addEventListener("click", () => {
        mudaSlide("d");
    });
    botaoe.addEventListener("click", () => {
        mudaSlide("e");
    });
    marc = document.querySelectorAll(".marc");
    for (var i = 0; i < 4; i++) {
        marc[i].addEventListener("click", () => {
            var marcador = event.target.id;
            mudaSlidemarc(marcador);
        });
    }
    carregaSlide();
    tempoTroca();
}
window.addEventListener("load", inicia);