// white pieces
import WhiteBishop from "../../images/white/Bishop.svg";
import WhiteKing from "../../images/white/King.png";
import Whiteknight from "../../images/white/Knight.svg";
import WhitePawn from "../../images/white/Pawn.svg";
import WhiteQueen from "../../images/white/Queen.svg";
import WhiteRook from "../../images/white/Rook.svg";

// Black Pieces
import BlackBishop from "../../images/black/Bishop.svg"
import BlackKing from "../../images/black/King.svg"
import BlackKnight from "../../images/black/Knight.svg"
import BlackPawn from "../../images/black/Pawn.svg"
import BlackQueen from "../../images/black/Queen.svg"
import BlackRook from "../../images/black/Rook.svg"
import { FC } from "react";

interface PieceProps {
    piece: any;
}


const Piece: FC<PieceProps> = ({ piece }) => {
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
    return <img src={pieceClass} width={50} height={50} alt={piece} className="cursor-pointer"/>;
};

export default Piece