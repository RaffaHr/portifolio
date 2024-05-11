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
const chkMobile = document.getElementById('chk-mobile');

/* toggle light mode */
function toggleLightMode() {
    document.body.classList.toggle('light')
}

/* Load light or dark mode */
function loadTheme() {
    const lightMode = localStorage.getItem('light')

    if (lightMode) {
        toggleLightMode()
    }
}
loadTheme()
chkDesk.addEventListener('change', function () {
toggleLightMode()

localStorage.removeItem('light')

if(document.body.classList.contains('light')) {
    localStorage.setItem('light', 1)
}
})
chkMobile.addEventListener('change', function () {
    toggleLightMode()
    
    localStorage.removeItem('light')
    
    if(document.body.classList.contains('light')) {
        localStorage.setItem('light', 1)
    }
    })
/* end script */

/* script pra API do WhatsApp */
function enviarMensagem() {
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value.trim();
    let msg = document.getElementById('msg').value

if (phone.length === 0) {
    phone = "Não informado";
}

    let buildMsg = `Olá Raphael, me chamo *${nome}* e vim através do seu portifólio.
O motivo do meu contato é: ${msg}.
    
Meios de contato para retorno:
Telefone: *${phone}*
E-mail: *${email}*`

    // Construindo o link para a API do WhatsApp com os valores do formulário
    let linkWhatsApp = `https://api.whatsapp.com/send?phone=5527997215329&text=${encodeURIComponent(buildMsg)}`

    // Abrindo o link em uma nova aba
    window.open(linkWhatsApp, "_blank");
}
/* end script */