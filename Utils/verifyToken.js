import admin from '../pages/Models/firbaseAdmin'

//used to share current user state between various components
async function verifyTokenCookie(cookie){
    let isAuth;
    let email = ""
    let userId;
    await admin.auth().verifySessionCookie(cookie, true)
        .then((decoded) => {
            isAuth = true;
            email = decoded.email;
            userId = decoded.uid
        }).catch(() => {
            isAuth = false;
        })    
    return {
        isAuth: isAuth,
        email: email,
        uid: userId
    }    
}

export default verifyTokenCookie;