import admin from "../../Models/firbaseAdmin"

const db = admin.firestore();
async function likedDrabblesSnapshot(userId){
    const userRef = await db.collection("user").doc(userId);
    const drabbleIdSnapshot = await userRef.collection("FavoritedDrabblesList").get();

    let drabbleFavorites = await drabbleIdSnapshot.docs.map((doc) => doc.data());
    
    return drabbleFavorites;
}

export default async function getFavorite(req, res){
    if(req.method === "POST"){
        let likedDrabbles = await likedDrabblesSnapshot(req.body.uid);
        //let likedDrabblesInfo = [];
        //const AppWideDrabblesRef = await db.collection("AppWideDrabbles");

        let likedDrabblesArray = await Promise.all(likedDrabbles.map(
            async (post) => {
                let AppWideDrabblesRef = await db.collection("AppWideDrabbles").doc(post.postId).get();

                return AppWideDrabblesRef.data().text
            }
        ));

        res.status(200).send(likedDrabblesArray);
    }
}