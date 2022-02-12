import axios from 'axios'

const apiUrl = axios.create({
    // Leave the desired URL uncommented
    baseURL: 'http://pizzaria-miguel.herokuapp.com'
        // baseURL: 'http://localhost:8080'
})

apiUrl.interceptors.request.use((request) => {
    const token = sessionStorage.getItem('token');
    console.log("Set Token Header: ", token)
    if (token) {
        request.headers["Authorization"] = `Bearer ${token}`
    }
    return request
})

export default apiUrl