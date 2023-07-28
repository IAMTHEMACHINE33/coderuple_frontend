import React from 'react'
import Image from 'next/image'
import discover from '../../Images/discover.svg'
import plan from '../../Images/plan.svg'
import execute from '../../Images/execute.svg'
import deliver from '../../Images/deliver.svg'
const Workingprocess = (props) => {
    return (
        <>
            {/* <hr className='bg-[#D9D9D9] h-2 relative top-[435px] left-[550px] w-64 hidden lg:flex' />
            <hr className='bg-[#D9D9D9] h-2 relative top-[427px] left-[810px] w-64 hidden lg:flex' />
            <hr className='bg-[#D9D9D9] h-2 relative top-[419px] left-[1080px] w-60 hidden lg:flex' /> */}


            <div className='relative flex justify-center lg:hidden'>
                <div className='responsive-container flex flex-col items-center py-20 gap-10'>
                    <h1 className=' capitalize text-5xl font-medium text-left'>
                        Our Working Process
                    </h1>

                    <div className='flex flex-col lg:flex-row gap-16'>
                        <div className='flex flex-col items-center gap-12 lg:w-48'>
                            {/* <Image src={Company} className='h-44 w-44 rounded-full' /> */}
                            <Image src={discover} className=' h-44 w-48' alt='image' />
                            <div className='flex flex-col items-center gap-6'>
                                <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                    <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-b   cold text-2xl'>1</span>
                                </div>
                                <h1 className=' capitalize text-4xl font-light'>
                                    DISCOVERY
                                </h1>
                                <p>
                                During discovery, we aim to understand your requirements, goals, and challenges. We discuss your business, current systems, processes,
                                and issues to find the best solution. The primary objective is to define the problem and identify desired outcomes.

                            </p>
                                <div>
                                </div>
                            </div>
                        </div>
                        {/* <hr /> */}
                        <div className='flex flex-col items-center gap-12 lg:w-52'>
                            {/* <Image src={Company} className='h-44 w-44 rounded-full' /> */}
                            <Image src={plan} className=' h-44 w-48' alt='image' />
                            <div className='flex flex-col items-center gap-6'>
                                <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                    <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>2</span>
                                </div>
                                <h1 className=' capitalize text-4xl font-light'>
                                    PLANNING
                                </h1>
                                <p>

                                    In the planning stage, We create a strategic roadmap to address your requirements and needs effectively. This involves defining
                                    project scope, objectives, deliverables, timelines,requirements, resources, and considering budget, risks, and compliance requirements.

                                </p>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-12 lg:w-52'>
                            {/* <Image src={Company} className='h-44 w-44 rounded-full' /> */}
                            <Image src={execute} className=' h-44 w-48' alt='image' />
                            <div className='flex flex-col items-center gap-6'>
                                <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                    <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>3</span>
                                </div>
                                <h1 className=' capitalize text-4xl font-light'>
                                    EXECUTE
                                </h1>
                                <p>
                                In the execution stage, we implement the plan by allocating resources, designing, developing solution, coding, testing, and
                                integrating components. We maintain open communication for updates, feedback, and  address concerns promptly.

                            </p>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-12 lg:w-52'>
                            {/* <Image src={Company} className='h-44 w-44 rounded-full' /> */}
                            <Image src={deliver} className=' h-44 w-48' alt='image' />
                            <div className='flex flex-col items-center gap-6'>
                                <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                    <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>4</span>
                                </div>
                                <h1 className=' capitalize text-4xl font-light'>
                                    DELIVER
                                </h1>
                                <p>
                                After execution, we enter delivery phase. Here, we finalize project deliverables, conduct rigorous testing and quality assurance to deploy solutions.
                                The stage concludes with a successful handover, marking project completion.
                            </p>
                                <div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Workingprocess