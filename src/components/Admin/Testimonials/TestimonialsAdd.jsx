import { TextField } from '@mui/material';

const TestimonialsAdd = () => {
    return (
        <div className='flex w-full justify-between flex-col gap-2'>
            <form className='shadow-md bg-white p-4 flex flex-col gap-4 justify-end'>
                <TextField
                    label="Company Name"
                    id="outlined-size-small"
                    size="small"
                    fullWidth
                />
                <TextField
                    label="Description"
                    id="outlined-size-small"
                    size="small"
                    fullWidth
                    multiline
                    maxRows={8}
                />
            </form>
        </div>
    )
}

export default TestimonialsAdd