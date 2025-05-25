document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    // Listener para o botão hambúrguer
    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active'); // Adiciona/remove a classe 'active'
        hamburgerMenu.classList.toggle('active'); // Adiciona/remove a classe 'active' para a animação do X
        document.body.classList.toggle('no-scroll'); // Opcional: Para desabilitar o scroll do body quando o menu está aberto
    });

    // Se você tiver o código de carregamento de jogos, ele pode vir aqui abaixo:
    // const gameLinks = document.querySelectorAll('.game-list nav a[data-game-id]');
    // ... (restante do seu código JavaScript para os jogos)
});

// Opcional: Adicione esta regra CSS ao seu style.css para o no-scroll do body
/*
body.no-scroll {
    overflow: hidden;
}
*/