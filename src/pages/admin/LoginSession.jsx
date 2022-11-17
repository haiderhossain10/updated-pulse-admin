import Layout from "@components/admin/Layout";
import TableFilter from "@components/filter/TableFilter";
import LoginSessionTable2 from "@components/admin/LoginSessionTable2";

export default function LoginSession() {
    return (
        <>
            <Layout>
                <TableFilter />
                <div className="mt-8">
                    <LoginSessionTable2 />
                </div>
            </Layout>
        </>
    );
}
