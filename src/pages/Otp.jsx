import { Link } from "react-router-dom";
import AndroindButton from "../components/button/AndroindButton";
import AppleButton from "../components/button/AppleButton";
import Logo from "./../assets/images/logo/logo.png";
import MobilePhone from "./../assets/images/logo/mobile-logo.png";
import Phone from "./../assets/images/phone.png";
import Obj1 from "./../assets/images/bg-obj-1.png";
import Obj2 from "./../assets/images/bg-obj-2.png";
import Obj3 from "./../assets/images/bg-obj-3.png";
import LogoMin from "./../assets/images/logo-min.png";
import WhiteLogoMin from "./../assets/images/white-logo-min.png";
import OtpPhone from "./../assets/images/otp-phone.png";

export default function Otp() {
    return (
        <div>
            <section className="flex flex-col lg:flex-row">
                <div className="bg-primary basis-[550px] lg:h-screen p-[20px] relative z-10 order-last lg:order-first">
                    <div className="pb-12 hidden lg:block">
                        <Link to="/">
                            <img src={Logo} alt="logo..." />
                        </Link>
                    </div>
                    <div className="text-center px-6 py-10">
                        <h2 className="text-white font-black text-[30px]">
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
                        className="absolute bottom-0 w-[13vw] transform -translate-x-1/2 left-1/2"
                        src={OtpPhone}
                        alt="otp phone"
                    />
                    <div className="text-center mt-6 lg:hidden">
                        <img
                            className="m-auto mb-2"
                            src={WhiteLogoMin}
                            alt="logo min"
                        />
                        <p className="text-white text-sm">
                            © 2022 - All Rights Reserved <br /> Simplifon
                            Technologies Private Limited
                        </p>
                        <div className="text-white">
                            <a className="text-sm" href="#">
                                Terms and Conditions
                            </a>{" "}
                            |
                            <a className="text-sm" href="#">
                                {" "}
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
                <section className="bg-hero bg-no-repeat bg-contain grow relative bg-[center_top_1.6rem] py-6 px-4 order-first lg:order-last h-[750px] lg:h-auto">
                    <div className="p-4 flex justify-between items-center lg:justify-end">
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
                    <div className="w-[375px] ml-[10vw] mt-[20vh]">
                        <h2 className="text-[30px] font-black pb-4">
                            OTP Verification
                        </h2>
                        <p className="text-[16px]">
                            Enter the 4 digit OTP sent to +91-9933711955 (
                            Mobile Number Incorrect?{" "}
                            <Link
                                className="text-red-500 hover:underline"
                                to="/change"
                            >
                                Change
                            </Link>{" "}
                            )
                        </p>
                        <form action="">
                            <div className="flex gap-6 py-8">
                                <input
                                    className="h-[40px] w-[40px] text-center appearance-none"
                                    type="number"
                                    value="0"
                                />
                                <input
                                    className="h-[40px] w-[40px] text-center appearance-none"
                                    type="number"
                                    value="0"
                                />
                                <input
                                    className="h-[40px] w-[40px] text-center appearance-none"
                                    type="number"
                                    value="0"
                                />
                                <input
                                    className="h-[40px] w-[40px] text-center appearance-none"
                                    type="number"
                                    value="0"
                                />
                            </div>
                            <div className="flex items-center gap-6">
                                <button className="h-[50px] bg-black px-10 hover:bg-slate-900 duration-150 rounded-lg text-white">
                                    Verify
                                </button>
                                <p>Resend OTP in 39 sec</p>
                            </div>
                        </form>
                    </div>
                    <div className="lg:flex items-center gap-2 absolute bottom-4 right-20 hidden">
                        <div>
                            <div className="flex justify-end gap-2">
                                <a href="#">Terms and Conditions</a>
                                <a
                                    className="border border-l-black pl-2"
                                    href="#"
                                >
                                    Privacy Policy
                                </a>
                            </div>
                            <p className="text-end ">
                                © 2022 Simplifon Technologies Private Limited -
                                All Rights Reserved
                            </p>
                        </div>
                        <img
                            className="border border-l-black pl-2 h-full"
                            src={LogoMin}
                            alt="logo mini"
                        />
                    </div>
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
        </div>
    );
}
