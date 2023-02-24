import admin from '../../Models/firbaseAdmin';
export default async function generateEmoji(req, res){
    const db = admin.firestore();
    const emojiReference = await db.collection("EmojiList").get();

    const snapshot = emojiReference.docs.map((doc) => doc.data());

    res.status(200).send(snapshot);
}