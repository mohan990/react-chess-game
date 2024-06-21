// white pieces
import WhiteBishop from "../../assets/images/white/Bishop.svg";
import WhiteKing from "../../assets/images/white/King.png";
import Whiteknight from "../../assets/images/white/Knight.svg";
import WhitePawn from "../../assets/images/white/Pawn.svg";
import WhiteQueen from "../../assets/images/white/Queen.svg";
import WhiteRook from "../../assets/images/white/Rook.svg";

// Black Pieces
import BlackBishop from "../../assets/images/black/Bishop.svg"
import BlackKing from "../../assets/images/black/King.svg"
import BlackKnight from "../../assets/images/black/Knight.svg"
import BlackPawn from "../../assets/images/black/Pawn.svg"
import BlackQueen from "../../assets/images/black/Queen.svg"
import BlackRook from "../../assets/images/black/Rook.svg"
import { FC, useContext } from "react";
import { globalContext } from "../../context/context";

interface PieceProps {
    piece: any;
    touchPiece:string;
}


const Piece: FC<PieceProps> = ({ piece,touchPiece }) => {
    const {isToggled} = useContext(globalContext)
    // Lookup the appropriate CSS class based on the piece character
    const pieceClassMap: { [key: string]: string } = {
        p: BlackPawn,
        r: BlackRook,
        n: BlackKnight,
        b: BlackBishop,
        q: BlackQueen,
        k: BlackKing,
        P: WhitePawn,
        R: WhiteRook,
        N: Whiteknight,
        B: WhiteBishop,
        Q: WhiteQueen,
        K: WhiteKing,
    };

    if (!piece) return null;
    const pieceClass = pieceClassMap[piece];

    // Return a div with the appropriate class to style the piece
    return <img src={pieceClass} width={50} height={50} alt={piece} className={`pieces cursor-pointer relative ${touchPiece} ${isToggled && piece == piece.toLowerCase()?"rotate-180":"rotate-0"}`}/>;
};

export default Piece