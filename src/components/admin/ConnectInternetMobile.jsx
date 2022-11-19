import ConnectImg from "@imgs/connect-internet-mobile.png";

export default function ConnectInternetMobile() {
    return (
        <>
            <div className="bg-white p-6 rounded-lg lg:hidden relative mb-[100px] z-20">
                <div>
                    <ul className="flex items-center text-[12px] py-1 first-of-type:pt-0 last-of-type:pb-0">
                        <li className="basis-[90px] text-[#777]">PDO:</li>
                        <li className="font-gilroy-semibold">
                            Ummah Store [WB0988977]
                        </li>
                    </ul>
                    <ul className="flex items-center text-[12px] py-1 first-of-type:pt-0 last-of-type:pb-0">
                        <li className="basis-[90px] text-[#777]">PDOA:</li>
                        <li className="font-gilroy-semibold">
                            Simplifon Technologies Pvt. Ltd.
                        </li>
                    </ul>
                    <ul className="flex items-center text-[12px] py-1 first-of-type:pt-0 last-of-type:pb-0">
                        <li className="basis-[90px] text-[#777]">Location:</li>
                        <li className="font-gilroy-semibold">Natanhat, WB</li>
                    </ul>
                </div>
                <div className="flex items-center justify-between py-8">
                    <div>
                        <p className="text-[12px] pb-3">Data Balance</p>
                        <h2 className="text-[30px] font-gilroy-bold">56.6GB</h2>
                        <p className="text-[12px] text-[#777]">
                            Expiring in 12 days.
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-[12px] pb-3">Current Plan</p>
                        <h2 className="text-[30px] font-gilroy-bold">₹199</h2>
                        <p className="text-[12px] text-[#777]">
                            Upgrade Package
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="h-[38px] bg-black px-8 rounded-lg hover:bg-[#222] duration-150 text-white">
                        Connect to Internet
                    </button>
                </div>
                <img className="absolute right-0 top-[8px]" src={ConnectImg} />
            </div>
        </>
    );
}
