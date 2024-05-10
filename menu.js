/* script do menu mobile */
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let menuMobalClick = document.getElementById('menuMobalClick')
let btnFechar = document.getElementById('btn-fechar')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menuMobalClick.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
/* end script */

/* script do botao e ação de trocar de tema */
const chkDesk = document.getElementById('chk-desk');
const chkModal = document.getElementById('chk-modal');
const body = document.getElementById('body')

function toggle() {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
    } else {
        body.classList.add('light');
    }
}
/* end script */

/* script pra API do WhatsApp */
function enviarMensagem() {
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let msg = document.getElementById('msg').value

    let buildMsg = `Olá Raphael, me chamo ${nome} e vim através do seu portifólio.
    O motivo do meu contato é: ${msg}.
    
    Meios de contato para retorno:
    Telefone: ${phone}
    E-mail: ${email}`

    // Construindo o link para a API do WhatsApp com os valores do formulário
    let linkWhatsApp = `https://api.whatsapp.com/send?phone=5527997215329&text=${encodeURIComponent(buildMsg)}`

    // Abrindo o link em uma nova aba
    window.open(linkWhatsApp, "_blank");
}
/* end script */