import Image from 'next/image'
import React from 'react'
import discover from '../../Images/discover.svg'
import plan from '../../Images/plan.svg'
import execute from '../../Images/execute.svg'
import deliver from '../../Images/deliver.svg'


const Responsiveworkingprocess = () => {
    return (
        <div className='hidden relative lg:flex justify-center'>
            <div className='responsive-container flex flex-col items-center py-20 gap-10'>
                <h1 className=' capitalize text-5xl font-medium text-left'>
                    Our Working Process
                </h1>

                <div className='flex flex-col gap-6'>
                    <div className='flex w-full gap-5'>
                        <div className='w-full flex justify-center'>
                            {/* <div className='bg-[#D9D9D9] h-44 w-44 rounded-full'></div> */}
                            <Image src={discover} className=' h-44 w-48'alt='image' />
                        </div>
                        <div className='w-full  flex justify-center'>
                        <Image src={plan} className=' h-44 w-48'alt='image' />

                        </div>
                        <div className='w-full  flex justify-center'>
                        <Image src={execute} className=' h-44 w-48'alt='image' />

                        </div>
                        <div className='w-full  flex justify-center'>
                        <Image src={deliver} className=' h-44 w-48' alt='image'/>

                        </div>


                    </div>
                    <div className='flex w-full  pt-4'>
                        <div className='w-full flex justify-end items-center'>

                            <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>1</span>

                            </div>
                            <hr className='bg-[#D9D9D9] h-2  w-2/5' />

                        </div>
                        <div className='w-full  flex justify-center items-center'>
                            <hr className='bg-[#D9D9D9] h-2  w-full' />
                            <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>2</span>
                            </div>
                            <hr className='bg-[#D9D9D9] h-2  w-full' />

                        </div>
                        <div className='w-full  flex justify-center items-center'>
                            <hr className='bg-[#D9D9D9] h-2  w-full' />

                            <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>3</span>

                            </div>
                            <hr className='bg-[#D9D9D9] h-2  w-full' />

                        </div>
                        <div className='w-full  flex justify-start items-center'>
                            <hr className='bg-[#D9D9D9] h-2  w-2/5' />

                            <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>4</span>
                            </div>

                        </div>


                    </div>
                    <div className='flex w-full gap-5'>
                        <div className='w-full flex justify-center'>
                            <h1 className=' capitalize text-4xl font-normal'>
                                DISCOVERY
                            </h1>
                        </div>
                        <div className='w-full  flex justify-center'>
                            <h1 className=' capitalize text-4xl font-normal'>
                                PLANNING
                            </h1>
                        </div>
                        <div className='w-full  flex justify-center'>
                            <h1 className=' capitalize text-4xl font-normal'>
                                EXECUTE
                            </h1>
                        </div>
                        <div className='w-full  flex justify-center'>
                            <h1 className=' capitalize text-4xl font-normal'>
                                DELIVER
                            </h1>
                        </div>


                    </div>
                    <div className='flex w-full gap-10 text-center '>
                        <div className='w-full flex justify-center'>
                            <p>
                                During the discovery stage, we aim to understand your specific requirements, goals, and challenges. We engage in thorough
                                discussions with you to gather information about your business, current systems, processes, and any issues you may be facing to find the optimum solution.
                                The primary objective of this stage is to define the problem statement and identify the desired outcomes.

                            </p>
                        </div>
                        <div className='w-full flex justify-center'>
                            <p>
                                Once we have a clear understanding of your requirements, we move on to the planning stage. In this phase, we develop a strategic
                                roadmap to address your needs effectively. This includes defining project scope, setting objectives, identifying key deliverables,
                                establishing timelines, and allocating resources. We also consider factors such as budget, risks, and any compliance or regulatory requirements.

                            </p>
                        </div>
                        <div className='w-full flex justify-center '>
                            <p>
                                The execution stage involves the implementation of the plan.We allocate the necessary resources,
                                such as project managers, developers to carry out the project activities. This phase includes designing and
                                developing the solutions,coding,testing and integrating various components.Throughout this stage, we maintain open
                                communication channels to provide progress updates and gather feedback from you, ensuring that we stay on track and address any concerns promptly.

                            </p>
                        </div>
                        <div className='w-full  flex justify-center'>
                            <p>
                                Once the execution stage is complete, we move on to the delivery stage. In this phase, we finalize the project deliverables and deploy
                                the solutions to your environment. We conduct rigorous testing and quality assurance processes to ensure that the developed IT solutions
                                meet your requirements and adhere to industry standards.The delivery stage concludes with the successful handover of the project to you,
                                marking the completion of the engagement.
                            </p>
                        </div>


                    </div>



                </div>

            </div>
        </div>

    )
}

export default Responsiveworkingprocess