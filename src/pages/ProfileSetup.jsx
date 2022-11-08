import { Link } from "react-router-dom";
import Logo from "./../assets/images/logo/logo.png";
import MobilePhone from "./../assets/images/logo/mobile-logo.png";
import Obj1 from "./../assets/images/bg-obj-1.png";
import Obj2 from "./../assets/images/bg-obj-2.png";
import Obj3 from "./../assets/images/bg-obj-3.png";
import LogoMin from "./../assets/images/logo-min.png";
import WhiteLogoMin from "./../assets/images/white-logo-min.png";
import ProfileSetupImg from "./../assets/images/profile-setup.png";

export default function ProfileSetup() {
    return (
        <div>
            <section className="flex flex-col lg:flex-row">
                <div className="bg-primary lg:basis-[550px] basis-[400px] bas lg:h-screen p-[20px] relative z-10 order-last lg:order-first">
                    <div className="pb-12 hidden lg:block">
                        <Link to="/">
                            <img src={Logo} alt="logo..." />
                        </Link>
                    </div>
                    <img
                        className="w-full absolute left-0 right-0 transform lg:-translate-y-1/2 lg:top-1/2 -top-1/2"
                        src={ProfileSetupImg}
                        alt="profile setup"
                    />
                    <div className="h-full lg:h-auto flex items-end justify-center">
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
                </div>
                <section className="grow relative bg-[center_top_1.6rem] py-6 px-4 order-first lg:order-last h-auto pb-[20rem] lg:pb-0 lg:h-auto">
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

                    <div className="lg:w-[450px] lg:pl-[4vw] pt-[4vh]">
                        <h2 className="text-[30px] font-black">
                            Profile Setup
                        </h2>
                        <p className="text-sm">
                            Enter your information to continue
                        </p>
                        <form className="mt-10">
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-3">
                                <div className="flex flex-col">
                                    <label className="text-[18px] font-medium">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="h-[40px] bg-white rounded px-4 focus:outline-none"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[18px] font-medium">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="h-[40px] bg-white rounded px-4 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-3">
                                <div className="flex flex-col">
                                    <label className="text-[18px] font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="h-[40px] bg-white rounded px-4 focus:outline-none"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[18px] font-medium">
                                        State
                                    </label>
                                    <select className="h-[40px] bg-white rounded px-4 focus:outline-none">
                                        <option value="">Chittagong</option>
                                        <option value="">Dhaka</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-3">
                                <div className="flex flex-col">
                                    <label className="text-[18px] font-medium">
                                        District
                                    </label>

                                    <select className="h-[40px] bg-white rounded px-4 focus:outline-none">
                                        <option value="">
                                            Purba Barddhanan
                                        </option>
                                        <option value="">Noakhali</option>
                                        <option value="">Fani</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[18px] font-medium">
                                        Pin Code
                                    </label>
                                    <input
                                        type="number"
                                        className="h-[40px] bg-white rounded px-4 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-10">
                                <div className="flex flex-col">
                                    <label className="text-[18px] font-medium">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="h-[40px] bg-white rounded px-4 focus:outline-none"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[18px] font-medium">
                                        Re-enter Password
                                    </label>
                                    <input
                                        type="password"
                                        className="h-[40px] bg-white rounded px-4 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <button className="h-[50px] w-full lg:w-auto bg-black text-white px-10 rounded hover:bg-gray-900 duration-150">
                                Next
                            </button>
                        </form>
                    </div>

                    <img
                        src={Obj1}
                        alt="obj 1"
                        className="absolute bottom-0 left-0 w-[120px] transform -translate-x-4 hidden lg:block"
                    />
                    <img
                        src={Obj2}
                        alt="obj 2"
                        className="absolute bottom-0 right-0 h-[40vh] lg:h-[80vh] hidden lg:block"
                    />
                    <img
                        src={Obj3}
                        alt="obj 3"
                        className="absolute bottom-10 lg:bottom-20 right-10 lg:right-20 lg:w-[10vw] w-[15vh] hidden lg:block"
                    />
                </section>
            </section>
        </div>
    );
}
