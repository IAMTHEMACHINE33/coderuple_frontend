import React from 'react'

const TailwindButton = (props) => {
    // success | danger | warning | info | primary | secondary 
    // cons().log(props?.handleClick)
    return (
        <>
            {
                props.button_type === "success" ?
                    <button
                        class="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
                        type={props?.type || "button"}
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        data-te-target={`#${props.button_target}`}
                        data-te-toggle={props.willNotDismissModal ? "props.willNotDismissModal" : "modal"}
                        disabled={props.disabled}
                        onClick={props?.handleClick}
                    >
                        {props.children}
                    </button>
                    :
                    props.button_type === "danger" ?
                        <button
                            class="inline-block rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out  bg-danger shadow-[0_4px_9px_-4px_#dc4c64]  hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                            type={props?.type || "button"}
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            data-te-target={`#${props.button_target}`}
                            data-te-toggle={props.willNotDismissModal ? "props.willNotDismissModal" : "modal"}
                            disabled={props.disabled}
                            onClick={props?.handleClick}
                        >
                            {props.children}
                        </button>
                        :
                        props.button_type === "warning" ?
                            <button
                                class="inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
                                type={props?.type || "button"}
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                data-te-target={`#${props.button_target}`}
                                data-te-toggle={props.willNotDismissModal ? "props.willNotDismissModal" : "modal"}
                                disabled={props.disabled}
                                onClick={props?.handleClick}
                            >
                                {props.children}
                            </button>
                            :
                            props.button_type === "info" ?
                                <button
                                    class="inline-block rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                                    type={props?.type || "button"}
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    data-te-target={`#${props.button_target}`}
                                    data-te-toggle={props.willNotDismissModal ? "props.willNotDismissModal" : "modal"}
                                    disabled={props.disabled}
                                    onClick={props?.handleClick}
                                >
                                    {props.children}
                                </button>
                                :
                                props.button_type === "primary" ?
                                    <button
                                        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        type={props?.type || "button"}
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        data-te-target={`#${props.button_target}`}
                                        data-te-toggle={props.willNotDismissModal ? "props.willNotDismissModal" : "modal"}
                                        disabled={props.disabled}
                                        onClick={props?.handleClick}
                                    >
                                        {props.children}
                                    </button>
                                    :
                                    props.button_type === "secondary" ?
                                        <button
                                            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                            type={props?.type || "button"}
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            data-te-target={`#${props.button_target}`}
                                            data-te-toggle={props.willNotDismissModal ? "props.willNotDismissModal" : "modal"}
                                            disabled={props.disabled}
                                            onClick={props?.handleClick}
                                        >
                                            {props.children}
                                        </button>
                                        :
                                        <>
                                            {props.children}
                                        </>
            }
        </>
    )
}

export default TailwindButton