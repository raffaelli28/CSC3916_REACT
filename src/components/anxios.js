import axios from 'axios'

const instance = axios.create({
    // Here is the backend
    baseURL: "http://localhost:8080"
})

export default instance