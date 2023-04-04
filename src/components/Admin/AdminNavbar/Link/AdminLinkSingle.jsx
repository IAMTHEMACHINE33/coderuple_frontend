import Link from "next/link"

const AdminLinkSingle = (props) => {
    return (
        <ul>
            <Link
                href=""
                class="flex w-full h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear  hover:bg-gray-300 active:bg-gray-300 hover:text-inherit hover:outline-none focus:text-inherit focus:outline-none  active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                data-te-sidenav-link-ref
                id={props.text}
            >
                <span
                    class="mr-4 [&>svg]:h-4 [&>svg]:w-4 w-4 "
                >
                    {props.single && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-4 w-4">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                    )
                    }
                </span>
                <span>{props.text}</span>
            </Link>
        </ul>
    )
}

export default AdminLinkSingle