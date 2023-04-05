import AdminLinks from "./Link/AdminLinks"

const AdminSideNav = () => {
    return (
        <nav
            id="sidenav-1"
            class="fixed top-0 left-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 xl:data-[te-sidenav-hidden='false']:translate-x-0"
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
            data-te-sidenav-mode-breakpoint-over="0"
            data-te-sidenav-mode-breakpoint-side="xl"
            data-te-sidenav-content="#content"
            data-te-sidenav-accordion="true">
            <a
                class="mb-3 flex items-center justify-center py-6 outline-none"
                href="#!"
                data-te-ripple-init
                data-te-ripple-color="primary">
                <img
                    id="te-logo"
                    class="mr-2 w-8"
                    src="https://tailwind-elements.com/img/logo.png"
                    alt="TE Logo"
                    draggable="false" />
                <span>Tailwind Elements</span>
            </a>

            <AdminLinks />
        </nav>

    )
}

export default AdminSideNav