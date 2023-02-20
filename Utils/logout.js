import { firebase } from "../pages/Models/firebaseConfig";
import destroyUserCookie from './destroyUserCookie';

async function logout(){
    return firebase.auth().signOut()
        .then(async () => {
            console.log("logged out")
            await destroyUserCookie();
        }).catch((err) => {
            console.log(err);
        }) 
}

export default logout;