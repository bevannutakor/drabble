import admin from "../Models/firbaseAdmin";
import { v4 as uuidv4 } from 'uuid';
export default async function newDrabble(req, res){
    const db = admin.firestore();
    if(req.method === "POST"){
        const drabbleDocName = `drabble-${uuidv4()}`;
        const createdAt = admin.firestore.Timestamp.fromDate(new Date());

        const userDrabbleRef = await db.collection('user').doc(req.body.uid).collection("UserDrabbles").doc(drabbleDocName);

        const AppWideDrabblesRef = await db.collection("AppWideDrabbles").doc(drabbleDocName);

        AppWideDrabblesRef.set({
            text: req.body.drabble,
            emojis: '',
            favorites: 0,
            createdAt: createdAt,
            private: false,
            postId: drabbleDocName,
            userId: req.body.uid
        })

        //may not need this and just pull all drabbles from appwide refernce
        userDrabbleRef.set({
            text: req.body.drabble,
            emojis: '',
            favorites: 0,
            createdAt: createdAt,
            private: false,
            postId: drabbleDocName,
            userId: req.body.uid
        })
        res.status(200).send("Successful post");
    }
}
