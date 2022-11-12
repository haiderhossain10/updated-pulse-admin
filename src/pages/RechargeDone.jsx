import HeaderSecond from "@components/inc/HeaderSecond";
import FooterInfoDark from "@components/inc/FooterInfoDark";
import FooterMobileInfo from "@components/inc/FooterMobileInfo";
import RechargeDoneImg from "@imgs/recharge-done.png";

export default function RechargeDone() {
    return (
        <>
            <section className="bg-hero md:h-auto pb-10 md:pb-32  bg-no-repeat bg-contain bg-[center_top_4rem] relative">
                <HeaderSecond />

                <div className="md:w-[456px] bg-white md:m-auto rounded-lg overflow-hidden mx-6">
                    <div className="bg-primary">
                        <img src={RechargeDoneImg} />
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-3 justify-center py-4">
                            <p>Recharge Successful</p>
                            <svg
                                width={32}
                                height={32}
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.7513 1.87573C7.90443 1.87573 1.54297 8.23719 1.54297 16.0841C1.54297 23.9309 7.90443 30.2924 15.7513 30.2924C23.5982 30.2924 29.9596 23.9309 29.9596 16.0841C29.9596 8.23719 23.5982 1.87573 15.7513 1.87573ZM21.91 13.6816C22.0234 13.5519 22.1097 13.4009 22.1639 13.2375C22.2181 13.074 22.239 12.9013 22.2255 12.7296C22.212 12.5579 22.1642 12.3906 22.0851 12.2376C22.006 12.0847 21.897 11.9491 21.7647 11.8388C21.6324 11.7285 21.4794 11.6459 21.3146 11.5956C21.1499 11.5454 20.9768 11.5286 20.8054 11.5462C20.6341 11.5639 20.4681 11.6156 20.317 11.6984C20.166 11.7812 20.033 11.8933 19.926 12.0282L14.3718 18.6919L11.4978 15.8167C11.2542 15.5814 10.928 15.4512 10.5893 15.4542C10.2506 15.4571 9.92665 15.5929 9.68716 15.8324C9.44768 16.0719 9.31183 16.3959 9.30889 16.7345C9.30595 17.0732 9.43614 17.3995 9.67143 17.6431L13.5464 21.5181C13.6733 21.6449 13.8253 21.744 13.9926 21.8088C14.1599 21.8737 14.3389 21.903 14.5181 21.8948C14.6974 21.8867 14.8729 21.8413 15.0337 21.7615C15.1944 21.6818 15.3367 21.5694 15.4516 21.4316L21.91 13.6816Z"
                                    fill="#468B00"
                                />
                            </svg>
                        </div>
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
                            <button className="h-[40px] bg-black px-10 text-white rounded-lg mt-4 hover:bg-[#222] duration-150">
                                Go to Dashboard
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
