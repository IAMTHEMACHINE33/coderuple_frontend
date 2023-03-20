import Image from "next/image"

const Service = (props) => {
    console.log("services", props)
    return (
        <div className={`flex w-full items-center justify-center gap-20 px-28 ${props.flip ? "flex-row-reverse" : ""} }`} >
            <Image src={props.img} className="w-96" />
            <div className="">
                <h3 className="text-center text-4xl mb-3">Web development</h3>
                <span className="text-xl">Our team of highly trained, professional developers will help you create the perfect website for your business. </span>
            </div>
        </div >
    )
}

export default Service