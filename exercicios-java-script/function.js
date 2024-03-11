console.log(screen.width);

function tela() {
  if (innerWidth < 300) {
    console.log('[ERROR-1] Tela muito pequena para visualizar o conteudo!');
  } else {
    window.scroll(0, innerWidth);
    console.log('Tamanho da minha janela do navegador: ')
    console.log(window.innerWidth);
  }
}

//PRECISA DE UM HTML PARA RODAR