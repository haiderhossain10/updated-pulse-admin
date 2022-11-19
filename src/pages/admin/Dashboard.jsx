import Layout from "@components/admin/Layout";
import ConnectInternet from "@components/admin/ConnectInternet";
import LoginSessionTable from "@components/admin/LoginSessionTable";
import RechargeHistoryTable from "@components/admin/RechargeHistoryTable";
import ConnectInternetMobile from "@components/admin/ConnectInternetMobile";
import MobileRechargeHistoryTable from "../../components/admin/MobileRechargeHistoryTable";

export default function Dashboard() {
    return (
        <>
            <Layout>
                <div className="lg:hidden">
                    <ConnectInternetMobile />
                    <svg
                        height="70vh"
                        className="absolute top-0 left-0 w-full z-10 md:hidden"
                        viewBox="0 0 361 416"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M176.261 -120.323C245.867 -117.125 319.828 -122.333 372.576 -76.8042C428.339 -28.6726 455.44 45.8591 454.121 119.51C452.824 191.936 415.238 256.095 365.668 308.916C314.121 363.845 251.52 412.36 176.261 415.595C98.347 418.944 22.1994 383.727 -30.1611 325.932C-80.2944 270.596 -90.4246 194.163 -91.9829 119.51C-93.586 42.7169 -96.2233 -44.519 -38.963 -95.7146C16.9974 -145.748 101.275 -123.769 176.261 -120.323Z"
                            fill="#FF2431"
                        />
                    </svg>
                </div>
                <ConnectInternet />
                <section className="pb-10">
                    <div className="flex items-center justify-between py-3">
                        <h4 className="text-[20px] font-gilroy-semibold">
                            Login Session
                        </h4>

                        <button className="flex items-center justify-center gap-2">
                            See more
                            <svg
                                width={17}
                                height={17}
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.125 3.11621L13.625 7.61621L9.125 12.1162M3.125 7.61621H13.625"
                                    stroke="black"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <LoginSessionTable />
                    <div className="flex items-center justify-between py-3 mt-6">
                        <h4 className="text-[20px] font-gilroy-semibold">
                            Recharge History
                        </h4>

                        <button className="flex items-center justify-center gap-2">
                            See more
                            <svg
                                width={17}
                                height={17}
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.125 3.11621L13.625 7.61621L9.125 12.1162M3.125 7.61621H13.625"
                                    stroke="black"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <MobileRechargeHistoryTable />
                    <RechargeHistoryTable />
                </section>
            </Layout>
        </>
    );
}
