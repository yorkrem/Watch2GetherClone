import axios from 'axios';

export const Login = async (token) => {
    // Send token to Flask backend for verification
    return await axios.post('http://localhost:8000/account/login', { idToken: token })
    .then((res) => {
        console.log(res)
        return res
    })
    .catch((error)=> {
        console.log(error)
    });
}

