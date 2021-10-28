import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logOut,
        setError,
        setUser
    }
}

export default useFirebase;