import HeaderSecond from "@components/inc/HeaderSecond";
import Razorpay from "@imgs/razorpay.png";
import PaymentIcon from "@imgs/payment-icon.png";
import RadioButton from "../components/radio/RadioButton";
import FooterInfoDark from "../components/inc/FooterInfoDark";
import FooterMobileInfo from "../components/inc/FooterMobileInfo";

export default function ChoosePayment() {
    return (
        <>
            <section className="bg-hero h-[1200px] md:h-[900px]  bg-no-repeat bg-contain bg-[center_top_4rem] relative">
                <HeaderSecond />

                <div className="w-[90vw] m-auto">
                    <h2 className="md:text-[30px] text-[24px] font-gilroy-bold pb-10">
                        Choose Payment Gateway
                    </h2>

                    <div className="md:flex gap-[100px]">
                        <div className="md:basis-[60%] mb-10 md:mb-0">
                            <div className="bg-white p-4 rounded-lg flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <RadioButton />
                                        <img
                                            className="w-[88px] mx-4"
                                            src={Razorpay}
                                            alt="payment icon"
                                        />
                                    </div>
                                    <div className="border-l border-l-black pl-2">
                                        <p className="text-sm">
                                            Cards, UPI, Wallets
                                        </p>
                                        <p className="text-sm">
                                            Paypal, Netbanking
                                        </p>
                                    </div>
                                </div>
                                <div className="items-center gap-6 hidden lg:flex">
                                    <img src={PaymentIcon} alt="payment icon" />
                                    <p>and more.....</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <RadioButton />
                                        <img
                                            className="w-[88px] mx-4"
                                            src={Razorpay}
                                            alt="payment icon"
                                        />
                                    </div>
                                    <div className="border-l border-l-black pl-2">
                                        <p className="text-sm">
                                            Cards, UPI, Wallets
                                        </p>
                                        <p className="text-sm">
                                            Paypal, Netbanking
                                        </p>
                                    </div>
                                </div>
                                <div className="items-center gap-6 hidden lg:flex">
                                    <img src={PaymentIcon} alt="payment icon" />
                                    <p>and more.....</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[20px] mb-8">Recharge Summary</p>
                            <div className="bg-white p-8 basis-[312px] rounded-2xl">
                                <div className="mb-4">
                                    <div className="bg-[#FFF1F1] p-4 rounded-lg flex gap-6">
                                        <div className="h-[60px] w-[60px] bg-white rounded-lg  flex items-center justify-center">
                                            <p className="font-[20px] font-gilroy-bold text-primary">
                                                ₹5
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-gilroy-medium">
                                                Daily Dose
                                            </h4>
                                            <p className="text-[10px]">
                                                1GB of Data for 24 Hours
                                            </p>
                                            <p className="font-gilroy-medium text-primary">
                                                Change Package
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <table className="w-full">
                                        <tbody className="border-dotted border-b-2 border-b-black">
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
                                        <tfoot>
                                            <tr>
                                                <td className="text-[14px] text-[#B8B8C0] py-2">
                                                    Total
                                                </td>
                                                <td className="text-[14px] font-gilroy-semibold text-right py-2">
                                                    ₹5.00
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <button className="h-[32px] bg-black w-full text-white rounded-lg mt-4 hover:bg-[#222] duration-150">
                                        Proceed to Pay
                                    </button>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <p>Don’t worry. Your money is safe!</p>
                                <p className="text-[10px]">
                                    100% secured payments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterInfoDark />
                <FooterMobileInfo />
            </section>
        </>
    );
}
