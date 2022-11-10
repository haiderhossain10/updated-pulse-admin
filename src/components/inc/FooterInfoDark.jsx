import LogoMin from "@imgs/logo-min.png";

export default function FooterInfoDark() {
    return (
        <>
            <div className="lg:flex items-center gap-2 absolute bottom-4 right-20 hidden">
                <div>
                    <div className="flex justify-end gap-2">
                        <a href="#">Terms and Conditions</a>
                        <a className="border-l border-l-black pl-2" href="#">
                            Privacy Policy
                        </a>
                    </div>
                    <p className="text-end ">
                        © 2022 Simplifon Technologies Private Limited - All
                        Rights Reserved
                    </p>
                </div>
                <img
                    className="border-l border-l-black pl-2 h-full"
                    src={LogoMin}
                    alt="logo mini"
                />
            </div>
        </>
    );
}
