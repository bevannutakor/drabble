import admin from "../Models/firbaseAdmin";

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
        let likedDrabblesInfo = [];
        
        for(let i=0; i<likedDrabbles.length; i++){
            const AppWideDrabblesRef = await db.collection("AppWideDrabbles").doc(likedDrabbles[i].postId).get(); 
            
            likedDrabblesInfo.push({
                text: AppWideDrabblesRef.data().text
            })
        }
        res.status(200).send(likedDrabblesInfo);
    }
}