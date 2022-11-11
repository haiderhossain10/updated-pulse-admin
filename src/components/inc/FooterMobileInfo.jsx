import blackLogo from "@imgs/logo-min.png";

export default function FooterMobileInfo() {
    return (
        <>
            <div className="text-center mt-8 md:hidden">
                <img className="m-auto mb-3" src={blackLogo} alt="" />
                <p>© 2022 - All Rights Reserved</p>
                <p>Simplifon Technologies Private Limited</p>
                <div>
                    <a href="#">Terms and Conditions </a> {"| "}
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </>
    );
}
