import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase";

import {
    createUserWithEmailAndPassword, onAuthStateChanged, signOut,
    signInWithEmailAndPassword, sendPasswordResetEmail,
    updateEmail,
    updatePassword,
}
    from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [Loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const updateUserEmail = (email) => {
        return updateEmail(auth.currentUser , email);
      };

    const updateUserPassword = (password) => {
    return updatePassword(auth.currentUser, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
            return () => {
                unsubscribe();
            }
        })
    }, []);
    return <AuthContext.Provider value={{ 
        currentUser, 
        signup, 
        logOut, 
        logIn, 
        resetPassword , 
        updateUserEmail , 
        updateUserPassword
        }}>

        {!Loading && children}

    </AuthContext.Provider>
}



export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}