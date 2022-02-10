import axios from 'axios'

export const apiUrl = axios.create({
    baseURL: 'http://pizzaria-miguel.herokuapp.com'
})

export const devUrl = axios.create({
    baseURL: 'http://localhost:8080'
})

