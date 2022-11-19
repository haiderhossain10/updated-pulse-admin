import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TableFilter() {
    const [search, setSearch] = useState("");
    const [date, setDate] = useState("");

    const navigate = useNavigate();

    /* -------------------------------------------------------------------------- */
    /*                              Submit handler                              */
    /* -------------------------------------------------------------------------- */
    const handle = (e) => {
        e.preventDefault();
        const timestamp = new Date(date).getTime();
        navigate(`/recharge-history?name=${search}&date=${timestamp}`);
    };

    return (
        <>
            <div className="pt-10">
                <form onSubmit={handle}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div>
                                <label className="block text-[14px]">
                                    Search
                                </label>
                                <input
                                    className="h-[32px] border w-full  md:w-[183px] px-2 focus:outline-none rounded-md"
                                    type="text"
                                    placeholder="Enter"
                                    required
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-[14px]">
                                    Date
                                </label>
                                <input
                                    className="h-[32px] border w-full  md:w-[183px] px-2 focus:outline-none rounded-md"
                                    type="date"
                                    required
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="flex items-center gap-3 mt-4 md:mt-0 bg-black px-4 h-[40px] text-white rounded-lg hover:bg-[#222] duration-150">
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
