import axios from "axios";

export const register = (formData) => {
    axios.post('http://localhost:8000/account/create', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    });
}