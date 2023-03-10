import axios from 'axios';
async function postToken(token){
    let url = "/api/auth";
    
    const response = await axios.post(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        token: token
    }) 
    return response
}

export default postToken;