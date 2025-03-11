import axios from "axios";


const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
        'Authorization': `${import.meta.env.VITE_API_KEY}`
    }
})

export const news = {
    getHeadlines(params) {
        return instance.get('top-headlines?country=us', { params })
    }
}