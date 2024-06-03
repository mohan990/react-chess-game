const ChessBoard = () => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const columns = ["1", "2", "3", "4", "5", "6", "7", "8"];

    return (
        <div className="flex justify-center items-center h-screen mr-96">
            <div className="relative">
                <div className="border-[50px] border-Border-default">
                    {columns.reverse().map((col, Idx) => (
                        <div className="flex">
                            <div className=" text-white bg-Border-default absolute left-5 pt-10 font-semibold">
                                {col}
                            </div>
                            <div className=" text-white bg-Border-default absolute right-5 pt-10 font-semibold">
                                {col}
                            </div>
                            {rows.map((row, Ind) => (
                                <div>
                                    {Idx === 0 || Idx === rows.length + 1 ? <div className="relative">
                                        <div className="text-white bg-Border-default absolute top-[735px] pl-10 font-semibold">
                                            {row}
                                        </div>
                                        <div className="text-white bg-Border-default absolute bottom-[10px] pl-10 font-semibold">
                                            {row}
                                        </div>
                                    </div> : <></>}
                                    <div className={`${(Ind + Idx) % 2 === 0 ? "bg-Square-primary" : "bg-Square-secondary"} h-[90px] w-[90px]`} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ChessBoard