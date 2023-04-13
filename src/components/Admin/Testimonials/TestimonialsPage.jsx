import React from 'react'
import TestimonialsListAdmin from './TestimonialsListAdmin';
import CenteredPopupModal from '@/components/UI/Modals/CenteredPopupModal';
import TestimonialsAdd from './TestimonialsAdd';
import ModalDeleteListChildren from '@/components/UI/ModalChilldren/ModalDeleteListChildren';

const TestimonialsPage = () => {
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

    const [selectedRows, setSelectedRows] = useState([]);
    console.log(selectedRows)
    return (
        <>
            <TestimonialsListAdmin identifiers={identifiers} setSelectedRows={setSelectedRows} selectedRows={selectedRows} />

            <CenteredPopupModal id={identifiers.add.id} title={identifiers.add.title} reverse={true}>
                <TestimonialsAdd />
            </CenteredPopupModal>

            <CenteredPopupModal id={identifiers.edit.id} title={identifiers.edit.title}>
                <TestimonialsAdd />
            </CenteredPopupModal>

            <CenteredPopupModal id={identifiers.delete.id} title={identifiers.delete.title}>
                <ModalDeleteListChildren selectedRows={selectedRows} />
            </CenteredPopupModal>

            <pre style={{ fontSize: 10 }}>
                {JSON.stringify(selectedRows, null, 4)}
            </pre>
        </>
    )
}

export default TestimonialsPage