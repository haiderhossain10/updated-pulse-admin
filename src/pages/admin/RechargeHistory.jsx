import Layout from "@components/admin/Layout";
import TableFilter from "@components/filter/TableFilter";
import RechargeHistoryTable from "@components/admin/RechargeHistoryTable";

export default function RechargeHistory() {
    return (
        <>
            <Layout>
                <TableFilter />
                <div className="mt-8">
                    <RechargeHistoryTable />
                </div>
            </Layout>
        </>
    );
}
