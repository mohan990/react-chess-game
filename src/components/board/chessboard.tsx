import { useEffect, useState } from "react";

import Piece from "../pieces/piece";


import { BeatLoader } from "react-spinners";
const ChessBoard = () => {

    const [rows] = useState(["A", "B", "C", "D", "E", "F", "G", "H"])
    const [columns] = useState(["1", "2", "3", "4", "5", "6", "7", "8"])

    const initialBoardSetup = [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ];

    const [position] = useState(initialBoardSetup);

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    })

    return (
        (isLoading ? <div className="flex justify-center items-center h-screen"><h1 className="text-xl  font-semibold">Loading</h1><BeatLoader size={4} /></div> : (
            <div className="flex justify-center items-center h-screen flex-col">
                <span className="uppercase text-center text-3xl font-semibold">Chess</span>
                <div className="relative">
                    <div className="border-[50px] border-Border-default">
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
                                    >
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
            </div>
        ))
    )
}
export default ChessBoard