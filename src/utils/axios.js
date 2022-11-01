import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8001/api/'
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('token')
    console.log(config)
    return config
})

export default instance