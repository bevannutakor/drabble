import React, {useEffect, useState } from 'react';
import { firebase } from '../pages/Models/firebaseConfig';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
    }, [])
    return (
        <UserContext.Provider value={{ currentUser }}>
            { children }
        </UserContext.Provider>
    )
}