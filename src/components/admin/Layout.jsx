import DeviceInfo from "@components/device/DeviceInfo";
import CustomerCareCard from "../care/CustomerCareCard";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <>
            <main className="bg-white">
                <section className="grid grid-cols-[230px_1fr_330px] lg:gap-6 gap-2 relative">
                    <Sidebar />
                    <section className="h-[calc(100vh-68px)] overflow-y-auto">
                        <AdminHeader />
                        {children}
                    </section>
                    <section className="bg-[#FFF1F1] basis-[30vw]] p-6 h-[calc(100vh-68px)] overflow-y-auto">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h4 className="text-[22px] font-gilroy-semibold flex items-center gap-2 mb-4">
                                    Active Devices
                                    <span className="h-[22px] w-[22px] bg-primary text-white rounded-full text-xs flex items-center justify-center">
                                        5
                                    </span>
                                </h4>
                                {[...Array(5)].map((_, index) => (
                                    <DeviceInfo key={index} />
                                ))}
                            </div>

                            <CustomerCareCard />
                        </div>
                    </section>
                </section>
                <AdminFooter />
            </main>
        </>
    );
}
