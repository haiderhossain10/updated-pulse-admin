import { Link } from "react-router-dom";
import AndroindButton from "@components/button/AndroindButton";
import AppleButton from "@components/button/AppleButton";
import Logo from "@imgs/logo/logo.png";
import MobilePhone from "@imgs/logo/mobile-logo.png";
import Obj1 from "@imgs/bg-obj-1.png";
import Obj2 from "@imgs/bg-obj-2.png";
import Obj3 from "@imgs/bg-obj-3.png";
import OtpPhone from "@imgs/otp-phone.png";
import FooterInfoDark from "@components/inc/FooterInfoDark";
import FooterSidebarInfo from "@components/inc/FooterSidebarInfo";
import ReminderIng from "@imgs/reminder.png";

export default function Reminder() {
    return (
        <>
            <section className="flex flex-col lg:flex-row">
                <div className="bg-primary basis-[550px] lg:h-screen p-[20px] relative z-10 order-last lg:order-first">
                    <div className="pb-12 hidden lg:block">
                        <Link to="/">
                            <img src={Logo} alt="logo..." />
                        </Link>
                    </div>
                    <div className="text px-6 py-10">
                        <h2 className="text-white font-gilroy-bold lg:text-[30px] text-xl">
                            Install{" "}
                            <span className="text-black">PulseWiFi</span> app on
                            the Android or iOS for Seamless WiFi Experience
                        </h2>
                        <p className="pt-6 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec at risus maximus, suscipit lorem quis,{" "}
                        </p>
                    </div>
                    <div className="flex items-center gap-5 justify-center mt-6">
                        <AppleButton />
                        <AndroindButton />
                    </div>
                    <img
                        className="hidden lg:block absolute bottom-0 lg:w-[13vw] w-[30vw] transform -translate-x-1/2 left-1/2"
                        src={OtpPhone}
                        alt="otp phone"
                    />
                    <FooterSidebarInfo />
                </div>
                <section className="grow relative bg-[center_top_1.6rem] py-6 px-4 order-first lg:order-last h-[850px] lg:h-auto">
                    <div className="flex justify-between items-center lg:justify-end">
                        <Link className="lg:hidden" to="/">
                            <img src={MobilePhone} />
                        </Link>
                        <form>
                            <select className="!bg-transparent">
                                <option>English</option>
                                <option>Bangla</option>
                            </select>
                        </form>
                    </div>
                    <div className="lg:w-[450px] w-full lg:ml-[10vw] lg:mt-[16vh] mt-[14vh] ml-auto">
                        <div className="h-[80px] w-[80px] rounded-md bg-primary p-3 flex justify-center items-center">
                            <img src={ReminderIng} />
                        </div>
                        <h2 className="font-gilroy-bold text-[36px]">
                            <span className="text-primary">Reminder!</span>{" "}
                            <br /> Only{" "}
                            <span className="text-primary">05!</span> Minutes
                            Are Left
                        </h2>
                        <p className="py-4">
                            Hope you are enjoying the Internet Your internet
                            service is going to expire in 05 minutes
                        </p>
                        <h6 className="text-[20px] font-gilroy-semibold mb-10">
                            Please Recharge to Continue
                        </h6>
                        <button className="h-[50px] px-6 bg-black text-white rounded-lg hover:bg-[#222] duration-150">
                            Recharge Now
                        </button>
                    </div>

                    <FooterInfoDark />
                    <img
                        src={Obj1}
                        alt="obj 1"
                        className="absolute bottom-0 left-0 w-[120px] transform -translate-x-4"
                    />
                    <img
                        src={Obj2}
                        alt="obj 2"
                        className="absolute bottom-0 right-0 h-[40vh] lg:h-[80vh]"
                    />
                    <img
                        src={Obj3}
                        alt="obj 3"
                        className="absolute bottom-10 lg:bottom-20 right-10 lg:right-20 lg:w-[10vw] w-[15vh]"
                    />
                </section>
            </section>
        </>
    );
}
