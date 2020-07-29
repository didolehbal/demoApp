import axios from "axios"

export const api_url ="localhost:6000"

export default axios.create({
    baseURL:api_url
})

