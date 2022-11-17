import Layout from "@components/admin/Layout";
import ActiveDeviceTable from "@components/admin/ActiveDeviceTable";
import TableFilter from "@components/filter/TableFilter";

export default function ActiveDevice() {
    return (
        <>
            <Layout>
                <TableFilter />
                <div className="mt-8">
                    <ActiveDeviceTable />
                </div>
            </Layout>
        </>
    );
}
