import QuickFilteringInitialize from '@/components/UI/QuickFilteringInitialize'
import Link from 'next/link'
import React from 'react'

const InquiryListAdmin = () => {
    return (
        <div className="flex w-full flex-col gap-2">
            <div className="flex w-full justify-between items-center">
                <span>Inquiries</span>
            </div>
            <QuickFilteringInitialize />
        </div>
    )
}

export default InquiryListAdmin