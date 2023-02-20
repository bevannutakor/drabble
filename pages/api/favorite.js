import admin from "../Models/firbaseAdmin";
export default async function favorite(req, res){
    if(req.method === "POST"){
        const db = admin.firestore();
        //this only likes the current users post might need to save user id in each post
        const userDrabbleRef = await db.collection('user').doc(req.body.posterUid).collection("UserDrabbles").doc(req.body.postId);

        const AppWideDrabblesRef = await db.collection("AppWideDrabbles").doc(req.body.postId);

        userDrabbleRef.update({
            favorites: admin.firestore.FieldValue.increment(1),
        })

        AppWideDrabblesRef.update({
            favorites: admin.firestore.FieldValue.increment(1)
        })


        //how should username changes be handled in documents
        const favoritedByList = userDrabbleRef.collection("FavoritedBy").doc(req.body.uid);

        favoritedByList.set({
            likedByID: req.body.uid,
            timeLikedAt: admin.firestore.Timestamp.fromDate(new Date())
        })
        
        const favoriteCollection = await db.collection('user').doc(req.body.uid).collection("FavoritedDrabblesList").doc(req.body.postId)

        favoriteCollection.set({
            postId: req.body.postId,
            posterId: req.body.posterUid
        })

        res.status(200).send("Successful post");
    }
}