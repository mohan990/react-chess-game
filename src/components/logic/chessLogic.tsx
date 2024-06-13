// chessLogic.js
import { Chess } from 'chess.js';

const game = new Chess();

export const makeMove = (move:any) => {
  const result = game.move(move);
  return result !== null;
};

export const getFen = () => {
  return game.fen();
};

export const resetGame = () => {
  game.reset();
};
