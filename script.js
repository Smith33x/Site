document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // **ÍNDICE DE CONTEÚDO DO SITE (MUITO EXPANDIDO)**
    // ESTA É A LISTA QUE VOCÊ DEVERÁ EXPANDIR E MANTER ATUALIZADA!
    // Cada objeto representa um item pesquisável no seu site.
    // - title: O nome "oficial" ou display do item.
    // - url: O caminho para a página ou seção onde o item está.
    //        USE #id-da-secao para ir direto a um ponto na página.
    // - keywords: Palavras-chave, sinônimos, termos de busca comuns (tudo em minúsculas).
    const siteContentIndex = [
        // --- CATEGORIAS PRINCIPAIS (da Home) ---
        { title: 'Jogos', url: 'Arquivos/Jogos/Jogos.index.html', keywords: 'jogos, games, game, jogar, baixar jogos, entretenimento, videogame' },
        { title: 'Emuladores para Xbox Séries', url: 'Arquivos/Arquivos/Emuladores.index.html', keywords: 'emuladores, xbox, series, emular, console, simuladores, retro' },
        { title: 'Programas', url: 'Arquivos/Programas/index.html', keywords: 'programas, software, ferramentas, apps, baixar programas, utilitários, pc, computador' },
        { title: 'Músicas', url: 'Arquivos/music/index.html', keywords: 'musicas, music, canções, trilhas, audio, download, playlist, som, artistas' },
        { title: 'Redes Sociais', url: 'Links/index.html', keywords: 'redes sociais, social, contato, links, perfil, seguir, comunicação' },
        { title: 'Sobre Mim', url: 'Links/sobre.html', keywords: 'sobre mim, smith33, contato, quem sou, informações, perfil, história' },

        // --- CONTEÚDO ESPECÍFICO DE PROGRAMAS (Arquivos/Programas/index.html) ---
        // Lembre-se de adicionar id="nome-da-secao" no HTML de Arquivos/Programas/index.html
        { title: 'Ocam', url: 'Arquivos/Programas/index.html#ocam-section', keywords: 'ocam, gravador, tela, video, captura, screen recorder, gravar, software, programa' },
        { title: 'OBS Studio', url: 'Arquivos/Programas/index.html#obs-section', keywords: 'obs, obs studio, streaming, gravar, ao vivo, live, broadcast, programa, software' },
        { title: 'Wondershare Filmora', url: 'Arquivos/Programas/index.html#filmora-section', keywords: 'filmora, editor, video, edicao, wondershare, software, programa, filme' },
        { title: 'VLC Media Player', url: 'Arquivos/Programas/index.html#vlc-section', keywords: 'vlc, player, media player, reprodutor, video, audio, programa, mp3, mp4, filmes' },
        { title: 'APKs de Celular', url: 'Arquivos/Programas/APK/index.html', keywords: 'apks, android, celular, aplicativos, mobile, download apk, smartphone, app' },
        { title: '7-Zip', url: 'Arquivos/Programas/index.html#7zip-section', keywords: '7zip, winzip, winrar, compactador, descompactar, zip, rar, arquivo' },
        { title: 'Discord', url: 'Arquivos/Programas/index.html#discord-section', keywords: 'discord, comunicação, chat, voz, call, gamer' },
        // ... adicione mais programas aqui
        
        // --- CONTEÚDO ESPECÍFICO DE JOGOS (Arquivos/Jogos/Jogos.index.html) ---
        // Lembre-se de adicionar id="nome-da-secao" no HTML de Arquivos/Jogos/Jogos.index.html
        { title: 'God of War', url: 'Arquivos/Jogos/Jogos.index.html#godofwar-section', keywords: 'god of war, gow, kratos, atreus, ps4, ps5, aventura, ação, jogo, mitologia' },
        { title: 'The Witcher 3: Wild Hunt', url: 'Arquivos/Jogos/Jogos.index.html#witcher3-section', keywords: 'the witcher, witcher 3, geralt, ciri, rpg, mundo aberto, wild hunt, jogo, fantasia' },
        { title: 'Cyberpunk 2077', url: 'Arquivos/Jogos/Jogos.index.html#cyberpunk2077-section', keywords: 'cyberpunk, 2077, night city, keanu reeves, rpg, futurista, jogo, ficção científica' },
        { title: 'Minecraft', url: 'Arquivos/Jogos/Jogos.index.html#minecraft-section', keywords: 'minecraft, mine, craft, blocos, construção, sobrevivencia, sandbox, jogo' },
        { title: 'Valorant', url: 'Arquivos/Jogos/Jogos.index.html#valorant-section', keywords: 'valorant, fps, tiro, tatico, online, riot, jogo' },
        // ... adicione mais jogos aqui
        
        // --- CONTEÚDO ESPECÍFICO DE MÚSICAS (Arquivos/music/index.html) ---
        // Lembre-se de adicionar id="nome-da-secao" no HTML de Arquivos/music/index.html
        { title: 'Pop Internacional', url: 'Arquivos/music/index.html#pop-internacional-section', keywords: 'pop, internacional, musica, hits, dance, playlist' },
        { title: 'Rock Nacional', url: 'Arquivos/music/index.html#rock-nacional-section', keywords: 'rock, nacional, brasil, musica, classico, banda' },
        { title: 'Trilha Sonora de Filmes', url: 'Arquivos/music/index.html#trilha-filmes-section', keywords: 'trilha sonora, filmes, cinema, ost, soundtrack, musica, epica' },
        { title: 'Artista Famoso (Exemplo)', url: 'Arquivos/music/index.html#artista-exemplo-section', keywords: 'artista famoso, musica, pop, rock, cantor, banda' },
        // ... adicione mais categorias ou músicas/artistas específicos aqui
    ];

    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim(); // Pega o valor, minúsculas e remove espaços

        if (!query) {
            alert('Por favor, digite algo para pesquisar.');
            return;
        }

        let bestMatch = null;
        let highestScore = 0;

        for (const item of siteContentIndex) {
            const itemKeywords = item.keywords.toLowerCase();
            const itemTitle = item.title.toLowerCase();

            let score = 0;

            // Prioridade alta para correspondência exata ou quase exata no título
            if (itemTitle === query) { // Correspondência exata no título
                score = 200; // Pontuação muito alta para exatidão
            } else if (itemTitle.includes(query)) { // Termo está contido no título
                score = 150;
            } else if (itemTitle.startsWith(query)) { // Título começa com o termo
                score += 50; // Bônus significativo
            }

            // Prioridade média para correspondência nas palavras-chave
            if (itemKeywords.includes(query)) { // Termo está contido nas palavras-chave
                score = Math.max(score, 100); // Garante pelo menos 100, mas não reduz se já for maior
            }

            // Bônus para termos que iniciam com a busca nas keywords também
            if (itemKeywords.startsWith(query)) {
                score += 30;
            }

            // Bônus para termos curtos (3-5 caracteres) que são bons matches
            if (query.length >= 3 && query.length <= 5 && (itemTitle.includes(query) || itemKeywords.includes(query))) {
                score += 20;
            }

            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }
        }

        if (bestMatch) {
            window.location.href = bestMatch.url;
        } else {
            alert(`Nenhum resultado encontrado para "${searchInput.value}". Tente termos diferentes.`);
            // Opcional: redirecionar para uma página de "nenhum resultado" personalizada
            // window.location.href = 'Links/no-results.html';
        }
    };

    // Adiciona evento ao botão de pesquisa
    searchButton.addEventListener('click', performSearch);

    // Adiciona evento para pesquisar ao pressionar Enter no input
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});