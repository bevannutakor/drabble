import axios from 'axios';
const favoritePost = async (currentUser, postId, posterUid) => {
    if(currentUser){
        await axios.post('/api/favorite', {
            headers: {
             'Content-Type': 'application/json'
            },
            uid: currentUser.uid,
            posterUid: posterUid,
            postId: postId,
        })
        .then((res) => {
            console.log(res.data);
        })
    }
}

export default favoritePost;