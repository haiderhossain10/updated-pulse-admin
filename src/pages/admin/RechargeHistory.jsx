import Layout from "@components/admin/Layout";
import TableFilter from "@components/filter/TableFilter";
import RechargeHistoryTable from "@components/admin/RechargeHistoryTable";
import { useSearchParams } from "react-router-dom";

export default function RechargeHistory() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log("====================================");
    console.log(searchParams?.get("name"));
    console.log("====================================");
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
