import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication()
const useFirebase = () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const [name, setName] = useState('')
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                const user = result.user
                console.log(user);
            })
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleFormcontrol = e => {
        e.preventDefault()
        console.log(email, password);
        if (password.length < 6) {
            setError('password must be 6 charactar long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must have a minimum of two upper cases ')
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('The password will contain a minimum of one special symbols (!@#$&*)')
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password)
    }

    const processLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUser(user)
                setError('')
                setUserName()
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const createNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUser(result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }





    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    const toggolLogin = e => {
        setIsLogin(e.target.checked);
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    return {
        name,
        handleNameChange,
        user,
        email,
        password,
        signInUsingGoogle,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleFormcontrol,
        error,
        toggolLogin,
        isLogin
    }


}


export default useFirebase;