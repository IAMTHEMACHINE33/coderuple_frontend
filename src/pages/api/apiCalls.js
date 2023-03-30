import axios from 'axios'
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