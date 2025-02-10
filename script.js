const grid = document.getElementById('grid');
const result = document.getElementById('result');
const restartButton = document.getElementById('restartButton');
let mines = [];

// Function to generate random mines
function generateMines() {
    mines = [];
    while (mines.length < 5) { // 5 mines generate karein
        const randomBlock = Math.floor(Math.random() * 24) + 1;
        if (!mines.includes(randomBlock)) {
            mines.push(randomBlock);
        }
    }
}

// Function to create the grid
function createGrid() {
    grid.innerHTML = '';
    for (let i = 1; i <= 24; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.dataset.id = i;
        block.addEventListener('click', revealBlock);
        grid.appendChild(block);
    }
}

// Function to reveal the block
function revealBlock(event) {
    const block = event.target;
    const blockId = parseInt(block.dataset.id);

    if (mines.includes(blockId)) {
        block.classList.add('revealed');
        block.textContent = '💣';
        result.textContent = 'Mine hai! Game Over!';
        disableGrid();
    } else {
        block.classList.add('revealed');
        block.textContent = '✅';
        result.textContent = 'Safe hai!';
    }
}

// Function to disable the grid after game over
function disableGrid() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.removeEventListener('click', revealBlock);
    });
}

// Function to restart the game
function restartGame() {
    generateMines();
    createGrid();
    result.textContent = '';
}

// Initialize the game
generateMines();
createGrid();

// Restart button event listener
restartButton.addEventListener('click', restartGame);
