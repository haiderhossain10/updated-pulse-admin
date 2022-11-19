import ConnectInternetImg from "@imgs/connect-internet.png";

export default function ConnectInternet() {
    return (
        <>
            <div className="lg:grid grid-cols-3 items-center bg-[#FFF1F1] p-6 rounded-lg relative hidden">
                <div>
                    <div className="mb-4">
                        <p className="text-[12px] text-[#777777]">PDO:</p>
                        <h6 className="text-[14px] font-gilroy-bold">
                            Ummah Store [WB0988977]
                        </h6>
                    </div>
                    <div className="mb-4">
                        <p className="text-[12px] text-[#777777]">Location:</p>
                        <h6 className="text-[14px] font-gilroy-bold">
                            Natanhat, WB
                        </h6>
                    </div>
                    <div>
                        <p className="text-[12px] text-[#777777]">PDOA:</p>
                        <h6 className="text-[14px] font-gilroy-bold">
                            Simplifon Technologies Pvt Ltd.
                        </h6>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-3">
                        <div>
                            <p className="text-[12px]">Data Balance</p>
                            <h2 className="text-[30px] font-gilroy-bold">
                                56.6GB
                            </h2>
                            <p className="text-[12px] text-[#777777]">
                                Expiring in 12 days.
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-[12px]">Current Plan</p>
                            <h2 className="text-[30px] font-gilroy-bold">
                                ₹199
                            </h2>
                            <p className="text-[12px] text-[#777777]">
                                Upgrade Package
                            </p>
                        </div>
                    </div>
                    <button className="h-[40px] bg-black px-6 text-white rounded-lg hover:bg-[#222] duration-150">
                        Connect to Internet
                    </button>
                </div>
                <img
                    src={ConnectInternetImg}
                    className="absolute bottom-0 right-0"
                />
            </div>
        </>
    );
}
