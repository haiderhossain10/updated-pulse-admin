import Layout from "@components/admin/Layout";
import HelpHead from "@components/admin/HelpHead";
import HelpTable from "../../components/admin/HelpTable";

export default function Help() {
    return (
        <>
            <Layout>
                <HelpHead />
                <div className="mt-8">
                    <HelpTable />
                </div>
            </Layout>
        </>
    );
}
