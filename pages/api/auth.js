import { serialize } from 'cookie';
import admin from "../Models/firbaseAdmin";


export default async function auth(req, res) {
    //temp
    const expiresIn = 5 * 60 * 1000;
    if(req.method === 'POST'){
        try{
            let idToken = req.body.token;

            const cookie = await admin.auth().verifyIdToken(idToken)
            .then((decodedToken) => {
                // Only process if the user just signed in in the last 5 minutes.
                if(new Date().getTime() / 1000 - decodedToken.auth_time < 5 * 60){
                    return admin.auth().createSessionCookie(idToken, {expiresIn});
                }
                // To guard against ID token theft, require re-authentication.
                res.status(401).send('Sign in required!');
            });

            if(cookie){
                //will need to change secure parameter for deployment
                const options = {maxAge: expiresIn, httpOnly: true, secure: "false",path: '/'};

                res.setHeader('Set-Cookie', serialize('user', cookie, options));
                res.status(200).end(JSON.stringify({ response: 'Succesful log in' }))
            } else {
                res.status(401).send('Invalid authentication');
            }
        } catch(err){
            console.log(err);
        }
    }
}

//logic needs to be done for when cookie expires, log user out
// error handling