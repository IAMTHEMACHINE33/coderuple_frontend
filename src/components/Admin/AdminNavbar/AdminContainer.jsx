import AdminNavbar from "./AdminNavbar"
import AdminSideNav from "./AdminSideNav"

const AdminContainer = (props) => {
    return (
        <section
            class="relative flex items-start justify-start  border bg-gray-50  ">
            <AdminSideNav />
            <AdminNavbar />
            <main className="mt-12 xl:ml-60 w-full">
                <div class="container p-4">
                    {props.children}
                </div>
            </main>
        </section>
    )
}

export default AdminContainer