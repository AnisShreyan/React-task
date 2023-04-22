import { createContext, useContext, useState } from "react";
import { firebaseApp } from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const FirebaseContext = createContext();

export const useFirebase = () => useContext(FirebaseContext);

const auth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
  const SignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      }
    );
  };

  const SignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    });
  };

  const SignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    });
  };

  const SignUpwithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    });
  };

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      setUser(user);
      // ...
    } else {
      // User is signed out
      // ...
      setUser(null)
    }
  });

  return (
    <FirebaseContext.Provider
      value={{ SignUp, SignIn, SignOut, SignUpwithGoogle, user }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
