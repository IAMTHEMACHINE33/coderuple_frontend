import Image from 'next/image';
import company from '../../Images/company.jpg';
import { useState } from 'react';

const BlogComponent = (props) => {
    const [state, setState] = useState(false);

    return (
        <div className="flex flex-col gap-12 px-5">
            <h1 className="capitalize text-3xl sm:text-5xl font-medium">{props.heading}</h1>
            <div className="flex flex-col gap-5">
                <Image src={props.image} className="h-60 w-auto rounded-2xl bg-white" alt='image' />
                <span className="font-semibold"><li>January 21, 2021</li></span>
                <p className="font-light text-lg">{props.content}</p>
                {!state && <tag className='font-semibold hover:cursor-pointer hover:tracking-wide' onClick={() => setState(true)}>Continue Reading -&gt; </tag>}
                
                {state && <p className="font-light text-lg">{props.contenttwo}</p>}
            </div>
        </div>
    );
}

export default BlogComponent;
