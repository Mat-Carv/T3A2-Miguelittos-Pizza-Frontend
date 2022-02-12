import axios from 'axios'

const apiUrl = axios.create({
    // Leave the desired URL uncommented
<<<<<<< Updated upstream:src/config/api.js
       baseURL: 'http://pizzaria-miguel.herokuapp.com'
    // baseURL: 'http://localhost:8080'
=======
    // baseURL: 'http://pizzaria-miguel.herokuapp.com'
    baseURL: 'http://localhost:8080'
>>>>>>> Stashed changes:MiguelittosPizzaFrontEnd/src/config/api.js
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