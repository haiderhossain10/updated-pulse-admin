export default function ChoosePackCard() {
    return (
        <>
            <div className="flex justify-between gap-2 items-center bg-white py-3 px-4 rounded-lg">
                <div>
                    <p className="bg-primary inline-block py-2 rounded text-white px-2">
                        ₹5
                    </p>
                </div>
                <div>
                    <h4 className="font-gilroy-bold">2GB </h4>
                    <span>Data</span>
                </div>
                <div>
                    <h4 className="font-gilroy-bold">1 Day</h4>
                    <span>Validity</span>
                </div>
                <button className="h-[45px] px-4 bg-black text-white rounded">
                    Recharge
                </button>
            </div>
        </>
    );
}
