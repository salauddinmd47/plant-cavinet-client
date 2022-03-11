import InitializeAuthentication from "../Firebase/IntializeAuthentication";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
InitializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState();
  const [admin, setAdmin] = useState(false)

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, location, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const newUser = { email: email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
          saveUser(email, name, 'POST')
        const destination = location?.state?.from || "/";
        navigate(destination);
        setSuccess("User Registered Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
        setSuccess("");
      })
      .finally(() => setLoading(false));
  };
  const loginUser = (email, password, location, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setSuccess("Login Successfully");
        const destination = location?.state?.from || "/";
        navigate(destination);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      });
  };
  const googleSignIn = (location, navigate) => {
    setLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT')
        const destination = location?.state?.from || "/";
        navigate(destination);
        setLoading(false);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  const saveUser = (email, displayName, method)=>{
    const user ={email,displayName}
    fetch(' https://whispering-bayou-14441.herokuapp.com/users',{
      method:method,
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data=>{ 

    })
  }

  useEffect(()=>{
    fetch(`http://localhost:4000/users/${user.email}`)
    .then(res=> res.json())
    .then(data => {
      console.log(data.admin)
      setAdmin(data.admin)})
  },[user.email])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        setUser(user);
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe;
  }, []);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setLoading(false);
      })
      .catch((error) => {});
  };
  return { registerUser, admin, loginUser, user, logOut, loading, success,googleSignIn };
};

export default useFirebase;
