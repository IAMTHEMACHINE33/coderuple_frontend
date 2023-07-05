import Image from 'next/image';
import company from '../../Images/company.jpg';

const BlogComponent = () => {
    return (
        <div className="flex flex-col gap-12 px-5">
            <h1 className="capitalize text-3xl sm:text-5xl font-medium">Mobile Development</h1>
            <div className="flex flex-col gap-5 ">
                <Image src={company} className="rounded-2xl" />
                <span className="font-semibold"><li>January 21, 2021</li></span>
                <p className="font-light text-lg">Our passion and drive to deliver quality solutions have taken us to the boardroom of a 200-year-old company and coffee shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing, and Kathmandu. We love the challenge to deliver the best possible solution using the latest and future technologies.</p>
            </div>
        </div>
    )
}

export default BlogComponent