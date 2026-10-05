JokenPô — Rock, Paper and Scissors

A Rock, Paper, Scissors (Jokenpô) game against the computer, featuring a live scoreboard, a modern glassmorphism design, and a fully interactive interface.

Mostrar Imagem

✨ Features
Three move options: Rock 👊, Paper 🖐️, Scissors ✌️
Automatic opponent (Alexa): the computer picks a random move each round
Full win/loss/draw logic, following the classic rules of the game
Real-time scoreboard, tracking player and computer scores separately
Dynamic result message after each round ("You won!", "You lost!", "Draw!")
Modern visual style with a gradient background and a glassmorphism card
Animated buttons, with a lift and scale effect on hover
🛠️ Built With
HTML5
CSS3 (glassmorphism, transitions and animations)
JavaScript (game logic, DOM manipulation)
🚀 Getting Started
Clone the repository:
bash
   git clone https://github.com/your-username/your-repo-name.git
Open the project folder:
bash
   cd your-repo-name
Open index.html in your browser, or run it with a live server extension (e.g. Live Server in VS Code).
📂 Project Structure
├── index.html
├── styles.css
└── script.js
⚙️ How It Works
The player clicks one of the three buttons (Rock, Paper, or Scissors).
The playHuman() function triggers the round, calling playAlexa(), which randomly picks the computer's move.
The playTheGame() function compares both moves, determines the outcome, and updates the scoreboard and result message.
Game options are centralized in the GAME_OPTIONS object, avoiding typos in comparisons.
📸 Preview

Add a real screenshot of your project here so visitors can see it without running the code.

📄 License

This project is open source and available under the MIT License.
