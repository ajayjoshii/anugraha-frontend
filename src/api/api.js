import axios from "axios"

const API = axios.create({
    // baseURL: "https://anugraha-backends.vercel.app",
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json"
    }
})

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("adminToken")

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

export const getLeaders = async () => {
    const response = await API.get("/api/leaders")
    return response.data
}

export const createLeader = async (data) => {
    const response = await API.post("/api/leaders", data)
    return response.data
}

export const updateLeader = async (id, data) => {
    const response = await API.put(`/api/leaders/${id}`, data)
    return response.data
}

export const deleteLeader = async (id) => {
    const response = await API.delete(`/api/leaders/${id}`)
    return response.data
}

export const getPastoral = async () => {
    const response = await API.get("/api/pastoral")
    return response.data
}

export const getSermons = async () => {
    const response = await API.get("/api/sermons")
    return response.data
}

export default API