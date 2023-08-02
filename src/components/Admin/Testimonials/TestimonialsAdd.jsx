import ConfirmationButtonsForCreate from '@/components/UI/Modals/ModalConfirmationButtonsCRUD/ConfirmationButtonsForCreate';
import { postTestimonialsApi } from '@/pages/api/admin/testimonialsApiCalls';
import { publicRequest } from '@/pages/api/requestMethods';
import { TextField } from '@mui/material';
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const TestimonialsAdd = (props) => {
    const router = useRouter();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        publicRequest.post("testimonial/add", data)
            .then(res => {
                console.log(res)
                props?.setNewData(data)
            })
            .catch(err => { console.log(err) })

    };

    return (
        <>
            <div className='flex w-full justify-between flex-col gap-2'>
                <form className='shadow-md bg-white p-4 flex flex-col gap-4 justify-end' onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Company Name"
                        id="outlined-size-small"
                        size="small"
                        fullWidth
                        {...register("company_name", { required: true })}
                    />
                    <TextField
                        label="Description"
                        id="outlined-size-small"
                        size="small"
                        fullWidth
                        multiline
                        maxRows={8}
                        {...register("description", { required: true })}
                    />
                    {/* <button type="submit" placeholder="sUBMIT" >Submit</button> */}
                    <ConfirmationButtonsForCreate id={props?.id} />
                </form>
            </div>
        </>
    )
}

export default TestimonialsAdd