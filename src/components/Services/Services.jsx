import GearSpinner from "./GearSpinner"
import Service from "./Service"
import service1 from "../../Images/service_computer.png"
import service2 from "../../Images/services_mobile.png"

const Services = () => {
    return (
        <div className="bg-[#6096BA] text-white py-20 pb-96">

            <GearSpinner />
            <h2 className="text-center text-4xl mb-4 font-bold">Services</h2>
            <Service img={service1} flip={false} />
            <Service img={service2} flip={true} />
        </div>
    )
}

export default Services