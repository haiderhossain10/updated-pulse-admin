import { Link } from "react-router-dom";
import AndroindButton from "@components/button/AndroindButton";
import AppleButton from "@components/button/AppleButton";
import Logo from "@imgs/logo/logo.png";
import MobilePhone from "@imgs/logo/mobile-logo.png";
import Phone from "@imgs/phone.png";
import Obj1 from "@imgs/bg-obj-1.png";
import Obj2 from "@imgs/bg-obj-2.png";
import Obj3 from "@imgs/bg-obj-3.png";
import FooterInfoDark from "@components/inc/FooterInfoDark";
import FooterSidebarInfo from "@components/inc/FooterSidebarInfo";

export default function Home() {
    return (
        <section className="flex flex-col lg:flex-row">
            <div className="bg-primary basis-[550px] lg:h-screen p-[20px] relative z-10 order-last lg:order-first">
                <div className="pb-12 hidden lg:block">
                    <Link to="/">
                        <img src={Logo} alt="logo..." />
                    </Link>
                </div>
                <div className="flex justify-center">
                    <img
                        className="lg:w-[14rem] w-[10rem]"
                        src={Phone}
                        alt="phone..."
                    />
                </div>
                <h2 className="lg:text-[1.8rem] text-[1.4rem] font-gilroy-bold text-center mt-6">
                    Install <span className="text-white">PulseWiFi </span> app
                    on <br />
                    the Android or iOS for <br />
                    <span className="text-white">Seamless WiFi Experience</span>
                </h2>
                <div className="flex items-center gap-5 justify-center mt-6">
                    <AppleButton />
                    <AndroindButton />
                </div>
                <FooterSidebarInfo />
            </div>
            <section className="bg-hero bg-no-repeat bg-contain grow relative bg-[center_top_1.6rem] py-6 px-4 order-first lg:order-last h-[750px] lg:h-auto">
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
                <div className="mt-20">
                    <div className="bg-black lg:w-[400px] rounded-lg relative lg:mt-0">
                        <h2 className="text-white text-[20px] font-gilroy-bold p-4">
                            hola! you are connected to the PM-WANI WiFi network
                        </h2>
                        <svg
                            className="absolute bottom-[-50px] right-6"
                            width="60"
                            // height="92"
                            viewBox="0 0 104 92"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M104 91.5L0 0H104V91.5Z" fill="black" />
                        </svg>
                    </div>
                    <div className="lg:w-[450px] bg-white p-6 rounded-lg mt-20 lg:ml-10 relative z-10">
                        <h4 className="text-2xl font-gilroy-semibold">
                            Enter Mobile Number to access the Internet
                        </h4>
                        <p className="text-sm pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec at risus maximus, suscipit lorem quis,
                        </p>
                        <form>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <input
                                    className="w-[58px] h-10 border rounded-l px-2 focus:outline !appearance-none"
                                    type="number"
                                    placeholder="+91"
                                />
                                <input
                                    className="border h-10 px-2 grow focus:outline !appearance-none"
                                    type="number"
                                    placeholder="+9933-711-955"
                                />
                                <button className="h-10 w-full lg:w-auto bg-black text-white px-4 rounded hover:bg-gray-900 duration-150">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="lg:flex items-center gap-2 absolute bottom-4 right-20 hidden">
                    <div>
                        <div className="flex justify-end gap-2">
                            <a href="#">Terms and Conditions</a>
                            <a className="border border-l-black pl-2" href="#">
                                Privacy Policy
                            </a>
                        </div>
                        <p className="text-end ">
                            © 2022 Simplifon Technologies Private Limited - All
                            Rights Reserved
                        </p>
                    </div>
                    <img
                        className="border border-l-black pl-2 h-full"
                        src={LogoMin}
                        alt="logo mini"
                    />
                </div> */}
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
    );
}
