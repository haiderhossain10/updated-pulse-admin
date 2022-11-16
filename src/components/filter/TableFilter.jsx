export default function TableFilter() {
    return (
        <>
            <div>
                <form action="">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center  gap-4">
                            <div>
                                <label className="block text-[14px]">
                                    Search
                                </label>
                                <input
                                    className="h-[32px] border  w-[183px] px-2 focus:outline-none rounded-md"
                                    type="text"
                                    placeholder="Enter"
                                />
                            </div>
                            <div>
                                <label className="block text-[14px]">
                                    Date
                                </label>
                                <input
                                    className="h-[32px] border  w-[183px] px-2 focus:outline-none rounded-md"
                                    type="date"
                                />
                            </div>
                        </div>
                        <button className="flex items-center gap-3 bg-black px-4 h-[40px] text-white rounded-lg hover:bg-[#222] duration-150">
                            <svg
                                width={24}
                                height={25}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 11.5762H17V13.5762H7V11.5762ZM4 7.57617H20V9.57617H4V7.57617ZM10 15.5762H14V17.5762H10V15.5762Z"
                                    fill="white"
                                />
                            </svg>
                            Filter
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
