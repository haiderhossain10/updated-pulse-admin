export default function MobileRechargeHistoryTable() {
    return (
        <>
            <div className="md:hidden">
                {[...Array(5)].map((_, i) => (
                    <div
                        className="flex justify-between bg-white p-3 rounded-md mb-2 last-of-type:mb-0"
                        key={i}
                    >
                        <div>
                            <h4 className="text-[14px]">Basic Plan</h4>
                            <p className="text-[10px] text-[#777]">
                                12 Feb 2022 02:00 AM | TXN ID: WI9853425
                            </p>
                            <p className="text-[10px] text-[#777]">
                                Valid Till: October 14, 2022 02:00 AM
                            </p>
                        </div>
                        <div className="basis-[80px]">
                            <h4 className="text-[14px]">₹380</h4>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="h-[10px] w-[10px] bg-green-500 rounded-full"></div>
                                <p className="capitalize">Success</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
