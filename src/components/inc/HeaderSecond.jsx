import Logo from "@imgs/logo/mobile-logo.png";

export default function HeaderSecond() {
    return (
        <>
            <header className="p-4 flex items-center justify-between py-6 px-4">
                <img src={Logo} alt="logo" />

                <select className="bg-transparent focus:outline-none">
                    <option>English</option>
                    <option>Bangla</option>
                </select>
            </header>
        </>
    );
}
