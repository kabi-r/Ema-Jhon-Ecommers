import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.init';


export const authContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser ] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password, name)=>{
        return createUserWithEmailAndPassword(auth, email, password, name)
    }

    const singIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        signOut(auth)
    }
    //observe user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        // stop onservin
        return ()=>{
            return unsubscribe()
        }
    },[]) 
    const AuthInfo = {
        loading,
        user,
        createUser, 
        singIn, 
        logOut
    }
    return (
        <authContext.Provider value={AuthInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;