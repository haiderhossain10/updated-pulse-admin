import CareImg from "@imgs/care-img.png";

export default function CustomerCareCard() {
    return (
        <>
            <div className="bg-primary p-2 relative rounded-lg">
                <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.2974 10.8288L12.4366 12.4983C12.6809 13.3408 13.0245 14.1513 13.4604 14.9126C13.9139 15.6686 14.4596 16.3655 15.0849 16.9871L17.4946 16.2446C18.8446 15.8283 20.3184 16.2558 21.2161 17.3246L22.5886 18.9581C23.1443 19.6138 23.4229 20.4602 23.3653 21.3178C23.3078 22.1754 22.9187 22.9769 22.2804 23.5526C20.0416 25.5956 16.5946 26.2863 14.0139 24.2591C11.7457 22.4731 9.82656 20.284 8.35285 17.8016C6.87591 15.3308 5.88749 12.5993 5.44135 9.75559C4.94635 6.55608 7.2886 3.99558 10.2091 3.12258C11.9506 2.60058 13.8091 3.49608 14.4481 5.16559L15.2019 7.13434C15.6969 8.43034 15.3414 9.89058 14.2974 10.8266V10.8288Z"
                        fill="white"
                    />
                </svg>
                <p className="text-white">Customer Care.</p>
                <h2 className="text-[22px] text-white font-gilroy-semibold">
                    +91 9933711955
                </h2>
                <img
                    className="absolute -right-4 -bottom-4"
                    src={CareImg}
                    alt="care"
                />
            </div>
        </>
    );
}
