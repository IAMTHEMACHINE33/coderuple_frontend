import AdminLinkCombined from "./Link/AdminLinkCombined"
import AdminLinkSingle from "./Link/AdminLinkSingle"


const AdminSideNavLinks = () => {
    return (
        <ul
            class="relative m-0 list-none px-[0.2rem] pt-7"
            data-te-sidenav-menu-ref>
            <AdminLinkSingle text="Testimonials" link="testimonials" single={true} />
            <AdminLinkCombined combined_text="Combo">
                <AdminLinkSingle text="Testimonials" link="testimonials" />
                <AdminLinkSingle text="Testimonials" link="testimonials" />
            </AdminLinkCombined>
        </ul>
    )
}

export default AdminSideNavLinks