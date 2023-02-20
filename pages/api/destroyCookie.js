import { serialize } from 'cookie';
export default function destroyCookie(req, res) {
    if(req.method === 'DELETE'){
        try{
            const options = {maxAge: -1, httpOnly: true, secure: "false",path: '/'};
            //change secure param for deploy
            res.setHeader('Set-Cookie', serialize('user', "nothing", options));
            res.status(200).end(JSON.stringify({ response: 'Succesful log out' }))

        } catch (err){
            res.status(401).send("There was an issue with the logout")
        }
    }
}