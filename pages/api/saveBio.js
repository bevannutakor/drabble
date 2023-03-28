import admin from '../../Models/firbaseAdmin';
export default async function saveBio(req, res){
    if(req.method === "POST"){
        const db = admin.firestore();
        const userRef = db.collection('user').doc(req.body.uid);
        userRef.update({
            bio: req.body.bio
        })
        res.status(200).send("Bio Updated!");
    }
}