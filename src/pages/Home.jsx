import { Link } from "react-router-dom";
import AndroindButton from "../components/button/AndroindButton";
import AppleButton from "../components/button/AppleButton";
import Logo from "./../assets/images/logo/logo.png";
import Phone from "./../assets/images/phone.png";
import Obj1 from "./../assets/images/bg-obj-1.png";
import Obj2 from "./../assets/images/bg-obj-2.png";
import Obj3 from "./../assets/images/bg-obj-3.png";
import LogoMin from "./../assets/images/logo-min.png";

export default function Home() {
    return (
        <section className="flex">
            <div className="bg-primary basis-[550px] h-screen p-[20px] relative z-10">
                <div className="pb-12">
                    <Link to="/">
                        <img src={Logo} alt="logo..." />
                    </Link>
                </div>
                <div className="flex justify-center">
                    <img className="w-[14rem]" src={Phone} alt="phone..." />
                </div>
                <h2 className="text-[1.8rem] font-black text-center mt-6">
                    Install
                    <span className="text-white">PulseWiFi</span> app on <br />
                    the Android or iOS for <br />
                    <span className="text-white">Seamless WiFi Experience</span>
                </h2>
                <div className="flex items-center gap-5 justify-center mt-6">
                    <AppleButton />
                    <AndroindButton />
                </div>
            </div>
            <section className="bg-hero bg-no-repeat bg-contain grow relative p-10">
                <div className="p-4 flex justify-end">
                    <form>
                        <select className="!bg-transparent">
                            <option>English</option>
                            <option>Bangla</option>
                        </select>
                    </form>
                </div>
                <div className="bg-black w-[400px] rounded-lg relative">
                    <h2 className="text-white text-[20px] font-black p-4">
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
                <div className="w-[450px] bg-white p-6 rounded-lg mt-20 ml-10">
                    <h4 className="text-2xl font-black">
                        Enter Mobile Number to access the Internet
                    </h4>
                    <p className="text-sm pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec at risus maximus, suscipit lorem quis,
                    </p>
                    <form>
                        <div className="flex gap-2 mt-4">
                            <input
                                className="w-[50px] border rounded-l px-2 focus:outline"
                                type="number"
                                placeholder="+91"
                            />
                            <input
                                className="border px-2 grow focus:outline"
                                type="number"
                                placeholder="+9933-711-955"
                            />
                            <button className="h-10 bg-black text-white px-4 rounded">
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center gap-2 absolute bottom-4 right-20">
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
                </div>
                <img
                    src={Obj1}
                    alt="obj 1"
                    className="absolute bottom-0 left-0 w-[120px] transform -translate-x-4"
                />
                <img
                    src={Obj2}
                    alt="obj 2"
                    className="absolute bottom-0 right-0 h-[80vh]"
                />
                <img
                    src={Obj3}
                    alt="obj 3"
                    className="absolute bottom-20 right-20 w-[10vw]"
                />
            </section>
        </section>
    );
}
