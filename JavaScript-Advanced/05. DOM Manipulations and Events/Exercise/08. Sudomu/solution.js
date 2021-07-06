function solve() {

    let buttons = document.querySelectorAll('button');
    let quickCheckButton = buttons[0];
    let clearButton = buttons[1];

    quickCheckButton.addEventListener('click', () => {
        let outputElement = document.querySelector('#check p');
        let tableElement = document.querySelector('table');

        let tableElements = Array.from(
            document.querySelectorAll('tbody tr'))
            .map(x => Array.from(x.querySelectorAll('input'))
                .map(x => Number(x.value)));

        let isDone = isValidBoard(tableElements);

        tableElement.style.border = isDone ? '2px solid green' : '2px solid red';
        outputElement.style.color=isDone? 'green':'red';
        outputElement.textContent=isDone?'You solve it! Congratulations!':'NOP! You are not done yet...';

        function isValidBoard(tableElements) {

            for (let i = 0; i < tableElements.length; i++) {

                let currentRow = createObj(tableElements);
                let currentCol = createObj(tableElements);

                for (let j = 0; j < tableElements[i].length; j++) {

                    let currRowCell = tableElements[i][j];
                    let currColCell = tableElements[j][i];

                    currentRow[currRowCell]++;
                    currentCol[currColCell]++;
                }

                let rowVals = Object.values(currentRow);
                let colVals = Object.values(currentCol);

                if (rowVals.some(x => x !== 1) || rowVals.length > tableElements.length ||
                    colVals.some(x => x !== 1) || colVals.length > tableElements.length) {
                    return false;
                }

            }

            return true;
        }

        function createObj(tableElements) {

            let obj = {};

            for (let i = 0; i < tableElements.length; i++) {
                obj[i + 1] = 0;
            }

            return obj;
        }

    });

    clearButton.addEventListener('click', () => {
        let checkParagraph = document.querySelector('#check p');
        let table = document.querySelector('#exercise table');
        let board = Array
            .from(document.querySelectorAll('#exercise tbody tr'))
            .map(row => Array.from(row.querySelectorAll('input')));
 
        checkParagraph.textContent = '';
        table.style.border = '';
        board.forEach(el => el.value = '');
    });
}