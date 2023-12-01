cont = 0;

function Carrosel() {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function ZoomSize() {
    cont++;
    var tags = ["p", "a", "h1", "h2", "h3", "h4", "h5", "h6"];
    var elementos = [];
    
    tags.forEach(function(tag) {
        var elementosDaTag = document.getElementsByTagName(tag);
        elementos = elementos.concat(Array.from(elementosDaTag));
    });

    if(cont < 2) {
        elementos.forEach(function (elemento) {
            var tamanhoAtual = parseFloat(window.getComputedStyle(elemento).fontSize);
            var novoTamanho = tamanhoAtual + 5 + "px";
            elemento.style.fontSize = novoTamanho; 
        });
    } else {
        elementos.forEach(function (elemento) {
            var tamanhoAtual = parseFloat(window.getComputedStyle(elemento).fontSize);
            var novoTamanho = tamanhoAtual - 5 + "px";
            elemento.style.fontSize = novoTamanho; 
        });
        cont = 0;
    }
}

(function () {
    var Contrast = {
        storage: 'contrastState',
        cssClass: 'contrast',
        currentState: null,
        check: checkContrast,
        getState: getContrastState,
        setState: setContrastState,
        toogle: toogleContrast,
        updateView: updateViewContrast
    };

    window.toggleContrast = function () { Contrast.toogle(); };

    Contrast.check();

    function checkContrast() {
        this.updateView();
    }

    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast() {
        var body = document.body;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
        this.setState(!this.currentState);
    }
})();

function Comprar(elementoClicado) {
    var caminhoImagem = elementoClicado.querySelector(".camisa img").getAttribute("src");
    var tituloProduto = elementoClicado.querySelector(".titulo-camisa p").innerText;
    var precoProduto = elementoClicado.querySelector(".preco h6").innerText;
    var nomeTime = pegarQuartaPalavra(tituloProduto);

    localStorage.setItem("caminhoImagem", caminhoImagem);
    localStorage.setItem("tituloProduto", tituloProduto);
    localStorage.setItem("precoProduto", precoProduto);
    localStorage.setItem("nomeTime", nomeTime);
    window.location.href = "product.html";
}

function ComprarDesconto(elementoClicado) {
    var caminhoImagem = elementoClicado.querySelector(".camisa img").getAttribute("src");
    var tituloProduto = elementoClicado.querySelector(".camisa p").innerText;
    var precoProduto = elementoClicado.querySelector(".desconto-preco h4").innerText;

    localStorage.setItem("caminhoImagem", caminhoImagem);
    localStorage.setItem("tituloProduto", tituloProduto);
    localStorage.setItem("precoProduto", precoProduto);
    window.location.href = "product.html";
}

function ObterParametroDaURL(nomeParametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nomeParametro);
}

function PaginaPalmeiras() {
    window.location.href = "palmeiras.html";
}

function PaginaCorinthians() {
    window.location.href = "corinthians.html";
}

function PaginaSaoPaulo() {
    window.location.href = "saopaulo.html";
}

function pegarQuartaPalavra(frase) {
    const fraseLimpa = frase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

    const palavras = fraseLimpa.split(/\s+/);
  
    if (palavras.length >= 4) {
        return palavras[3];
    }
}