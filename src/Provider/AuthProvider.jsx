import { createContext } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Auth/Firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../components/Shared/Hooks/useAxiosPublic";
const Googleprovider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    const GoogleLogin = () => {
        return signInWithPopup(auth, Googleprovider)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const ProfileUpdate = (displayName,photoURL) =>{
        return updateProfile(auth.currentUser,{
            displayName:displayName,
            photoURL:photoURL
        })
    }
    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email:currentUser.email}
                axiosPublic.post("/jwt",userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem("access-token",res.data.token)
                    }
                    else{
                        localStorage.removeItem("access-token")
                    }
                })
            }
            setLoading(false)
        })
        return () => unSubscribe()
    },[])
    const logOut = () =>{
        signOut(auth)
    }
    const authInfo = {
        GoogleLogin,
        createUser,
        LoginUser,
        logOut,
        user,
        loading,
        ProfileUpdate
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;