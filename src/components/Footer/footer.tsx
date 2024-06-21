import { useContext } from "react";
import { Button } from "../../ui/button";
import { globalContext } from "../../context/context";
import { toast } from "sonner";
import { resetGame } from "../logic/chessLogic";



export const Footer = () => {
    const {
        startWithWhite,
        pieceColor,
        setFromSquare,
        setPosition,
        isToggled,
        setIsToggled,
    } = useContext(globalContext)
    const handleResetGame = () => {
        resetGame()
        setPosition(startWithWhite);
        setFromSquare(null);
    };

    const handleWhosPlay = () => {
        pieceColor.white ? toast("Black's Turn", {
            duration: 1000
        }) : toast("White's Turn", {
            duration: 1000
        })
    }


    const handleInverBlack = ()=>{
        setIsToggled(!isToggled);
    }


    return (
        <div className="flex gap-10 p-5">
            <Button className="border bottom-2 border-gray-400 bg-green-400" onClick={handleResetGame}>Reset Game</Button>
            <Button className="border bottom-2 border-gray-400 bg-green-400" onClick={handleWhosPlay}>Check who's play</Button>
            <Button className="border bottom-2 border-gray-400 bg-green-400" onClick={handleInverBlack}>Invert Black Piece</Button>
        </div>
    )
}

