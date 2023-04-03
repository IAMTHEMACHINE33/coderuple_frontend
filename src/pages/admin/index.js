import AdminSideNavLinks from '@/components/Admin/AdminSideNavLinks'
import React from 'react'

const index = () => {
    return (
        <section
            class="relative flex h-screen min-h-full items-start justify-start overflow-x-hidden border bg-gray-50 dark:border-zinc-900 dark:bg-zinc-700 ">
            <nav
                id="sidenav-1"
                class="absolute pt-10 top-0 left-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] md:data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
                data-te-sidenav-init
                data-te-sidenav-hidden="false"
                data-te-sidenav-mode="side"
                data-te-sidenav-position="fixed">
                <AdminSideNavLinks />
            </nav>
            <div className='bg-white w-full z-[1036] fixed p-4'>
                <button
                    class="inline-block rounded bg-blue-600 px-2 py-1 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                    data-te-sidenav-toggle-ref
                    data-te-target="#sidenav-1"
                    aria-controls="#sidenav-1"
                    aria-haspopup="true">
                    <span class="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                                fill-rule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>
            </div>

        </section>
    )
}

export default index