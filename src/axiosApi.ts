import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://kontr-8-default-rtdb.europe-west1.firebasedatabase.app/',
})

export default axiosApi;