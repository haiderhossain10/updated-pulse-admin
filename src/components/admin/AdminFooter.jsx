import FooterLogo from "@imgs/white-logo-min.png";

export default function AdminFooter() {
    return (
        <>
            <footer className="bg-black flex items-center justify-between py-3 px-6 mt-[10px]">
                <p className="text-white">
                    © {new Date().getDate()} PulseWiFi - All Rights Reserved.
                </p>

                <img src={FooterLogo} alt="footer logo" />
            </footer>
        </>
    );
}
