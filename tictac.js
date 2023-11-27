document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    const resultMessage = document.getElementById('result');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!cell.textContent) {
                cell.textContent = currentPlayer;
                if (checkWinner()) {
                    showResult(`Player ${currentPlayer} wins!`);
                    resetBoard();
                } else if (isBoardFull()) {
                    showResult('It\'s a draw!');
                    resetBoard();
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });

    function checkWinner() {
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winCombos.some(combo =>
            combo.every(index => cells[index].textContent === currentPlayer)
        );
    }

    function isBoardFull() {
        return Array.from(cells).every(cell => cell.textContent);
    }

    function showResult(message) {
        resultMessage.textContent = message;
        resultMessage.style.display = 'block';
        setTimeout(() => {
            resultMessage.style.display = 'none';
        }, 2000); // Adjust the timeout duration as needed
    }

    function resetBoard() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
    }
});
