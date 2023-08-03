import { publicRequest } from "../requestMethods"


export function getTestimonialsApi(props) {
    publicRequest.get("testimonial/get")
        .then(res => {
            props?.setData(res.data.data)
        })
        .catch(err => { console.log(err) })
}


export function postTestimonialsApi(props) {
    publicRequest.post("testimonial/add", props?.data)
        .then(res => {
            console.log(res)
        })
        .catch(err => { console.log(err) })
}

