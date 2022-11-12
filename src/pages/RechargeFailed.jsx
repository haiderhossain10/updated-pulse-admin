import HeaderSecond from "@components/inc/HeaderSecond";
import FooterInfoDark from "@components/inc/FooterInfoDark";
import FooterMobileInfo from "@components/inc/FooterMobileInfo";
import RechargeFaildedImg from "@imgs/recharge-failed.png";

export default function RechargeFailed() {
    return (
        <>
            <section className="bg-hero md:h-auto pb-10 md:pb-32  bg-no-repeat bg-contain bg-[center_top_4rem] relative">
                <HeaderSecond />

                <div className="md:w-[456px] bg-white md:m-auto rounded-lg overflow-hidden mx-6">
                    <div className="bg-primary px-4 py-6">
                        <img src={RechargeFaildedImg} className="m-auto" />
                        <ul className="flex items-center justify-between text-white">
                            <li>$295</li>
                            <li>9933711955</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center text-primary gap-3 justify-center py-4">
                            <svg
                                width={22}
                                height={22}
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8294 3.95493L2.53966 18.0949C2.36874 18.3974 2.27831 18.7402 2.27735 19.0895C2.27639 19.4387 2.36495 19.7821 2.53421 20.0855C2.70346 20.3889 2.94752 20.6417 3.2421 20.8188C3.53668 20.9959 3.87151 21.0911 4.21328 21.0949H20.7928C21.1346 21.0911 21.4695 20.9959 21.764 20.8188C22.0586 20.6417 22.3027 20.3889 22.4719 20.0855C22.6412 19.7821 22.7297 19.4387 22.7288 19.0895C22.7278 18.7402 22.6374 18.3974 22.4665 18.0949L14.1767 3.95493C14.0022 3.66104 13.7565 3.41805 13.4634 3.24942C13.1702 3.08078 12.8395 2.99219 12.5031 2.99219C12.1666 2.99219 11.8359 3.08078 11.5427 3.24942C11.2496 3.41805 11.0039 3.66104 10.8294 3.95493V3.95493Z"
                                    stroke="#FF2431"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.5039 9.09473V13.0947"
                                    stroke="#FF2431"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.5039 17.0947H12.5137"
                                    stroke="#FF2431"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p>Recharge Failed</p>
                        </div>
                        <p className="text-center pb-6">
                            In case your money is debited, your recharge will be
                            confirmed via sms within an hour, or else amount
                            will be refunded to your account within 7 working
                            days.
                        </p>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="text-[14px] text-[#B8B8C0] py-2">
                                        Order ID
                                    </td>
                                    <td className="text-[14px] text-right py-2">
                                        9663010185831955
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-[14px] text-[#B8B8C0] py-2">
                                        Date and Time
                                    </td>
                                    <td className="text-[14px] text-right py-2">
                                        11 mar, 2022 at 3:32 am
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-[14px] text-[#B8B8C0] py-2">
                                        Mobile Number
                                    </td>
                                    <td className="text-[14px] text-right py-2">
                                        9933711955
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-[14px] text-[#B8B8C0] py-2">
                                        Amount
                                    </td>
                                    <td className="text-[14px] text-right py-2">
                                        ₹5.00
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-[14px] text-[#B8B8C0] py-2">
                                        Mode of Payment
                                    </td>
                                    <td className="text-[14px] text-right py-2">
                                        UPI
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-center">
                            <button className="h-[40px] bg-black w-[90%] text-white rounded-lg mt-4 hover:bg-[#222] duration-150">
                                Retry
                            </button>
                        </div>
                    </div>
                </div>

                <FooterInfoDark />
                <FooterMobileInfo />
            </section>
        </>
    );
}
