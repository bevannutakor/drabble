import axios from 'axios';

import { firebase } from '../Models/firebaseConfig';
import postToken from './postToken';

async function sendUserInfo(uid, username){
    let url = "/api/saveUser";
    const response = await axios.post(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        uid: uid,
        username: username
    })
    return response;
}

async function signUp(email, username, password){
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (res) => {
            if(res && res.user){
                res.user.updateProfile({
                    displayName: username
                })
                console.log(res.user)
                return await postToken(await res.user.getIdToken()) && await sendUserInfo(await res.user.uid, username);

            }
            return null;
        })
}

export default signUp;