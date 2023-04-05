import EnhancedTable from "@/components/UI/EnhancedTable"
import QuickFilteringInitialize from "@/components/UI/QuickFilteringInitialize"

const { default: AdminSideNavContainer } = require("@/components/Admin/AdminNavbar/AdminContainer")

const testimonials = () => {
  return (
    <AdminSideNavContainer>
      <div>testimonials</div>
      {/* <EnhancedTable /> */}
      <QuickFilteringInitialize />
    </AdminSideNavContainer>
  )
}

export default testimonials