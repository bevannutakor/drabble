import axios from 'axios';
async function postToken(token){
    //temp variable
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