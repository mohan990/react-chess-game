import { FC, useContext } from "react";
import { globalContext } from "../../context/context";
import PlacePieces from "../logic/placePieces";
import { Footer } from "../Footer/footer";


const ClassicBoard: FC = () => {

    const {
        columns,
        rows,
        position,
    } = useContext(globalContext)

    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <span className="uppercase text-center text-3xl font-semibold p-4">Chess</span>
            <div className="relative">
                <div className="border-[30px] border-Border-default board-border">
                    {position.map((row: any, rowIdx: any) => (
                        <div key={rowIdx} className="flex">
                            <div className="number text-white bg-Border-default absolute left-3 pt-6 font-semibold">
                                {columns[7 - rowIdx]}
                            </div>
                            {row.map((piece: any, colIdx: any) => {
                                const square = `${String.fromCharCode(97 + colIdx)}${8 - rowIdx}`;
                                return (
                                    <PlacePieces colIdx={colIdx} piece={piece} rowIdx={rowIdx} square={square}
                                    />
                                );
                            })}
                        </div>
                    ))}
                    <div className="flex justify-around w-full">
                        {rows.map((row, idx) => (
                            <div key={idx}>
                                <div className="text-white bg-Border-default absolute bottom-0 font-semibold">
                                    {row}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default ClassicBoard;
