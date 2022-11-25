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


function changeSize(input) {
    fillBoard(input);
}