import admin from "../Models/firbaseAdmin";
async function getAllDrabbleSnapshots(userId){
    const db = admin.firestore();
    const userRef = await db.collection("user").doc(userId);
    const snapshot = await userRef.collection("UserDrabbles").get();
    return snapshot.docs.map(doc => doc.data());   
}

export default async function getUserDrabbles(req, res){
    if(req.method === "POST"){
        let userDrabbles = await getAllDrabbleSnapshots(req.body.uid);
        res.status(200).send(userDrabbles);
    }
}