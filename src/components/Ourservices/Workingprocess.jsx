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
                                <h1 className=' capitalize text-4xl font-normal'>
                                    DISCOVERY
                                </h1>
                                <p>
                                    During the discovery stage, we aim to understand your specific requirements, goals, and challenges. We engage in thorough
                                    discussions with you to gather information about your business, current systems, processes, and any issues you may be facing to find the optimum solution.
                                    The primary objective of this stage is to define the problem statement and identify the desired outcomes.
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
                                <h1 className=' capitalize text-4xl font-normal'>
                                    PLANNING
                                </h1>
                                <p>
                                    Once we have a clear understanding of your requirements, we move to planning stage where we develop a strategic
                                    roadmap to address your needs effectively. This includes defining project scope, setting objectives, identifying key deliverables,
                                    establishing timelines, and allocating resources. We also consider factors such as budget, risks, and any compliance or regulatory requirements.

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
                                <h1 className=' capitalize text-4xl font-normal'>
                                    EXECUTE
                                </h1>
                                <p>
                                    The execution stage involves implementing the plan by allocating necessary resources such as project managers, developers to carry out the project activities, designing and developing solutions, coding, testing, and
                                    integrating components.Throughout this stage, We maintain open communication to provide updates and gather feedback to stay on track and address concerns promptly.

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
                                <h1 className=' capitalize text-4xl font-normal'>
                                    DELIVER
                                </h1>
                                <p>
                                    After completing the execution stage, we move to the delivery phase where we finalize project deliverables, conduct thorough testing and quality assurance processes to deploy the solutions that meet your requirements and adhere to industry standards.
                                    The delivery stage concludes with a successful handover of the project to you, marking the completion of the engagement.
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