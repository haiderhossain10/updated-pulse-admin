import { useLocation } from "react-router-dom";

export default function AdminHeader() {
    const location = useLocation();

    let page;
    if (location?.pathname === "/dashboard") page = "Dashboard";
    if (location?.pathname === "/recharge-history") page = "Recharge History";
    if (location?.pathname === "/login-session") page = "Login Sessions ";
    if (location?.pathname === "/active-devices") page = "Active Device";
    if (location?.pathname === "/update-profile") page = "Update Profile";
    if (location?.pathname === "/help") page = "Help";

    return (
        <>
            <header className="flex items-center justify-between py-4">
                <h4 className="font-gilroy-semibold text-[20px]">{page}</h4>

                <button>
                    <svg
                        width={25}
                        height={28}
                        viewBox="0 0 25 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.0821 10.4407C19.0821 11.8179 19.414 12.6296 20.1445 13.5651C20.6981 14.2542 20.875 15.1388 20.875 16.0985C20.875 17.0571 20.5878 17.9672 20.0123 18.706C19.259 19.5917 18.1965 20.1572 17.1122 20.2555C15.5409 20.4024 13.9687 20.526 12.3755 20.526C10.7813 20.526 9.21005 20.4521 7.63875 20.2555C6.55346 20.1572 5.49102 19.5917 4.73867 18.706C4.16322 17.9672 3.875 17.0571 3.875 16.0985C3.875 15.1388 4.0529 14.2542 4.60549 13.5651C5.35884 12.6296 5.66892 11.8179 5.66892 10.4407V9.97357C5.66892 8.12923 6.08833 6.92323 6.952 5.74264C8.23606 4.02089 10.2944 2.98828 12.3308 2.98828H12.4202C14.5004 2.98828 16.6252 4.07059 17.8875 5.86633C18.7064 7.02263 19.0821 8.17782 19.0821 9.97357V10.4407ZM9.44922 22.7916C9.44922 22.2394 9.91136 21.9865 10.3387 21.8783C10.8386 21.7623 13.8848 21.7623 14.3847 21.8783C14.8121 21.9865 15.2742 22.2394 15.2742 22.7916C15.2494 23.3173 14.9681 23.7834 14.5795 24.0793C14.0756 24.51 13.4843 24.7828 12.8661 24.8811C12.5242 24.9297 12.1883 24.9308 11.8583 24.8811C11.2392 24.7828 10.6478 24.51 10.1449 24.0782C9.75533 23.7834 9.47407 23.3173 9.44922 22.7916Z"
                            fill="#D0C5C6"
                        />
                    </svg>
                </button>
            </header>
        </>
    );
}
