import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "@imgs/logo/logo.png";

export default function Sidebar() {
    const location = useLocation();
    console.log();
    return (
        <>
            <div className="h-[calc(100vh-68px)] bg-primary lg:px-4 px-3 py-6 fixed top-0 bottom-0 lg:relative rounded-r-lg">
                <Link to="/dashboard">
                    <img src={Logo} className="m-auto hidden lg:block" />
                </Link>

                <div className="h-[100%] flex flex-col justify-between">
                    <div className="mt-[40px]">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-white flex items-center justify-center lg:justify-start p-1 lg:p-3 rounded-sm lg:rounded-lg gap-4 mb-3"
                                    : "flex items-center justify-center lg:justify-start p-1 lg:p-3 text-white rounded-sm lg:rounded-lg gap-4 mb-3"
                            }
                        >
                            <svg
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.125 10.5434L4.125 4.54492L10.125 4.54492L10.125 10.5434L4.125 10.5434ZM14.625 10.5434L14.625 4.54492L20.6235 4.54492L20.6235 10.5434L14.625 10.5434ZM4.125 21.0434L4.125 15.0434H10.125L10.125 21.0434L4.125 21.0434ZM14.625 21.0434L14.625 15.0434L20.6235 15.0434L20.6235 21.0434L14.625 21.0434Z"
                                    stroke={
                                        location.pathname === "/dashboard"
                                            ? "black "
                                            : "white"
                                    }
                                    strokeWidth="1.5"
                                />
                            </svg>
                            <span className="hidden lg:block">Dashboard</span>
                        </NavLink>
                        <NavLink
                            to="/recharge-history"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-white flex items-center justify-center lg:justify-start p-1 lg:p-3 rounded-sm lg:rounded-lg gap-4 mb-3"
                                    : "flex items-center justify-center lg:justify-start p-1 lg:p-3 text-white rounded-sm lg:rounded-lg gap-4 mb-3"
                            }
                        >
                            <svg
                                width={24}
                                height={25}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.90136 8.97142H1.8457V19.2497H20.3466V8.97142H18.8049M14.6936 7.94359C15.0958 8.17619 15.4403 8.4967 15.7013 8.88115C15.9622 9.26561 16.1329 9.70408 16.2006 10.1638C16.2683 10.6235 16.2312 11.0926 16.0921 11.5359C15.953 11.9793 15.7156 12.3855 15.3974 12.7241C15.0793 13.0628 14.6887 13.3252 14.2549 13.4917C13.8211 13.6582 13.3552 13.7245 12.8922 13.6856C12.4292 13.6468 11.9809 13.5038 11.5809 13.2673C11.1809 13.0308 10.8395 12.707 10.5822 12.3201M12.124 6.91576C12.124 7.73355 11.7991 8.51785 11.2209 9.09611C10.6426 9.67438 9.85829 9.99925 9.0405 9.99925C8.22271 9.99925 7.43841 9.67438 6.86015 9.09611C6.28188 8.51785 5.95702 7.73355 5.95702 6.91576C5.95702 6.09797 6.28188 5.31367 6.86015 4.73541C7.43841 4.15714 8.22271 3.83228 9.0405 3.83228C9.85829 3.83228 10.6426 4.15714 11.2209 4.73541C11.7991 5.31367 12.124 6.09797 12.124 6.91576V6.91576Z"
                                    stroke={
                                        location.pathname ===
                                        "/recharge-history"
                                            ? "black "
                                            : "white"
                                    }
                                    strokeWidth="1.5674"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="hidden lg:block">
                                Recharge History
                            </span>
                        </NavLink>
                        <NavLink
                            to="/login-session"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-white flex items-center justify-center lg:justify-start p-1 lg:p-3 rounded-sm lg:rounded-lg gap-4 mb-3"
                                    : "flex items-center justify-center lg:justify-start p-1 lg:p-3 text-white rounded-sm lg:rounded-lg gap-4 mb-3"
                            }
                        >
                            <svg
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_1360_1150)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.558 1.38358C9.95812 1.15152 10.4125 1.0293 10.875 1.0293C11.3375 1.0293 11.7919 1.15152 12.192 1.38358L20.067 5.95108C20.877 6.42058 21.375 7.28608 21.375 8.22208V11.6706C21.375 11.969 21.2565 12.2551 21.0455 12.4661C20.8345 12.6771 20.5484 12.7956 20.25 12.7956C19.9516 12.7956 19.6655 12.6771 19.4545 12.4661C19.2435 12.2551 19.125 11.969 19.125 11.6706V9.31108L12 13.4436V23.0196C12 23.2832 11.9306 23.5422 11.7987 23.7704C11.6668 23.9986 11.477 24.1881 11.2486 24.3196C11.0201 24.4512 10.7611 24.5202 10.4974 24.5198C10.2338 24.5193 9.97499 24.4494 9.747 24.3171L1.683 19.6401C1.28513 19.4093 0.954872 19.0781 0.725313 18.6795C0.495754 18.2809 0.37495 17.829 0.375 17.3691L0.375 8.22208C0.375 7.28608 0.873 6.42208 1.683 5.95108L9.558 1.38358ZM11.0625 3.33058L18.0075 7.35808L10.875 11.4951L3.7425 7.35808L10.6875 3.33058C10.7445 3.29767 10.8092 3.28034 10.875 3.28034C10.9408 3.28034 11.0055 3.29767 11.0625 3.33058ZM2.625 17.3691V9.31108L9.75 13.4436V21.7176L2.8125 17.6931C2.7556 17.6602 2.70834 17.613 2.67543 17.5562C2.64252 17.4993 2.62513 17.4348 2.625 17.3691ZM20.133 16.9461C20.2348 16.839 20.3146 16.713 20.3677 16.5751C20.4208 16.4372 20.4463 16.2902 20.4426 16.1425C20.4389 15.9948 20.4061 15.8492 20.3462 15.7142C20.2863 15.5791 20.2003 15.4572 20.0933 15.3553C19.9862 15.2535 19.8601 15.1737 19.7222 15.1206C19.5844 15.0675 19.4374 15.0421 19.2896 15.0458C19.1419 15.0494 18.9964 15.0822 18.8613 15.1421C18.7263 15.2021 18.6043 15.288 18.5025 15.3951L14.9355 19.1451C14.7365 19.3542 14.6255 19.6319 14.6255 19.9206C14.6255 20.2093 14.7365 20.4869 14.9355 20.6961L18.5025 24.4461C18.7082 24.6623 18.9913 24.788 19.2896 24.7954C19.588 24.8029 19.877 24.6915 20.0933 24.4858C20.3095 24.2802 20.4351 23.997 20.4426 23.6987C20.45 23.4004 20.3387 23.1113 20.133 22.8951L18.3735 21.0456H23.25C23.5484 21.0456 23.8345 20.9271 24.0455 20.7161C24.2565 20.5051 24.375 20.219 24.375 19.9206C24.375 19.6222 24.2565 19.3361 24.0455 19.1251C23.8345 18.9141 23.5484 18.7956 23.25 18.7956H18.3735L20.133 16.9461Z"
                                        fill={
                                            location.pathname ===
                                            "/login-session"
                                                ? "black "
                                                : "white"
                                        }
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1360_1150">
                                        <rect
                                            width={24}
                                            height={24}
                                            fill="white"
                                            transform="translate(0.375 0.794922)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="hidden lg:block">
                                Login Sessions
                            </span>
                        </NavLink>
                        <NavLink
                            to="/active-devices"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-white flex items-center justify-center lg:justify-start p-1 lg:p-3 rounded-sm lg:rounded-lg gap-4 mb-3"
                                    : "flex items-center justify-center lg:justify-start p-1 lg:p-3 text-white rounded-sm lg:rounded-lg gap-4 mb-3"
                            }
                        >
                            <svg
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.469 6.14092C4.62997 5.47235 5.01125 4.87739 5.55144 4.45184C6.09164 4.02629 6.75932 3.7949 7.447 3.79492H17.305C18.72 3.79492 19.951 4.76492 20.283 6.14092L22.275 14.4139C22.4007 14.9359 22.4063 15.4797 22.2915 16.0042C22.1767 16.5287 21.9443 17.0203 21.612 17.442C21.2797 17.8638 20.8561 18.2046 20.373 18.439C19.8899 18.6733 19.3599 18.795 18.823 18.7949H10.875V17.2949H18.822C19.132 17.2949 19.438 17.2246 19.717 17.0892C19.9959 16.9539 20.2405 16.757 20.4323 16.5135C20.6242 16.2699 20.7583 15.986 20.8246 15.6832C20.8909 15.3803 20.8876 15.0663 20.815 14.7649L18.825 6.49192C18.7428 6.15072 18.5482 5.84711 18.2725 5.62997C17.9967 5.41284 17.656 5.29482 17.305 5.29492H7.448C6.726 5.29492 6.098 5.78992 5.928 6.49192L5.254 9.29492H4.125C3.981 9.29492 3.84 9.30592 3.702 9.32692L4.469 6.14092ZM10.865 21.2949H17.627C17.8259 21.2949 18.0167 21.2159 18.1573 21.0753C18.298 20.9346 18.377 20.7438 18.377 20.5449C18.377 20.346 18.298 20.1552 18.1573 20.0146C18.0167 19.8739 17.8259 19.7949 17.627 19.7949H10.877V21.0449C10.877 21.1289 10.872 21.2129 10.865 21.2949ZM6.125 15.2949C6.45652 15.2949 6.77446 15.1632 7.00888 14.9288C7.2433 14.6944 7.375 14.3764 7.375 14.0449C7.375 13.7134 7.2433 13.3955 7.00888 13.161C6.77446 12.9266 6.45652 12.7949 6.125 12.7949C5.79348 12.7949 5.47554 12.9266 5.24112 13.161C5.0067 13.3955 4.875 13.7134 4.875 14.0449C4.875 14.3764 5.0067 14.6944 5.24112 14.9288C5.47554 15.1632 5.79348 15.2949 6.125 15.2949ZM2.375 12.0449C2.375 11.0789 3.159 10.2949 4.125 10.2949H8.125C8.3549 10.2948 8.58257 10.34 8.795 10.4278C9.00744 10.5157 9.20048 10.6446 9.36308 10.8071C9.52569 10.9696 9.65469 11.1626 9.74269 11.375C9.8307 11.5874 9.876 11.815 9.876 12.0449V21.0449C9.876 21.5091 9.69163 21.9542 9.36344 22.2824C9.03525 22.6105 8.59013 22.7949 8.126 22.7949H4.126C3.8961 22.7951 3.66843 22.7499 3.456 22.662C3.24356 22.5741 3.05053 22.4452 2.88792 22.2827C2.72531 22.1202 2.59631 21.9272 2.50831 21.7148C2.4203 21.5025 2.375 21.2748 2.375 21.0449V12.0449ZM4.125 11.7949C4.0587 11.7949 3.99511 11.8213 3.94822 11.8681C3.90134 11.915 3.875 11.9786 3.875 12.0449V21.0449C3.875 21.1829 3.987 21.2949 4.125 21.2949H8.125C8.1913 21.2949 8.25489 21.2686 8.30178 21.2217C8.34866 21.1748 8.375 21.1112 8.375 21.0449V12.0449C8.375 11.9786 8.34866 11.915 8.30178 11.8681C8.25489 11.8213 8.1913 11.7949 8.125 11.7949H4.125Z"
                                    fill={
                                        location.pathname === "/active-devices"
                                            ? "black "
                                            : "white"
                                    }
                                />
                            </svg>
                            <span className="hidden lg:block">
                                Active Devices
                            </span>
                        </NavLink>
                        <NavLink
                            to="/update-profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-white flex items-center justify-center lg:justify-start p-1 lg:p-3 rounded-sm lg:rounded-lg gap-4 mb-3"
                                    : "flex items-center justify-center lg:justify-start p-1 lg:p-3 text-white rounded-sm lg:rounded-lg gap-4 mb-3"
                            }
                        >
                            <svg
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.375 22.7949H18.375C18.9054 22.7949 19.4141 22.5842 19.7892 22.2091C20.1643 21.8341 20.375 21.3254 20.375 20.7949V8.29492L14.875 2.79492H6.375C5.84457 2.79492 5.33586 3.00564 4.96079 3.38071C4.58571 3.75578 4.375 4.26449 4.375 4.79492V8.79492"
                                    stroke={
                                        location.pathname === "/update-profile"
                                            ? "black "
                                            : "white"
                                    }
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M9.375 18.7949L12.375 15.7949L9.375 12.7949M14.375 2.79492V8.79492H20.375L14.375 2.79492ZM2.375 15.7949H12.375H2.375Z"
                                    stroke={
                                        location.pathname === "/update-profile"
                                            ? "black "
                                            : "white"
                                    }
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="hidden lg:block">
                                Update Profile
                            </span>
                        </NavLink>
                        <NavLink
                            to="/help"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-white flex items-center justify-center lg:justify-start p-1 lg:p-3 rounded-sm lg:rounded-lg gap-4 mb-3"
                                    : "flex items-center justify-center lg:justify-start p-1 lg:p-3 text-white rounded-sm lg:rounded-lg gap-4 mb-3"
                            }
                        >
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.375 5.79492H7.375C7.10978 5.79492 6.85543 5.90028 6.66789 6.08782C6.48036 6.27535 6.375 6.52971 6.375 6.79492V18.7949C6.375 19.0601 6.48036 19.3145 6.66789 19.502C6.85543 19.6896 7.10978 19.7949 7.375 19.7949H17.375C17.6402 19.7949 17.8946 19.6896 18.0821 19.502C18.2696 19.3145 18.375 19.0601 18.375 18.7949V6.79492C18.375 6.52971 18.2696 6.27535 18.0821 6.08782C17.8946 5.90028 17.6402 5.79492 17.375 5.79492ZM7.375 3.79492C6.57935 3.79492 5.81629 4.11099 5.25368 4.6736C4.69107 5.23621 4.375 5.99927 4.375 6.79492V18.7949C4.375 19.5906 4.69107 20.3536 5.25368 20.9162C5.81629 21.4789 6.57935 21.7949 7.375 21.7949H17.375C18.1706 21.7949 18.9337 21.4789 19.4963 20.9162C20.0589 20.3536 20.375 19.5906 20.375 18.7949V6.79492C20.375 5.99927 20.0589 5.23621 19.4963 4.6736C18.9337 4.11099 18.1706 3.79492 17.375 3.79492H7.375Z"
                                    fill={
                                        location.pathname === "/help"
                                            ? "black "
                                            : "white"
                                    }
                                />
                                <path
                                    d="M8.375 7.79492H16.375V9.79492H8.375V7.79492ZM8.375 11.7949H16.375V13.7949H8.375V11.7949ZM8.375 15.7949H13.375V17.7949H8.375V15.7949Z"
                                    fill={
                                        location.pathname === "/help"
                                            ? "black "
                                            : "white"
                                    }
                                />
                            </svg>
                            <span className="hidden lg:block">Help</span>
                        </NavLink>
                    </div>
                    <div className="border-t border-t-white mt-auto pb-6">
                        <button className="flex items-center gap-3 text-white p-1 lg:p-3">
                            <svg
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.375 3.79492H17.375C17.9054 3.79492 18.4141 4.00564 18.7892 4.38071C19.1643 4.75578 19.375 5.26449 19.375 5.79492V19.7949C19.375 20.3254 19.1643 20.8341 18.7892 21.2091C18.4141 21.5842 17.9054 21.7949 17.375 21.7949H9.375M15.375 12.7949L11.375 8.79492M15.375 12.7949L11.375 16.7949M15.375 12.7949H5.375"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>{" "}
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
