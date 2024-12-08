import axios from "axios";


const url = "http://api.weatherstack.com/current?access_key=64f2540d1daa2dd1c8184268596b8532&query='Pune'"

axios.get(url).then(response => {
    console.log(response.data)
    console.log(response)
})
