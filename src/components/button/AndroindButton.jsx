export default function AndroindButton() {
    return (
        <button className="flex items-center bg-black gap-[12px] py-[6px] lg:px-6 px-2 rounded">
            <svg
                width="29"
                height="31"
                viewBox="0 0 29 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.47252 30.2236L1.38444 30.1392C1.03958 29.7736 0.835938 29.2058 0.835938 28.4707V28.6437V2.38139V2.55484C0.835938 1.75879 1.07335 1.15908 1.47108 0.799537L16.1553 15.5121L1.47252 30.2236Z"
                    fill="url(#paint0_linear_2_3)"
                />
                <path
                    d="M21.0204 20.4175L16.125 15.5117L21.02 10.6067L26.9296 13.9707C27.6801 14.3979 28.1014 14.9485 28.1718 15.5112V15.5134C28.1014 16.0748 27.6801 16.6259 26.9296 17.053L21.0205 20.4174"
                    fill="url(#paint1_linear_2_3)"
                />
                <path
                    d="M2.50812 30.6094C2.09795 30.6097 1.74002 30.4757 1.46094 30.2234V30.223L16.1437 15.5114L21.0391 20.4172L3.83587 30.2109C3.35992 30.4813 2.90894 30.6094 2.50812 30.6094Z"
                    fill="url(#paint2_linear_2_3)"
                />
                <path
                    d="M16.1452 15.5117L1.46094 0.799191C1.74007 0.547289 2.09752 0.413705 2.50721 0.413705C2.9091 0.413705 3.36045 0.542165 3.83736 0.813066L21.0401 10.6067L16.1452 15.5117"
                    fill="url(#paint3_linear_2_3)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_2_3"
                        x1="10.2201"
                        y1="2.10383"
                        x2="-2.43871"
                        y2="14.7787"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#00A0FF" />
                        <stop offset="0.00657" stop-color="#00A1FF" />
                        <stop offset="0.2601" stop-color="#00BEFF" />
                        <stop offset="0.5122" stop-color="#00D2FF" />
                        <stop offset="0.7604" stop-color="#00DFFF" />
                        <stop offset="1" stop-color="#00E3FF" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_2_3"
                        x1="29.0862"
                        y1="15.4269"
                        x2="0.408235"
                        y2="15.4269"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FFE000" />
                        <stop offset="0.4087" stop-color="#FFBD00" />
                        <stop offset="0.7754" stop-color="#FFA500" />
                        <stop offset="1" stop-color="#FF9C00" />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_2_3"
                        x1="18.4401"
                        y1="20.1757"
                        x2="-3.01107"
                        y2="41.4973"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FF3A44" />
                        <stop offset="1" stop-color="#C31162" />
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear_2_3"
                        x1="-2.32361"
                        y1="-1.38201"
                        x2="7.2367"
                        y2="8.13519"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#32A071" />
                        <stop offset="0.0685" stop-color="#2DA771" />
                        <stop offset="0.4762" stop-color="#15CF74" />
                        <stop offset="0.8009" stop-color="#06E775" />
                        <stop offset="1" stop-color="#00F076" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="text-start">
                <p className="text-white md:text-xs text-[8px] uppercase">
                    Get it on
                </p>
                <h2 className="text-white font-black lg:text-lg text-[10px]">
                    Google Play
                </h2>
            </div>
        </button>
    );
}
