import Header from "@components/inc/Header";
import ConnObj from "@imgs/connected-obj.png";
import BlackButton from "@components/button/BlackButton";
import AppleButton from "../components/button/AppleButton";
import AndroindButton from "../components/button/AndroindButton";
import FooterInfoLight from "../components/inc/FooterInfoLight";
import FooterSidebarInfo from "../components/inc/FooterSidebarInfo";

export default function Connected() {
    return (
        <>
            <section className="bg-primary w-full md:h-screen h-[100vh] md:bg-hero-connected bg-connected-mobile-bg  bg-no-repeat md:bg-[length:auto_100vh] bg-[center_top_2rem] bg-[length:auto_100%] relative">
                <Header />
                <div className="md:absolute w-full md:w-auto transform md:-translate-y-1/2 md:-translate-x-1/2 md:top-1/2 md:left-1/2 mt-4">
                    <div className="md:w-[550px] w-full m-auto text-center">
                        <img
                            className="m-auto w-[20vh]"
                            src={ConnObj}
                            alt="connected obj"
                        />
                        <h2 className="text-white md:text-[40px] text-[20px] font-gilroy-bold py-6 px-6 md:px-0">
                            Voila! You are Now Connected to the Internet
                        </h2>
                        <BlackButton> Go To Dashboard</BlackButton>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:mt-[16vh] mt-6">
                        <AppleButton />
                        <AndroindButton />
                    </div>
                </div>
                <FooterInfoLight />
            </section>
            <div className="bg-primary pb-6 md:hidden">
                <FooterSidebarInfo />
            </div>
        </>
    );
}
