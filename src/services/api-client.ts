import axios from 'axios'

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "4d5843e7889c4b4a86129cab67cf6f93"
    }
})