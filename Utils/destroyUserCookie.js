import axios from 'axios';

async function destroyUserCookie(){
    let url = "/api/destroyCookie";
    const response = await axios.delete(url);
    console.log(response);
    return response.status;
}

export default destroyUserCookie;
