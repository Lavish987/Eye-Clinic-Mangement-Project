import axios from 'axios'
export const USERS_REST_API_URL ="http://localhost:8080";

export const MyAxios=axios.create({
    baseURL:USERS_REST_API_URL,
})