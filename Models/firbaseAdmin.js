const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.NEXT_PUBLIC_SERVICEACCOUNT)
if(!admin.apps.length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
}

export default admin;
