import { useSelector } from "react-redux";
import moment from "moment";

export default function LoginSessionTable() {
    const { table } = useSelector((state) => state.loginSession) || [];
    return (
        <>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="text-[16px] font-gilroy-bold text-left p-3">
                            PDO
                        </th>
                        <th className="text-[16px] font-gilroy-bold text-left p-3">
                            Device Info
                        </th>
                        <th className="text-[16px] font-gilroy-bold text-left p-3">
                            Started
                        </th>
                        <th className="text-[16px] font-gilroy-bold text-left p-3">
                            Closed at
                        </th>
                        <th className="text-[16px] font-gilroy-bold text-left p-3">
                            Duration
                        </th>
                        <th className="text-[16px] font-gilroy-bold text-left p-3">
                            Data Used
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {table?.map((item, index) => (
                        <tr
                            key={index}
                            className="border-t-[6px] first-of-type:border-t-0 border-b-[6px] last-of-type:border-b-0 border-t-white border-b-white"
                            style={{ backgroundColor: item.color }}
                        >
                            <td className="p-3 ">
                                <p className="font-[16px]">
                                    {item.pdo.pdoName}
                                </p>
                                <p className="font-[14px] text-[#777]">
                                    {item.pdo.pdoCode}
                                </p>
                            </td>
                            <td className="p-3">
                                <p className="font-[16px]">
                                    {item.deviceInfo.deviceName}
                                </p>
                                <p className="font-[14px] text-[#777]">
                                    {item.deviceInfo.deviceMac}
                                </p>
                            </td>
                            <td className="p-3">
                                <p className="font-[16px]">
                                    {moment(item.stated.date).format(
                                        "MMMM D, YYYY"
                                    )}
                                </p>
                                <p className="font-[14px] text-[#777]">
                                    {moment(item.stated.date).format("H:M a")}
                                </p>
                            </td>
                            <td className="p-3">
                                <p className="font-[16px]">
                                    {moment(item.closeAt.date).format(
                                        "MMMM D, YYYY"
                                    )}
                                </p>
                                <p className="font-[14px] text-[#777]">
                                    {moment(item.closeAt.date).format("H:M a")}
                                </p>
                            </td>
                            <td className="p-3">
                                <p className="font-[16px]">
                                    {moment(item.closeAt.date).diff(
                                        moment(item.stated.date),
                                        "minutes"
                                    )}
                                </p>
                                <p className="font-[14px] text-[#777]">
                                    Minutes
                                </p>
                            </td>
                            <td className="p-3">
                                <p className="font-[16px]">
                                    {item.dataUsed.size}
                                </p>
                                <p className="font-[14px] text-[#777]">
                                    {item.dataUsed.measured}
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
