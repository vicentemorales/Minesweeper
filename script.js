import {mineSweeper} from './minesweeper.js';

const BOARD_SIZE = 2
const NUMBER_OF_MINES= 2

const board = mineSweeper(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector('gameBoard')
board.forEach(row => {
    row.forEach(tile =>{
        boardElement.apppend(tile.element)
    })
});