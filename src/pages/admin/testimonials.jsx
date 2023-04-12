import TestimonialsListAdmin from "@/components/Admin/Testimonials/TestimonialsListAdmin"
import AdminContainer from '../../components/Admin/AdminNavbar/AdminContainer'
import TestimonialsAdd from "@/components/Admin/Testimonials/TestimonialsAdd"
import CenteredPopupModal from "@/components/UI/Modals/CenteredPopupModal"

const testimonials = () => {
  const identifiers = {
    add: {
      id: "addTestimonialModal",
      title: "Add Testimonial"
    },
    edit: {
      id: "editTestimonialModal",
      title: "Edit Testimonial"
    },
    delete: {
      id: "deleteTestimonialModal",
      title: "Delete Testimonials"
    },
  }
  return (
    <AdminContainer>
      <TestimonialsListAdmin identifiers={identifiers} />

      <CenteredPopupModal id={identifiers.add.id} title={identifiers.add.title}>
        <TestimonialsAdd />
      </CenteredPopupModal>

      <CenteredPopupModal id={identifiers.edit.id} title={identifiers.edit.title}>
        <TestimonialsAdd />
      </CenteredPopupModal>

      <CenteredPopupModal id={identifiers.delete.id} title={identifiers.delete.title}>
        <TestimonialsAdd />
      </CenteredPopupModal>

    </AdminContainer>
  )
}

export default testimonials