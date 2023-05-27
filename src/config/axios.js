import axios from 'axios'
import { userKey } from '@/helper'

const success = res => res
const error = err => {
    if (401 === err.response.status || err.response.data.code === 788) {
        localStorage.removeItem(userKey);
        window.location = '/auth';
    } else {
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success, error)