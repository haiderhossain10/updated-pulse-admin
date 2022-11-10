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

export default function EnterPassword() {
    return (
        <>
            <section className="flex flex-col lg:flex-row">
                <div className="bg-primary basis-[550px] lg:h-screen p-[20px] relative z-10 order-last lg:order-first">
                    <div className="pb-12 hidden lg:block">
                        <Link to="/">
                            <img src={Logo} alt="logo..." />
                        </Link>
                    </div>
                    <div className="text-center px-6 py-10">
                        <h2 className="text-white font-gilroy-bold lg:text-[30px] text-xl">
                            Install{" "}
                            <span className="text-black">PulseWiFi</span> app on
                            the Android or iOS for Seamless WiFi Experience
                        </h2>
                    </div>
                    <div className="flex items-center gap-5 justify-center mt-6">
                        <AppleButton />
                        <AndroindButton />
                    </div>
                    <img
                        className="absolute bottom-0 lg:w-[13vw] w-[30vw] transform -translate-x-1/2 left-1/2"
                        src={OtpPhone}
                        alt="otp phone"
                    />
                    <FooterSidebarInfo />
                </div>
                <section className="grow relative bg-[center_top_1.6rem] py-6 px-4 order-first lg:order-last h-[750px] lg:h-auto">
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
                    <div className="lg:w-[375px] w-full lg:ml-[10vw] lg:mt-[20vh] mt-[14vh] ml-auto">
                        <h2 className="text-[30px] font-gilroy-semibold pb-4">
                            Enter Password
                        </h2>
                        <p className="text-[16px]">
                            The mobile number is registered with us. Enter the
                            passowrd to continue
                        </p>
                        <form>
                            <div className="py-8">
                                <input
                                    className="h-[40px] w-full rounded-md px-4"
                                    type="password"
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                <button className="h-[50px] w-full lg:w-auto bg-black lg:px-10 hover:bg-slate-900 duration-150 rounded-lg text-white">
                                    Submit
                                </button>
                                <Link
                                    to="/forgot-password"
                                    className="lg:text-red-600 text-[#7C7C7C] underline lg:no-underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                        </form>
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
