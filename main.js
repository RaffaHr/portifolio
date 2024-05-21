/* script do menu mobile */
let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");
let menuMobalClick = document.getElementById("menuMobalClick");
let btnFechar = document.getElementById("btn-fechar");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menuMobalClick.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

btnFechar.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
/* end script */

/* script do botao e ação de trocar de tema */

const chkDesk = document.getElementById("chk-desk");
const chkMobile = document.getElementById("chk-mobile");

/* toggle light mode */
function toggleLightMode() {
  document.body.classList.toggle("light");
}

/* Load light or dark mode */
function loadTheme() {
  const lightMode = localStorage.getItem("light");

  if (lightMode) {
    toggleLightMode();
  }
}
loadTheme();
chkDesk.addEventListener("change", function () {
  toggleLightMode();

  localStorage.removeItem("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("light", 1);
  }
});
chkMobile.addEventListener("change", function () {
  toggleLightMode();

  localStorage.removeItem("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("light", 1);
  }
});
/* script que deixa o input de thema ativo ou desativado de acordo com o tema atual selecionado pelo usuário */
/* DESKTOP */
document.addEventListener("DOMContentLoaded", function () {
  // Verifica se o body contém a classe 'light' ao carregar a página
  if (document.body.classList.contains("light")) {
    // Se contiver, marque o checkbox
    chkDesk.checked = true;
  } else {
    // Caso contrário, desmarque o checkbox
    chkDesk.checked = false;
  }

  // Adiciona um ouvinte de eventos ao body para verificar mudanças na classe 'light'
  document.body.addEventListener("change", function () {
    if (document.body.classList.contains("light")) {
      chkDesk.checked = true;
    } else {
      chkDesk.checked = false;
    }
  });
});
/* MOBILE */

// Verifica se o body contém a classe 'light' ao carregar a página
if (document.body.classList.contains("light")) {
  // Se contiver, marque o checkbox
  chkMobile.checked = true;
} else {
  // Caso contrário, desmarque o checkbox
  chkMobile.checked = false;
}

// Adiciona um ouvinte de eventos ao body para verificar mudanças na classe 'light'
document.body.addEventListener("change", function () {
  if (document.body.classList.contains("light")) {
    chkMobile.checked = true;
  } else {
    chkMobile.checked = false;
  }
});
/* end script */

/* script pra API do WhatsApp */
function enviarMensagem() {
  let nome = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value.trim();
  let msg = document.getElementById("msg").value;

  if (phone.length === 0) {
    phone = "Não informado";
  }
  if(email.length === 0) {
    email = "Não informado"
  }
  if(nome.length === 0 || msg.length === 0) {
    alert('Gentileza inserir o nome e a mensagem!')
    return
  } else {
    let buildMsg = `Olá Raphael, me chamo *${nome}* e vim através do seu portifólio.
    O motivo do meu contato é: ${msg}.
        
    Meios de contato para retorno:
    Telefone: *${phone}*
    E-mail: *${email}*`;
    
      // Construindo o link para a API do WhatsApp com os valores do formulário
      let linkWhatsApp = `https://api.whatsapp.com/send?phone=5527997215329&text=${encodeURIComponent(
        buildMsg
      )}`;
    
      // Abrindo o link em uma nova aba
      window.open(linkWhatsApp, "_blank");
    }
  }
/* end script */

/* script Typing Text Animation */

const text = document.querySelector('.sec-text')

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Desenvolvedor Full Stack"
  }, 0);
  setTimeout(() => {
    text.textContent = "Analista"
  }, 5050);
  setTimeout(() => {
    text.textContent = "Estudante"
  }, 10050);
}
textLoad()
setInterval(textLoad, 15000)
/* end script */