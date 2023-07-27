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
                            <Image src={discover} className=' h-44 w-48' alt='image' />
                        </div>
                        <div className='w-full  flex justify-center'>
                            <Image src={plan} className=' h-44 w-48' alt='image' />

                        </div>
                        <div className='w-full  flex justify-center'>
                            <Image src={execute} className=' h-44 w-48' alt='image' />

                        </div>
                        <div className='w-full  flex justify-center'>
                            <Image src={deliver} className=' h-44 w-48' alt='image' />

                        </div>


                    </div>
                    <div className='flex w-full  pt-4'>
                        <div className='w-1/4 flex justify-end items-center'>
                            <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center '>
                                <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>1</span>
                            </div>
                            <hr className='bg-[#D9D9D9] h-2 flex justify-items-end items-end w-[134.5px]' />
                        </div>

                        <div className='w-1/4  flex justify-center items-center'>
                            <hr className='bg-[#D9D9D9] h-2  w-[134.5px]' />
                            <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>2</span>
                            </div>
                            <hr className='bg-[#D9D9D9] h-2 w-[134.5px] ' />

                        </div>
                        <div className='w-1/4  flex justify-center items-center'>
                            <hr className='bg-[#D9D9D9] h-2  w-[134.5px] ' />

                            <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>3</span>

                            </div>
                            <hr className='bg-[#D9D9D9] h-2  w-[134.5px] ' />

                        </div>
                        <div className='w-1/4  flex justify-start items-center'>
                            <hr className='bg-[#D9D9D9] h-2  w-[134.5px] ' />

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
                                During discovery, we aim to understand your requirements, goals, and challenges. We discuss your business, current systems, processes,
                                and issues to find the best solution. The primary objective is to define the problem and identify desired outcomes.

                            </p>
                        </div>
                        <div className='w-full flex justify-center'>
                            <p>

                                In the planning stage. We create a strategic roadmap to address your needs effectively. This involves defining
                                project scope, objectives, deliverables, timelines, resources, and considering budget, risks, and compliance requirements.

                            </p>
                        </div>
                        <div className='w-full flex justify-center '>
                            <p>
                                In the execution stage, we implement the plan by allocating resources, designing, developing solution, coding, testing, and
                                integrating components. We maintain open communication for updates, feedback, and  address concerns promptly.

                            </p>
                        </div>
                        <div className='w-full  flex justify-center'>
                            <p>
                                After execution, we enter delivery phase. Here, we finalize project deliverables, conduct rigorous testing and quality assurance to deploy solutions.
                                The stage concludes with a successful handover, marking project completion.
                            </p>
                        </div>


                    </div>



                </div>

            </div>
        </div>

    )
}

export default Responsiveworkingprocess