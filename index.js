function fillBoard(num) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${num} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${num} , 1fr)`;

    let amount = num * num;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", square);
    }
}

fillBoard(16);

function changeSize(input) {
    if (input < 2 || input > 100) {
        alert('Error pick size between 2 and 100');
    }
    fillBoard(input);
}