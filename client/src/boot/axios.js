import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

export default ({
    Vue
}) => {
    // Axios qui est un client HTTP
    axios.defaults.baseURL = 'http://127.0.0.1:5000/api'
    axios.defaults.withCredentials = true
    Vue.prototype.$axios = axios
}