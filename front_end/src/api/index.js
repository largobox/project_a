import axios from 'axios'

export default {
    fetchPeople: (action) => {
        return axios.get(action.url).then(res => res.data)
    }
}