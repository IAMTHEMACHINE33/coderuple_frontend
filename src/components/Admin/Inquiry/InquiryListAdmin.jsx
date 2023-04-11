import MaterialReactTable from '@/components/UI/DataTable/MaterialReactTable'
import QuickFilteringInitialize from '@/components/UI/DataTable/QuickFilteringInitialize'
import Link from 'next/link'
import React from 'react'

const InquiryListAdmin = () => {
    return (
        <div className="flex w-full flex-col gap-2">
            <div className="flex w-full justify-between items-center">
                <span>Inquiries</span>
            </div>
            {/* <QuickFilteringInitialize /> */}
            <MaterialReactTable />
        </div>
    )
}

export default InquiryListAdmin