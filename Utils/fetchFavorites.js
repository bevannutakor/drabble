import axios from 'axios';
const getFavorites =  async (currentUserId, url) => {
    if(currentUserId != ""){
        await axios.post(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            uid: currentUserId
        })
        .then((res) => {
            return res.data
        })
    }
}

export default getFavorites