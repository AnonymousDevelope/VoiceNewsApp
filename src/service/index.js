/* eslint-disable no-async-promise-executor */
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchNews = (text) => {
	 const today = new Date();
  
  const year = today.getFullYear();
  const month = today.getMonth().toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}`;
    return new Promise(async(resolve, reject) => {
        try {
            const response = await axiosInstance.get('/everything', {
                params: {
                    q: text ? text : 'latest news',
                    from: formattedDate,
                    sortBy: 'publishedAt',
                    apiKey: import.meta.env.VITE_API_KEY,
                },
            });
            resolve(response.data); // resolve with response data
        } catch (error) {
            reject(error);
        }
    });
}

export default fetchNews;
