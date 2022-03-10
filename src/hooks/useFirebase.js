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
        const destination = location?.state?.from || "/";
        navigate(destination);
        setLoading(false);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

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
  return { registerUser, loginUser, user, logOut, loading, success,googleSignIn };
};

export default useFirebase;
