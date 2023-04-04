import AdminSideNavLinks from "./AdminSideNavLinks"

const AdminSideNav = () => {
    return (
        <nav
            id="sidenav-1"
            class="absolute pt-10 top-0 left-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] md:data-[te-sidenav-hidden='false']:translate-x-0"
            data-te-sidenav-init
            data-te-sidenav-hidden="true"
            data-te-sidenav-mode="side"
            data-te-sidenav-position="fixed"
        >
            <AdminSideNavLinks />
        </nav>
    )
}

export default AdminSideNav