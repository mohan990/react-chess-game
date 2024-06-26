import React, { createContext, useState } from 'react';

import { columns,rows,startWithWhite } from "../utils/constants";

interface PieceColor {
    black: boolean;
    white: boolean
}
const isPiece = {
    black: false,
    white: false
}

export type GlobalContextType = {
    highLightedPiece?: any
    setHighLightedPiece: React.Dispatch<React.SetStateAction<{ row: number, col: number } | null>>;
    startWithWhite?: any
    columns:string[]
    rows:string[]
    highLightPossibleMoves?:any
    setHighLightPossibleMoves:React.Dispatch<React.SetStateAction<string[]>>;
    fromSquare?:any
    setFromSquare:React.Dispatch<React.SetStateAction<{ row: number, col: number } | null>>;
    position:any,
    selectedSquare:string
    setSelectedSquare:React.Dispatch<React.SetStateAction<string>>;
    pieceColor:PieceColor,
    setPieceColor:React.Dispatch<React.SetStateAction<PieceColor>>
    setPosition:React.Dispatch<React.SetStateAction<any>>;
    isToggled:boolean
    setIsToggled:React.Dispatch<React.SetStateAction<any>>;
    checkMate:boolean;
    setCheckMate:React.Dispatch<React.SetStateAction<any>>;
  };


export const globalContext = createContext<GlobalContextType>({
    highLightedPiece: { row: 0, col: 0 },
    setHighLightedPiece: () => { },
    startWithWhite: [],
    columns:[],
    rows:[],
    setHighLightPossibleMoves:()=>{},
    highLightPossibleMoves:{ row: 0, col: 0 },
    fromSquare:{ row: 0, col: 0 },
    setFromSquare:()=>{},
    position:[],
    setPosition:()=>{},
    selectedSquare:"",
    setSelectedSquare:()=>{},
    pieceColor:{black:false,white:false},
    setPieceColor:()=>{},
    isToggled:false,
    setIsToggled:()=>{},
    checkMate:false,
    setCheckMate:()=>{}
});

export const GlobalContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [highLightedPiece, setHighLightedPiece] = useState<{ row: number, col: number } | null>(null);
    const [highLightPossibleMoves, setHighLightPossibleMoves] = useState<string[]>([])
    const [fromSquare, setFromSquare] = useState<{ row: number, col: number } | null>(null);
    const [position, setPosition] = useState(startWithWhite);
    const [selectedSquare, setSelectedSquare] = useState("")
    const [pieceColor, setPieceColor] = useState<PieceColor>(isPiece)
    const [isToggled, setIsToggled] = useState(false);
    const [checkMate,setCheckMate]= useState(false)

    return (
        <globalContext.Provider
            value={{
                highLightedPiece,
                setHighLightedPiece,
                startWithWhite,
                columns,
                rows,
                highLightPossibleMoves,
                setHighLightPossibleMoves,
                fromSquare,
                setFromSquare,
                position,
                setPosition,
                selectedSquare,
                setSelectedSquare,
                pieceColor,
                setPieceColor,
                isToggled,
                setIsToggled,
                checkMate,
                setCheckMate
            }}>
            {children}
        </globalContext.Provider >
    )
}

export default GlobalContextProvider