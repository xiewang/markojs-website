'use strict';

var EventEmitter = require('events');

function getRandomInt(max) {
    var min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

class TicTacToe extends EventEmitter {
    constructor(state) {
        super();
        if (state) {
            this.state = state;
        } else {
            this.newGame();
        }
    }

    newGame() {
        this.state = {
            currentPlayer: 'X',
            moveCount: 0,
            winningPlayer: null,
            gameOver: false,
            board: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ]
        };

        this.emit('change');
    }

    makeMove(player, row, col) {
        var currentPlayer = this.state.currentPlayer;

        if (this.isGameOver) {
            // Don't allow any moves if the game is over
            return false;
        }

        if (currentPlayer !== player) {
            // Don't allow the wrong player to make a move
            return false;
        }

        if (this.board[row][col] != null) {
            // Don't allow the move if the cell is already occupied
            return false;
        }

        this.board[row][col] = currentPlayer;

        var isWinner = this.checkWinner();

        this.state.moveCount++;

        if (isWinner) {
            this.state.winningPlayer = currentPlayer;
            this.state.gameOver = true;
        } else if (this.state.moveCount === 9) {
            this.state.gameOver = true;
        }

        this.state.currentPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';

        this.emit('change');

        return true;
    }

    computerMakeMove(player) {
        var emptyCells = [];

        for (var row=0; row<3; row++) {
            for (var col=0; col<3; col++) {
                var cell = this.board[row][col];
                if (!cell) {
                    emptyCells.push({row,col});
                }
            }
        }

        var choice = emptyCells[getRandomInt(emptyCells.length)];
        this.makeMove(player, choice.row, choice.col);
    }

    checkLine(row, col, rowDelta, colDelta) {
        var player = this.currentPlayer;
        let board = this.board;

        for(let i=0; i<3; i++) {
            if (board[row][col] !== player) {
                return false;
            }
            col += colDelta;
            row += rowDelta;
        }

        return true;
    }

    checkWinner() {
        // Check the rows
        for (var row=0; row<3; row++) {
            if (this.checkLine(row, 0, 0, 1)) {
                return true;
            }
        }

        // Check the columns
        for (var col=0; col<3; col++) {
            if (this.checkLine(0, col, 1, 0)) {
                return true;
            }
        }

        return this.checkLine(0, 0, 1, 1) || // Check the diagonal
               this.checkLine(0, 2, 1, -1); // Check the anti diagonal
    }

    get board() {
        return this.state.board;
    }

    get isGameOver() {
        return this.state.gameOver === true;
    }

    get winningPlayer() {
        return this.state.winningPlayer;
    }

    get currentPlayer() {
        return this.state.currentPlayer;
    }

    toString() {
        var lines = [];
        this.board.forEach((row) => {
            lines.push(row.map((player) => {
                return player ? player : ' ';
            }).join(' | '));
        });

        return lines.join('\n-------------\n');
    }
}

module.exports = TicTacToe;
