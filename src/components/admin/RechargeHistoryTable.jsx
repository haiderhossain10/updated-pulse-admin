import { useSelector } from "react-redux";
import moment from "moment";

export default function RechargeHistoryTable() {
    const { table } = useSelector((state) => state.rechargeHistory) || [];
    return (
        <>
            <div className="hidden md:block">
                <table className="w-full">
                    <thead>
                        <tr>
                            <td className="text-[16px] font-gilroy-bold text-left p-3">
                                Plan Name
                            </td>
                            <td className="text-[16px] font-gilroy-bold text-left p-3">
                                Price
                            </td>
                            <td className="text-[16px] font-gilroy-bold text-left p-3">
                                Valid Till
                            </td>
                            <td className="text-[16px] font-gilroy-bold text-left p-3">
                                Status
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {table?.map((item) => (
                            <tr
                                key={item.id}
                                className="bg-[#F8F8F8] border-t-[6px] first-of-type:border-t-0 border-b-[6px] last-of-type:border-b-0 border-t-white border-b-white"
                            >
                                <td className="p-3 rounded-l-lg">
                                    <p className="text-[18px] font-gilroy-semibold">
                                        {item.plane.name}
                                    </p>
                                    <p className="text-[14px] text-[#777]">
                                        {/* 12 Feb 2022 02:00 AM | TXN ID: WI9853425 */}
                                        {moment(item.plane.date).format(
                                            "D MMM YYYY h:m a"
                                        )}{" "}
                                        | {item.plane.txn}
                                    </p>
                                </td>
                                <td className="p-3">
                                    <p>₹{item.price}</p>
                                </td>
                                <td className="p-3">
                                    <p>
                                        {moment(item.validTill).format(
                                            "MMM D, YYYY h:m a"
                                        )}
                                    </p>
                                </td>
                                <td className="p-3 rounded-r-lg">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className={`h-[10px] w-[10px] rounded-full ${
                                                (item.status === "success" &&
                                                    "bg-green-500") ||
                                                (item.status === "failed" &&
                                                    "bg-red-500") ||
                                                (item.status === "pending" &&
                                                    "bg-yellow-500")
                                            }`}
                                        ></div>
                                        <p className="capitalize">
                                            {item.status}
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
