import { Link } from "react-router-dom";
import Logo from "@imgs/logo/logo.png";
import MobilePhone from "@imgs/logo/mobile-logo.png";
import Obj1 from "@imgs/bg-obj-1.png";
import ProfileSetupImg from "@imgs/profile-setup.png";
import FooterInfoDark from "@components/inc/FooterInfoDark";
import FooterSidebarInfo from "@components/inc/FooterSidebarInfo";
import ChoosePackCard from "@components/card/ChoosePackCard";
import FooterMobileInfo from "@components/inc/FooterMobileInfo";

export default function ChoosePack() {
    return (
        <>
            <section className="flex flex-col lg:flex-row">
                <div className="bg-primary lg:basis-[550px] basis-[400px] lg:h-screen p-[20px] relative z-10 order-last lg:order-first hidden md:block">
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
                    <FooterSidebarInfo />
                </div>
                <section className="grow relative bg-[center_top_1.6rem] py-6 px-4 order-first lg:order-last h-auto md:pb-[20rem] lg:pb-0 lg:h-auto">
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

                    <div className="pt-10 md:pt-0">
                        <h2 className="md:text-[36px] text-[26px] font-gilroy-bold pb-4">
                            Choose a Pack
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4 2xl:w-[1000px]">
                            {[...Array(8)].map(() => (
                                <ChoosePackCard />
                            ))}
                        </div>
                    </div>

                    <FooterMobileInfo />
                    <FooterInfoDark />

                    <img
                        src={Obj1}
                        alt="obj 1"
                        className="absolute bottom-0 left-0 w-[120px] transform -translate-x-4 hidden lg:block"
                    />
                </section>
            </section>
        </>
    );
}
