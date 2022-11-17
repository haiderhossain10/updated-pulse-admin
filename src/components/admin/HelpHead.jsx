import HelpImg from "@imgs/help-img.png";

export default function HelpHead() {
    return (
        <>
            <div className="bg-[#FFF1F1] px-4 py-6 rounded-lg grid grid-cols-3 relative">
                <div className="flex items-center gap-2">
                    <svg
                        width={46}
                        height={44}
                        viewBox="0 0 46 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.06 16.4634L19.9588 19.184C20.3659 20.557 20.9387 21.8777 21.665 23.1184C22.421 24.3504 23.3305 25.486 24.3725 26.499L28.3888 25.289C30.6388 24.6107 33.095 25.3074 34.5913 27.049L36.8788 29.711C37.8049 30.7797 38.2693 32.1589 38.1734 33.5565C38.0775 34.9541 37.4289 36.2603 36.365 37.1984C32.6338 40.5277 26.8888 41.6534 22.5875 38.3497C18.8073 35.4393 15.6087 31.8718 13.1525 27.8264C10.691 23.8 9.04361 19.3486 8.30004 14.7144C7.47504 9.50036 11.3788 5.32769 16.2463 3.90503C19.1488 3.05436 22.2463 4.51369 23.3113 7.23436L24.5675 10.4427C25.3925 12.5547 24.8 14.9344 23.06 16.4597V16.4634Z"
                            fill="#FF2431"
                        />
                    </svg>
                    <div>
                        <p className="text-[20px] text-primary">Call to</p>
                        <p className="text-[20px] font-gilroy-bold">
                            1800-999-999
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border-l border-l-white pl-6">
                    <svg
                        width={37}
                        height={37}
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M30.6992 6.73242H6.69922C5.04922 6.73242 3.71422 8.08242 3.71422 9.73242L3.69922 27.7324C3.69922 29.3824 5.04922 30.7324 6.69922 30.7324H30.6992C32.3492 30.7324 33.6992 29.3824 33.6992 27.7324V9.73242C33.6992 8.08242 32.3492 6.73242 30.6992 6.73242ZM30.6992 12.7324L18.6992 20.2324L6.69922 12.7324V9.73242L18.6992 17.2324L30.6992 9.73242V12.7324Z"
                            fill="#FF2431"
                        />
                    </svg>
                    <div>
                        <p className="text-[20px] text-primary">Raise a</p>
                        <p className="text-[20px] font-gilroy-bold">Ticket</p>
                    </div>
                </div>
                <img
                    className="absolute bottom-0 right-4 h-[90%]"
                    src={HelpImg}
                />
            </div>
        </>
    );
}
