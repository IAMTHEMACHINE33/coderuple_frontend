import axios from 'axios'
import Swal from 'sweetalert2'
export const publicRequest = axios.create({
    baseURL: "http://localhost:90/",
})
export async function aboutUsApi(props) {
    console.log(props)
    await publicRequest.get("aboutus/get")
        .then(res => { props?.setAboutUs(res) })
        .catch(err => console.log(err))
}
export async function servicesApi(props) {
    console.log(props)
    await publicRequest.get("service/get/")
        .then(res => { props?.setServices(res) })
        .catch(err => console.log(err))
}
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
            props.reset();
        })
        .catch(err => console.log(err))
}