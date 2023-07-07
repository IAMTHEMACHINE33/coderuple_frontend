import Image from 'next/image';
import company from '../../Images/company.jpg';

const BlogComponent = (props) => {
    return (
        <div className="flex flex-col gap-12 px-5">
            <h1 className="capitalize text-3xl sm:text-5xl font-medium">{props.heading}</h1>
            <div className="flex flex-col gap-5 ">
                <Image src={company} className="rounded-2xl" />
                <span className="font-semibold"><li>January 21, 2021</li></span>
                <p className="font-light text-lg">{props.content}</p>
            </div>
        </div>
    )
}

export default BlogComponent