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