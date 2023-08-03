import AdminNavbar from "./AdminNavbar"
import AdminSideNav from "./AdminSideNav"

const AdminContainer = (props) => {
    return (
        <section
            class="relative flex items-start justify-start bg-gray-100 h-screen">
            <AdminSideNav />
            <AdminNavbar />
            <main className="mt-12 xl:ml-60 w-full">
                <div class="p-4">
                    {props.children}
                </div>
            </main>
        </section>
    )
}

export default AdminContainer