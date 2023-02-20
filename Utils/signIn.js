import { firebase } from '../pages/Models/firebaseConfig';
import postToken from './postToken';
async function signIn(email, password){
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (res) => {
            if(res && res.user){
                return await postToken(await res.user.getIdToken());
            }
            return null;
        })
}

export default signIn;