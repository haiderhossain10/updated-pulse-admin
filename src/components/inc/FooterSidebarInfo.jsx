import WhiteLogoMin from "@imgs/white-logo-min.png";

export default function FooterSidebarInfo() {
    return (
        <>
            <div className="text-center pt-6 lg:hidden">
                <img
                    className="m-auto mb-2"
                    src={WhiteLogoMin}
                    alt="logo min"
                />
                <p className="text-white text-sm">
                    © 2022 - All Rights Reserved <br /> Simplifon Technologies
                    Private Limited
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
        </>
    );
}
