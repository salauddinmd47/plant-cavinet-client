import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
 
 const InitializeAuthentication = ()=> {
     return initializeApp(firebaseConfig);
 }
 export default InitializeAuthentication;