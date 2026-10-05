JokenPô — Pedra, Papel e Tesoura

Um jogo de Pedra, Papel e Tesoura (Jokenpô) contra a máquina, com placar de pontuação, design moderno com efeito glassmorphism e interface totalmente interativa.

Mostrar Imagem

✨ Funcionalidades
Três opções de jogada: Pedra 👊, Papel 🖐️, Tesoura ✌️
Oponente automático (Alexa): a máquina escolhe uma jogada aleatória a cada rodada
Lógica completa de vitória/derrota/empate, usando as regras clássicas do jogo
Placar em tempo real, mostrando a pontuação do jogador e da máquina separadamente
Mensagem de resultado dinâmica a cada rodada ("Você ganhou!", "Você perdeu!", "Empate!")
Visual moderno com fundo em gradiente e cartão com efeito vidro (glassmorphism)
Botões animados, com efeito de elevação e escala ao passar o mouse
🛠️ Tecnologias utilizadas
HTML5
CSS3 (glassmorphism, transições e animações)
JavaScript (lógica de jogo, manipulação do DOM)
🚀 Como executar
Clone o repositório:
bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
Entre na pasta do projeto:
bash
   cd seu-repositorio
Abra o index.html no navegador, ou rode com uma extensão de live server (ex: Live Server no VS Code).
📂 Estrutura do projeto
├── index.html
├── styles.css
└── script.js
⚙️ Como funciona
O jogador clica em um dos três botões (Pedra, Papel ou Tesoura).
A função playHuman() dispara o jogo, chamando playAlexa(), que sorteia a jogada da máquina.
A função playTheGame() compara as duas jogadas e define o resultado, atualizando o placar e a mensagem na tela.
As opções de jogo são centralizadas no objeto GAME_OPTIONS, evitando erros de digitação nas comparações.
📸 Preview

Adicione aqui um print real do seu projeto pra quem visitar o repositório ver sem precisar rodar o código.

📄 Licença

Este projeto é open source, disponível sob a licença MIT.
