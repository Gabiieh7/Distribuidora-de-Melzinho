
// ---composition---

const btnVoltar = document.querySelector('.back');
const btnAvancar = document.querySelector('.advance');
const iten = document.querySelectorAll('.iten');
let itenAtual = 0;

btnAvancar.addEventListener('click', function () {
    itenAtual++;
    if (itenAtual >= iten.length) {
        itenAtual = 0
    }
    const itenSelect = document.querySelector('.select');
    itenSelect.classList.remove('select');

    iten[itenAtual].classList.add('select');
})

btnVoltar.addEventListener('click', function () {
    if (itenAtual === 0) {
        itenAtual = iten.length
    }
    itenAtual--;
    const itenSelect = document.querySelector('.select');
    itenSelect.classList.remove('select');

    iten[itenAtual].classList.add('select');
})

// ---imgsBuy---

const imgs = document.querySelectorAll('.img');
const btnBackBuy = document.querySelector('.back-buy');
const btnAdvanceBuy = document.querySelector('.advance-buy');
let imgAtual = 0;

btnAdvanceBuy.addEventListener('click', () => {
    imgAtual++;
    if (imgAtual >= imgs.length) {
        imgAtual = 0
    }
    imgSelecionada = document.querySelector('.selecionado');
    imgSelecionada.classList.remove('selecionado');

    imgs[imgAtual].classList.add('selecionado');
})

btnBackBuy.addEventListener('click', () => {
    if (imgAtual === 0) {
        imgAtual = imgs.length
    }
    imgAtual--;
    imgSelecionada = document.querySelector('.selecionado');
    imgSelecionada.classList.remove('selecionado');

    imgs[imgAtual].classList.add('selecionado');
})

// ---faq---

const itensFaq = document.querySelectorAll('.item-faq');
const vejaMais = document.querySelectorAll('.see-more');

itensFaq.forEach((item, indice) => {
    item.addEventListener('click', () => {
        const responseSelect = document.querySelector('.response.selecionada'); //pego os elementos de response
        const seeMoreActive = document.querySelector('.see-more.ativo'); //pego os elementos de see-more ativos

        item.lastElementChild.classList.toggle('selecionada'); //adiciono o selecionada
        vejaMais[indice].classList.toggle('ativo'); //adiciono o ativo

        responseSelect?.classList.remove('selecionada') //removo
        seeMoreActive?.classList.remove('ativo') //removo
    })
})

// ---amont---

const more = document.querySelector('.more');
const less = document.querySelector('.less');
const inputAmount = document.querySelector("input[name='amount']");

more.addEventListener('click', () => {
    inputAmount.value++;
})
less.addEventListener('click', () => {
    if (inputAmount.value <= 1) {
        return
    }
    inputAmount.value--;
})

// ---modal---

const btnBuy = document.querySelector('.btn-buy');
const btnSend = document.querySelector('.btn-send');
const radio = document.querySelectorAll(".genero");

btnBuy.addEventListener('click', () => {
    if (radio[0].checked === false && radio[1].checked === false) {
        alert('Você precisa marcar qual dos dois tipos do produto deseja! FEMININO ou MASCULINO ');
    } else {
        const modal = document.querySelector('.modal');
        const closeModal = document.querySelector('.close-modal');

        modal.classList.add('selecionado');
        closeModal.addEventListener('click', () => {
            modal.classList.remove('selecionado');
            btnSend.firstElementChild.href = ''
        })
    }

})

// ---buy---

const inputs = document.querySelectorAll('.input');
const selectAmount = document.querySelector("select[name='amount']");

function conferirCampos() {
    inputs.forEach((input) => {
        if (input.value == '') {
            input.style.border = '2px solid red';
            return
        } else if (inputs[0].value != '' && inputs[1].value != '') {
            if (inputs[2].value != '' && inputs[3].value != '') {
                if (inputs[4].value != '' && inputs[5].value != '') {
                    input.style.border = '2px solid black';
                    radio.forEach((item) => {
                        input.style.border = '2px solid black';
                        if (item.checked) {
                            btnSend.firstElementChild.href = `https://wa.me/553299087506?text=Olá,%20meu%20nome%20é%20${inputs[0].value}%20!%0aGostaria%20de%20${inputAmount.value}%20${selectAmount.value}%20de%20mel%20${item.value}.%0a%0aEndereço%20para%20entrega:%0a%0aEstado:%20${inputs[1].value}%0aCidade:%20${inputs[2].value}%0aBairro:%20${inputs[3].value}%0aRua:%20${inputs[4].value}%0aCep:%20${inputs[5].value}%20`;
                        }
                    })
                } else {
                    input.style.border = '2px solid black';
                }
            } else {
                input.style.border = '2px solid black';
            }
        } else {
            input.style.border = '2px solid black';
        }
    })
}
