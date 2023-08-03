import axios from 'axios'

const getAxiosInstance = () => {
    if (typeof window !== 'undefined') {

        if (localStorage.getItem("token")) {
            return axios.create({
                baseURL: "http://localhost:90/",
                headers: {
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            })
        }
    } else {
        return axios.create({
            baseURL: "http://localhost:90/",
        })
    }

}


export const publicRequest = getAxiosInstance();