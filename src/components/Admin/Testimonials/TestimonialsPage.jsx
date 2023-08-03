import React from 'react'
import TestimonialsListAdmin from './TestimonialsListAdmin';
// import CenteredPopupModal from '@/components/UI/Modals/CenteredPopupModal';
import TestimonialsAdd from './TestimonialsAdd';
import ModalDeleteListChildren from '@/components/UI/ModalChilldren/ModalDeleteListChildren';
import ModalDeleteSingleChildren from '@/components/UI/ModalChilldren/ModalDeleteSingleChildren';
import dynamic from 'next/dynamic'
import ConfirmationButtonsForDelete from '@/components/UI/Modals/ModalConfirmationButtonsCRUD/ConfirmationButtonsForDelete';
import ConfirmationButtonsForCreate from '@/components/UI/Modals/ModalConfirmationButtonsCRUD/ConfirmationButtonsForCreate';
import ConfirmationButtonsForUpdate from '@/components/UI/Modals/ModalConfirmationButtonsCRUD/ConfirmationButtonsForUpdate';
import axios from 'axios';
import { useEffect, useState } from "react";
import { getTestimonialsApi } from '@/pages/api/admin/testimonialsApiCalls';

const TestimonialsPage = () => {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState();
    useEffect(() => {
        getTestimonialsApi({ setData })
    }, [newData]);

    const headers = ['id', 'company', 'description']

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
            title: "Delete Testimonial"
        },
        deleteSelected: {
            id: "deleteSelectedTestimonialModal",
            title: "Delete Selected Testimonials"
        },
    }

    const CenteredPopupModal = dynamic(
        () => import('@/components/UI/Modals/CenteredPopupModal'),
        { ssr: false }
    )
    const [selectedRows, setSelectedRows] = React.useState([]);
    console.log("newData", newData)

    return (
        <>
            <TestimonialsListAdmin identifiers={identifiers} setSelectedRows={setSelectedRows} selectedRows={selectedRows} data={data} />

            <CenteredPopupModal id={identifiers.add.id} title={identifiers.add.title} reverse={true}>
                <TestimonialsAdd setNewData={setNewData} id={identifiers.add.id} />
            </CenteredPopupModal>

            <CenteredPopupModal id={identifiers.edit.id} title={identifiers.edit.title}>
                <TestimonialsAdd />
                <ConfirmationButtonsForUpdate id={identifiers.edit.id} />
            </CenteredPopupModal>

            <CenteredPopupModal id={identifiers.deleteSelected.id} title={identifiers.deleteSelected.title}>
                <ModalDeleteListChildren selectedRows={selectedRows} headers={headers} />
                <ConfirmationButtonsForDelete id={identifiers.delete.id} />
            </CenteredPopupModal>

            <CenteredPopupModal id={identifiers.delete.id} title={identifiers.delete.title}>
                <ModalDeleteSingleChildren selectedRows={selectedRows} />
                <ConfirmationButtonsForDelete id={identifiers.delete.id} />
            </CenteredPopupModal>

            <pre style={{ fontSize: 10 }}>
                {JSON.stringify(selectedRows, null, 4)}
            </pre>
        </>
    )
}

export default TestimonialsPage