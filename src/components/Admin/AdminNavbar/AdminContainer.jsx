import AdminNavbar from "./AdminNavbar"
import AdminSideNav from "./AdminSideNav"

const AdminContainer = (props) => {
    return (
        <section
            class="relative flex items-start justify-start  border bg-gray-50  ">
            <AdminSideNav />
            <AdminNavbar />
            <main className="mt-14 xl:ml-60">
                <div class="container m-4">
                    {props.children}
                </div>
            </main>
        </section>
    )
}

export default AdminContainer