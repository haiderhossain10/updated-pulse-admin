import Layout from "@components/admin/Layout";
import { useState } from "react";

export default function UpdateProfile() {
    const [imgPrev, setImgPrev] = useState("");

    const upload = (e) => {
        setImgPrev(URL.createObjectURL(e.target.files[0]));
    };
    return (
        <>
            <Layout>
                <div className="md:m-8 pt-4">
                    <div className="bg-[#F8F8F8] p-4 md:p-[6rem] md:w-[630px] m-auto rounded-lg">
                        <div className="h-[120px] w-[120px] relative border-[4px] border-white  rounded-full mb-6">
                            <img
                                className="h-full w-full object-cover  rounded-full"
                                src={
                                    imgPrev !== ""
                                        ? imgPrev
                                        : "https://www.gravatar.com/avatar/00000000000000000000000000000000"
                                }
                                alt="profiel"
                            />
                            <label className="h-[28px] w-[28px] bg-primary flex items-center justify-center rounded-full absolute bottom-[10px] right-[2px] cursor-pointer">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_1420_1489)">
                                        <path
                                            d="M11.6033 3.2194H9.81417L9.60583 2.5944C9.50542 2.29093 9.31182 2.02688 9.05259 1.83984C8.79337 1.65281 8.48174 1.55234 8.16208 1.55274H5.58792C5.26835 1.55249 4.95684 1.65303 4.69771 1.84004C4.43858 2.02706 4.24503 2.29103 4.14458 2.5944L3.93583 3.2194H2.14667C1.74323 3.21984 1.35645 3.3803 1.07117 3.66558C0.785901 3.95085 0.625441 4.33763 0.625 4.74107V10.8661C0.625882 11.2692 0.786536 11.6556 1.07176 11.9405C1.35699 12.2254 1.74352 12.3856 2.14667 12.3861H11.605C12.0081 12.3852 12.3945 12.2245 12.6794 11.9393C12.9643 11.6541 13.1246 11.2675 13.125 10.8644V4.7394C13.1241 4.33626 12.9635 3.9499 12.6782 3.66499C12.393 3.38007 12.0065 3.21984 11.6033 3.2194V3.2194ZM12.2917 10.8644C12.2914 11.0469 12.2189 11.2218 12.0898 11.3509C11.9608 11.4799 11.7858 11.5525 11.6033 11.5527H2.14667C1.96418 11.5525 1.78922 11.4799 1.66019 11.3509C1.53115 11.2218 1.45855 11.0469 1.45833 10.8644V4.7394C1.45899 4.5572 1.53178 4.38268 1.66077 4.254C1.78976 4.12532 1.96447 4.05295 2.14667 4.05274H4.23625C4.32366 4.05267 4.40884 4.02511 4.47973 3.97396C4.55062 3.92282 4.60363 3.85067 4.63125 3.76774L4.935 2.85649C4.98061 2.71942 5.06824 2.60021 5.18544 2.51577C5.30264 2.43133 5.44346 2.38595 5.58792 2.38607H8.16208C8.3066 2.38591 8.44749 2.43133 8.56471 2.51586C8.68193 2.60039 8.76951 2.71973 8.815 2.8569L9.11875 3.76774C9.14637 3.85067 9.19938 3.92282 9.27027 3.97396C9.34116 4.02511 9.42634 4.05267 9.51375 4.05274H11.6033C11.7858 4.05296 11.9608 4.12555 12.0898 4.25459C12.2189 4.38363 12.2914 4.55858 12.2917 4.74107V10.8644Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M6.875 4.46875C6.25693 4.46875 5.65275 4.65203 5.13884 4.99541C4.62494 5.33879 4.2244 5.82685 3.98788 6.39786C3.75135 6.96888 3.68947 7.59722 3.81005 8.20341C3.93063 8.8096 4.22825 9.36642 4.66529 9.80346C5.10233 10.2405 5.65915 10.5381 6.26534 10.6587C6.87153 10.7793 7.49986 10.7174 8.07088 10.4809C8.6419 10.2444 9.12996 9.84381 9.47334 9.32991C9.81672 8.816 9.99999 8.21182 9.99999 7.59375C9.99911 6.76522 9.66959 5.97088 9.08373 5.38502C8.49787 4.79916 7.70353 4.46963 6.875 4.46875V4.46875ZM6.875 9.88542C6.42175 9.88542 5.97868 9.75101 5.60182 9.4992C5.22496 9.24739 4.93123 8.88948 4.75778 8.47073C4.58433 8.05199 4.53894 7.59121 4.62737 7.14667C4.71579 6.70213 4.93405 6.29379 5.25455 5.9733C5.57504 5.6528 5.98338 5.43454 6.42792 5.34612C6.87246 5.25769 7.33323 5.30308 7.75198 5.47653C8.17073 5.64998 8.52864 5.94371 8.78045 6.32057C9.03226 6.69743 9.16666 7.1405 9.16666 7.59375C9.166 8.20134 8.92435 8.78385 8.49472 9.21347C8.06509 9.6431 7.48258 9.88476 6.875 9.88542V9.88542Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M11.0417 5.71908C11.2718 5.71908 11.4583 5.53253 11.4583 5.30241C11.4583 5.07229 11.2718 4.88574 11.0417 4.88574C10.8115 4.88574 10.625 5.07229 10.625 5.30241C10.625 5.53253 10.8115 5.71908 11.0417 5.71908Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1420_1489">
                                            <rect
                                                width="13.3333"
                                                height="13.3333"
                                                fill="white"
                                                transform="translate(0.207031 0.302734)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <input
                                    type="file"
                                    onChange={upload}
                                    className="hidden"
                                />
                            </label>
                        </div>
                        <form>
                            <div className="grid grid-cols-2 gap-4 mb-3">
                                <div>
                                    <label className="mb-1 block">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="h-[40px] w-full px-3 focus:outline-none rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="h-[40px] w-full px-3 focus:outline-none rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-3">
                                <div>
                                    <label className="mb-1 block">Email</label>
                                    <input
                                        type="email"
                                        className="h-[40px] w-full px-3 focus:outline-none rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block">State</label>
                                    <input
                                        type="text"
                                        className="h-[40px] w-full px-3 focus:outline-none rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-3">
                                <div>
                                    <label className="mb-1 block">
                                        District
                                    </label>
                                    <input
                                        type="text"
                                        className="h-[40px] w-full px-3 focus:outline-none rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block">
                                        Pin Code
                                    </label>
                                    <input
                                        type="number"
                                        className="h-[40px] w-full px-3 focus:outline-none rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-3">
                                <div>
                                    <label className="mb-1 block">
                                        Choose Password
                                    </label>
                                    <input
                                        type="text"
                                        className="h-[40px] w-full px-3 focus:outline-none rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block">
                                        Re-enter Password
                                    </label>
                                    <input
                                        type="text"
                                        className="h-[40px] w-full px-3 focus:outline-none rounded-lg"
                                    />
                                </div>
                            </div>
                            <button className="h-[50px] px-8 bg-black rounded-lg text-white hover:bg-[#222] duration-150">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
}
