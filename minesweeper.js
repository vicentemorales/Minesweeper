

const TILE_STATUS = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'numbers',
    MARKED: 'marked'
}

export function mineSweeper(boardSize, numberOfMines){
    const board = []
    
    for (let x = 0; x < boardSize.length; x++) {
        const row = []
        for (let y = 0; y < boardSize.length; y++) {
            const element = document.createElement('div')
            element.dataset.status = TILE_STATUS.HIDDEN
            
            const tile = {
                element,
                x,
                y
            }
            row.push(tile)
        }
        board.push(row)
    }
    return boardSize
}