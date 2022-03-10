import axios from 'axios';

const customAxios = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL
})

export const Fetcher = async (url) => {
	return await customAxios.get(url).then((res) => res.data);
}