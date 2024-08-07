

// menu responsivo 

function menu() {

    let menuMobile = document.querySelector('.menu-mob');

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }

}


// modal 


document.addEventListener('DOMContentLoaded', (event) => {
    var modal0 = document.querySelector(".zero dialog")
    var modal1 = document.querySelector(".primeiro dialog");
    var modal2 = document.querySelector(".segundo dialog");
    var modal3 = document.querySelector(".terceiro dialog");
    var modal4 = document.querySelector(".quarto dialog");

    function mostrar() {
        if (modal0) {
            modal0.showModal();
        } else {
            console.error('Elemento modal0 não encontrado');
        }
    }

    function proximo0() {
        if (modal1 && modal0) {
            modal1.showModal();
            modal0.close();
        } else {
            console.error('Elemento modal1 ou modal0 não encontrado');
        }
    }

    function proximo() {
        if (modal2 && modal1) {
            modal2.showModal();
            modal1.close();
        } else {
            console.error('Elemento modal2 ou modal1 não encontrado');
        }
    }

    function proximo2() {
        if (modal3 && modal2) {
            modal3.showModal();
            modal2.close();
        } else {
            console.error('Elemento modal3 ou modal2 não encontrado');
        }
    }

    function proximo3() {
        if (modal4 && modal3) {
            modal4.showModal();
            modal3.close();
        } else {
            console.error('Elemento modal4 ou modal3 não encontrado');
        }
    }

    function fechar0() {
        if (modal1) {
            modal0.close();
        } else {
            console.error('Elemento modal0 não encontrado');
        }
    }

    function fechar1() {
        if (modal0 && modal1) {
            modal0.showModal();
            modal1.close();
        } else {
            console.error('Elemento modal1 ou modal2 não encontrado');
        }
    }

    function fechar2() {
        if (modal1 && modal2) {
            modal1.showModal();
            modal2.close();
        } else {
            console.error('Elemento modal1 ou modal2 não encontrado');
        }
    }

    function fechar3() {
        if (modal2 && modal3) {
            modal2.showModal();
            modal3.close();
        } else {
            console.error('Elemento modal2 ou modal3 não encontrado');
        }
    }

    function fechar4() {
        if (modal4) {
            modal4.close();
        } else {
            console.error('Elemento modal4 não encontrado');
        }
    }

    function teste(){
        console.log("funcionou")
    }

    // Tornando as funções globais
    window.teste = teste;
    window.mostrar = mostrar;
    window.proximo0 = proximo0;
    window.proximo = proximo;
    window.proximo2 = proximo2;
    window.proximo3 = proximo3;
    window.fechar0 = fechar0;
    window.fechar1 = fechar1;
    window.fechar2 = fechar2;
    window.fechar3 = fechar3;
    window.fechar4 = fechar4;
});