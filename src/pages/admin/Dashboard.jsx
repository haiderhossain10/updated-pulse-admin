import Layout from "@components/admin/Layout";
import ConnectInternet from "@components/admin/ConnectInternet";
import LoginSessionTable from "@components/admin/LoginSessionTable";
import RechargeHistoryTable from "@components/admin/RechargeHistoryTable";

export default function Dashboard() {
    return (
        <>
            <Layout>
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
                    <RechargeHistoryTable />
                </section>
            </Layout>
        </>
    );
}
