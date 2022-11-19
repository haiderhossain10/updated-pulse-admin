import { Link } from "react-router-dom";
import Logo from "@imgs/logo/logo.png";
import { useDispatch } from "react-redux";
import { hamburgerToggle } from "../../features/toggle/toggleSlice";

export default function MobileHeader() {
    const dispath = useDispatch();

    const hamburger = () => {
        dispath(hamburgerToggle());
    };
    return (
        <>
            <section className="px-4 lg:hidden bg-primary relative">
                <div className="flex items-center justify-between py-[14px] relative z-20 ">
                    <Link to="/dashboard">
                        <img className="w-[100px]" src={Logo} />
                    </Link>

                    <div className="flex items-center gap-2">
                        <button>
                            <svg
                                width={18}
                                height={17}
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.7521 6.23057C13.7521 7.12019 13.9873 7.64454 14.5047 8.2488C14.8968 8.69396 15.0221 9.2654 15.0221 9.88535C15.0221 10.5046 14.8187 11.0924 14.4111 11.5697C13.8775 12.1419 13.1249 12.5071 12.3568 12.5706C11.2438 12.6655 10.1301 12.7454 9.00165 12.7454C7.87246 12.7454 6.75946 12.6976 5.64646 12.5706C4.87771 12.5071 4.12515 12.1419 3.59223 11.5697C3.18462 11.0924 2.98047 10.5046 2.98047 9.88535C2.98047 9.2654 3.10648 8.69396 3.4979 8.2488C4.03152 7.64454 4.25116 7.12019 4.25116 6.23057V5.9288C4.25116 4.73741 4.54824 3.95837 5.16001 3.19574C6.06956 2.08354 7.52751 1.4165 8.96997 1.4165H9.03333C10.5068 1.4165 12.0119 2.11564 12.906 3.27564C13.486 4.02258 13.7521 4.7688 13.7521 5.9288V6.23057ZM6.92785 14.2089C6.92785 13.8522 7.2552 13.6889 7.55792 13.619C7.91202 13.5441 10.0697 13.5441 10.4238 13.619C10.7266 13.6889 11.0539 13.8522 11.0539 14.2089C11.0363 14.5485 10.8371 14.8496 10.5618 15.0408C10.2049 15.319 9.78603 15.4952 9.34815 15.5587C9.10598 15.5901 8.86803 15.5908 8.63431 15.5587C8.19573 15.4952 7.77686 15.319 7.42064 15.0401C7.14468 14.8496 6.94545 14.5485 6.92785 14.2089Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                        <img
                            className="h-[28px] w-[28px] rounded-[6px]"
                            src="https://gravatar.com/avatar/f85bc52be816eadd3968fe6e33eb66f2?s=400&d=wavatar&r=x"
                        />
                        <button onClick={hamburger}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                fill="#fff"
                                className="bi bi-list"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
