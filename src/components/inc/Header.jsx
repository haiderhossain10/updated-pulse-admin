import Logo from "@imgs/logo/logo.png";

export default function Header() {
    return (
        <>
            <header className="p-4 flex items-center justify-between py-6 px-4">
                <img src={Logo} alt="logo" />

                <select className="bg-transparent text-white focus:outline-none">
                    <option className="text-black">English</option>
                    <option className="text-black">Bangla</option>
                </select>
            </header>
        </>
    );
}
