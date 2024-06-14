// chessLogic.js
import { Chess } from 'chess.js';

const game = new Chess();

export const makeMove = (move: any) => {
    try {
        const result = game.move(move);
        return result ? true : false;
    } catch (e) {
        console.error('Invalid move:', e);
        return false;
    }
};

export const getFen = () => {
    return game.fen();
};

export const resetGame = () => {
    game.reset();
};

export const getPiece = (square: any) => {
    console.log(square,"sqaure  ")
    return game.get(square);
};

export const getPossibleMoves = (square:any) => {
    return game.moves({ square, verbose: true });
  };