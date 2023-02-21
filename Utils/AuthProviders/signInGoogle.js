import { firebase } from '../../Models/firebaseConfig';
import postToken from '../postToken';

async function signInGoogle(){
    let provider = await new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then( async (res) => {
            return await postToken(await res.user.getIdToken());
        }).catch((err) => {
            console.log(err.message);
        })
}

export default signInGoogle;