import axios from "axios";

export const login = (formData) => {
    return axios.post('http://localhost:8000/account/login', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        localStorage.setItem('username', response.data)
        return response.status === 200
    }).catch((error)=> {
        console.log(error)
        return false
    });
}