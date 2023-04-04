import TestimonialLists from "./TestimonialLists"
import wave from "./wave.png"

const Testimonials = () => {
    return (
        <div style={{ backgroundImage: `url(${wave.src})`, bottom: '-850px' }} className="h-full absolute w-full">
            <h2 className="mt-72 text-center font-bold text-[96px]">Our Valued Customer</h2>
            <TestimonialLists />
        </div>
    )
}

export default Testimonials