import { useEffect, useState } from "react";

import Piece from "../pieces/piece";
// import { makeMove, getFen, resetGame, getPiece,getPossibleMoves } from '../logic/chessLogic';

import { makeMove, resetGame, getPiece } from '../logic/chessLogic';

import { Toaster, toast } from "sonner";

import { BeatLoader } from "react-spinners";
import { Button } from "../../ui/button";
// import { Move } from "chess.js";
const ChessBoard = () => {

    const [rows] = useState(["A", "B", "C", "D", "E", "F", "G", "H"])
    const [columns] = useState(["1", "2", "3", "4", "5", "6", "7", "8"])
    const [fromSquare, setFromSquare] = useState<{ row: number, col: number } | null>(null);
    // const [togglePlayer, setTogglePlayer] = useState(0) // 0 for white, 1 for black
    const [gameInitiated, setGameInitiated] = useState(0)
    // const [possibleMoves,setPossibleMoves] = useState<Move[]>([])
    // const [possibleMoves,setPossibleMoves] = useState<Move[]>([])


    const startWithWhite = [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ];

    const startWithBlack = [
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ];

    const [position, setPosition] = useState(startWithWhite);

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    },[])

    const handleSquareClick = (rowIdx: number, colIdx: number) => {
        const square = `${String.fromCharCode(97 + colIdx)}${8 - rowIdx}`;

        if (fromSquare) {
            const fromSquareStr = `${String.fromCharCode(97 + fromSquare.col)}${8 - fromSquare.row}`;
            const move = { from: fromSquareStr, to: square };
            console.log("move", move)
            const result = makeMove(move);
            if (result) {
                console.log("inside if")
                updatePosition(fromSquare, { row: rowIdx, col: colIdx });
                setFromSquare(null);
                // setTogglePlayer(prev => prev === 0 ? 1 : 0)
                setGameInitiated(1)
            } else {
                // alert("Invalid move");
                toast.info("Invalid move", {
                    duration: 1000
                });
                setFromSquare(null);
            }
        } else {
            const piece = getPiece(square);
            if (piece) {
                setFromSquare({ row: rowIdx, col: colIdx });
                // const moves = getPossibleMoves(square)
                // console.log(moves,"moves......")
                // setPossibleMoves(moves)
            }
        }
    };

    const updatePosition = (from: { row: number, col: number }, to: { row: number, col: number }) => {
        setPosition((prevPosition) => {
            const newPosition = prevPosition.map(row => row.slice()); // Create a shallow copy of the board
            newPosition[to.row][to.col] = newPosition[from.row][from.col]; // Move the piece
            newPosition[from.row][from.col] = null; // Clear the original square
            return newPosition;
        });
    };

    const handleResetGame = () => {
        resetGame()
        setPosition(startWithWhite);
        setFromSquare(null);
        setGameInitiated(0)
    }

    const handleToggleGamePlay = (key: string) => {
        if (gameInitiated) return toast.warning(`cannot switch to ${key}. Game has already began!`, {
            duration: 1000
        })
        key === 'BLACK' ? setPosition(startWithBlack) : setPosition(startWithWhite)
    }

    return (
        (isLoading ? <div className="flex justify-center items-center h-screen"><h1 className="text-xl  font-semibold">Loading</h1><BeatLoader size={4} /></div> : (
            <div className="flex justify-center items-center h-screen flex-col">
                <span className="uppercase text-center text-3xl font-semibold p-4">Chess</span>
                <div className="relative">
                    <div className="border-[50px] border-Border-default board-border">
                        {position.map((row, rowIdx) => (
                            <div key={rowIdx} className="flex">
                                <div className="number text-white bg-Border-default absolute left-5 pt-6 font-semibold">
                                    {columns[7 - rowIdx]}
                                </div>
                                <div className="number text-white bg-Border-default absolute right-5 pt-6 font-semibold">
                                    {columns[7 - rowIdx]}
                                </div>
                                {row.map((piece, colIdx) => (
                                    <div
                                        key={colIdx}
                                        className={`board-size ${(colIdx + rowIdx) % 2 === 0 ? "bg-Square-primary" : "bg-Square-secondary"} h-[85px] w-[85px] flex justify-center items-center`}
                                        onClick={() => handleSquareClick(rowIdx, colIdx)}>
                                        {piece !== null && <Piece piece={piece} />}
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="flex justify-around w-full">
                            {rows.map((row, idx) => (
                                <div>
                                    <div className="character text-white bg-Border-default absolute top-[15px] font-semibold">
                                        {row}
                                    </div>
                                    <div className="text-white bg-Border-default absolute bottom-[15px] font-semibold">
                                        {row}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Toaster position="bottom-right" richColors />
                <div className="flex gap-10 p-5">
                    <Button className="border bottom-2 border-gray-400 bg-green-400" onClick={() => {
                        handleToggleGamePlay('BLACK')
                    }}>Play as black</Button>
                    <Button className="border bottom-2 border-gray-400 bg-green-400" onClick={() => {
                        handleToggleGamePlay('WHITE')
                    }}>Play as white</Button>
                    <Button className="border bottom-2 border-gray-400 bg-green-400" onClick={handleResetGame}>Reset Game</Button>
                </div>
            </div>
        ))
    )
}
export default ChessBoard