import { FC, useContext } from "react"
import Piece from "../pieces/piece"
import { globalContext } from "../../context/context"
import { MovePieces } from "./movePieces"


interface PlacePieceProps {
    colIdx: number
    rowIdx: number
    piece?: any
    square?: any
}

const PlacePieces: FC<PlacePieceProps> = ({ colIdx, piece, square, rowIdx }) => {
    const { highLightedPiece, highLightPossibleMoves } = useContext(globalContext)
    const { handleSquareClick } = MovePieces();
    return (
        <div
            key={colIdx}
            className={`board-size ${(colIdx + rowIdx) % 2 === 0 ? "bg-black" : "bg-Square-secondary"} h-[85px] w-[85px] flex justify-center items-center 
            ${highLightedPiece?.col === colIdx && highLightedPiece.row === rowIdx ? (colIdx + rowIdx) % 2 === 0 ? "bg-yellow-300 border-2 border-white" : "bg-yellow-400 border-2 border-white" : ""}
            ${highLightPossibleMoves.includes(square) ? "bg-lime-400 border-2 border-white" : ""} 
            ${highLightPossibleMoves.map((item: any) => item.length === 4 ? item.slice(2) : null).includes(square) ? "bg-red-300 border-2 border-white" : ""} 
            ${highLightPossibleMoves.map((item: any) => item.includes("+") ? item.replace(/[+#]/g, '').slice(1) : null).includes(square) ? "bg-red-500 border-2 border-white" : ""}
            ${highLightPossibleMoves.map((item: any) => item.includes("+") || item.includes("+x") ? item.replace(/[+#]/g, '').slice(2) : null).includes(square) ? "bg-red-500 border-2 border-white" : ""}
            ${highLightPossibleMoves.map((item: any) => item.includes("#") || item.includes("x#") ? item.replace(/[##]/g, '').slice(2) : null).includes(square) ? "bg-red-900 border-2 border-white" : ""}
            ${highLightPossibleMoves.map((item: any) => item.includes("#") || item.includes("x#") ? item.replace(/[##]/g, '').slice(2) : null).includes(square) ? "bg-red-900 border-2 border-white" : ""}
            ${highLightPossibleMoves.map((item: any) => item.length === 3 ? item.replace(/[+#]/g, '') : null).includes(square) ? "bg-red-500 border-2 border-white" : ""} 
        `}
            onClick={() => handleSquareClick(rowIdx, colIdx, highLightPossibleMoves.map((item: any) => item.includes("#") || item.includes("x#") ? item.replace(/[##]/g, '').slice(2) : ""))}
        >
            {piece !== null && <Piece piece={piece} touchPiece={`${highLightedPiece?.col === colIdx && highLightedPiece.row === rowIdx ? "bottom-3 left-3 w-[70%]" : ""}`} />}
        </div>
    )
}

export default PlacePieces