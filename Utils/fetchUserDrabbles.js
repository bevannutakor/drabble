import axios from 'axios';
const fetchUserDrabbles = async (currentUserId, url) => {
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

export default fetchUserDrabbles;