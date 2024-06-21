import { useContext } from "react";
import { globalContext } from "../../context/context";
import { makeMove, resetGame, getPiece, getPossibleMoves } from '../logic/chessLogic';
import { toast } from "sonner";



export const MovePieces = () => {
    const {
        setHighLightedPiece,
        setHighLightPossibleMoves,
        pieceColor,
        selectedSquare,
        setPieceColor,
        setSelectedSquare,
        fromSquare,
        setFromSquare,
        setPosition
    } = useContext(globalContext)

 const handleSquareClick = (rowIdx: number, colIdx: number) => {
        console.log("inside")
        const square = `${String.fromCharCode(97 + colIdx)}${8 - rowIdx}`;

        if (square === selectedSquare) {
            setHighLightedPiece(null);
            setFromSquare(null)
            setSelectedSquare("")
            setHighLightPossibleMoves([])
            return
        }
        const piece = getPiece(square);
        if (!fromSquare) {
            if (piece) {
                if (square === selectedSquare) {
                    toast("Piece already selected. Please move or deselect the current piece.", {
                        duration: 1000
                    });
                } else {
                    setFromSquare({ row: rowIdx, col: colIdx });
                    setSelectedSquare(square)
                    setHighLightedPiece({ row: rowIdx, col: colIdx })
                    const possibleMoves = getPossibleMoves(square)
                    setHighLightPossibleMoves(possibleMoves.map(move => move.length === 3 ? move.slice(1) : move))
                    piece.color == 'w' ? setPieceColor({ white: true, black: false }) : setPieceColor({ white: false, black: true })
                }
            }
        }
        if (fromSquare) {
            const fromSquareStr = `${String.fromCharCode(97 + fromSquare.col)}${8 - fromSquare.row}`;
            const move = { from: fromSquareStr, to: square };
            const result = makeMove(move);
            if (result) {
                updatePosition(fromSquare, { row: rowIdx, col: colIdx });
                setFromSquare(null);
                setHighLightedPiece(null);
                setHighLightPossibleMoves([])
                pieceColor.white ? toast("Black's Turn", {
                    duration: 1000
                }) : toast("White's Turn", {
                    duration: 1000
                })
            } else {
                toast("Invalid move", {
                    duration: 1000
                });
                setFromSquare(null);
                setHighLightedPiece(null);
                setHighLightPossibleMoves([])
            }
        }
    };

    const updatePosition = (from: { row: number, col: number }, to: { row: number, col: number }) => {
        setPosition((prevPosition: any) => {
            const newPosition = prevPosition.map((row: any) => row.slice()); // Create a shallow copy of the board
            newPosition[to.row][to.col] = newPosition[from.row][from.col]; // Move the piece
            newPosition[from.row][from.col] = null; // Clear the original square
            return newPosition;
        });
    };

    return {
        handleSquareClick
    }
}

