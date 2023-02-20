import admin from "../Models/firbaseAdmin";
export default async function saveUser(req, res){
    const db = admin.firestore();
    if(req.method === "POST"){
        const userRef = await db.collection('user').doc(req.body.uid)
        userRef.set({
            username: req.body.username,
            userPlan: "Free tier"
        })
    }
    res.status(200).send("Successful user creation");
}

