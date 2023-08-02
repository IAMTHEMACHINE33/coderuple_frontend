import axios from 'axios'
import Swal from 'sweetalert2'
import { publicRequest } from '../requestMethods'

export async function postContactUsApi(props) {
    console.log(props)
    await publicRequest.post("inquiry/add/", props?.data)
        .then(res => {
            if (res?.data?.success) {
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
            }
            props.setSubmitting(false)
            props.reset();
        })
        .catch(err => console.log(err))
}