export default function DeviceInfo() {
    return (
        <>
            <div className="flex items-center gap-4 mb-2 last-of-type:mb-0 mt-4 first-of-type:mt-0">
                <div className="h-[48px] w-[48px] bg-black rounded-lg flex items-center justify-center">
                    <svg
                        width={25}
                        height={25}
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_1205_6947)">
                            <path
                                d="M16.9049 3.42969H7.57161C7.21799 3.42969 6.87885 3.57016 6.62881 3.82021C6.37876 4.07026 6.23828 4.4094 6.23828 4.76302V20.763C6.23828 21.1166 6.37876 21.4558 6.62881 21.7058C6.87885 21.9559 7.21799 22.0964 7.57161 22.0964H16.9049C17.2586 22.0964 17.5977 21.9559 17.8478 21.7058C18.0978 21.4558 18.2383 21.1166 18.2383 20.763V4.76302C18.2383 4.4094 18.0978 4.07026 17.8478 3.82021C17.5977 3.57016 17.2586 3.42969 16.9049 3.42969ZM12.9049 20.763H11.5716V19.4297H12.9049V20.763ZM7.57161 18.0964V4.76302H16.9049V18.0964H7.57161Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1205_6947">
                                <rect
                                    width={24}
                                    height={24}
                                    fill="white"
                                    transform="translate(0.238281 0.763672)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <h4 className="text-[16px] font-gilroy-semibold">
                        iphone 13 Pro Max
                    </h4>
                    <p className="text-[12px] text-[#777]">
                        Ummah Store [WB0988977]{" "}
                    </p>
                    <p className="text-[12px] text-[#777]">
                        77:88:50:20:AA | 70 Mins
                    </p>
                </div>
            </div>
        </>
    );
}
