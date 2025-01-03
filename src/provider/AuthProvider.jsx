/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.confiq";
import axios from "axios";
import AuthContext from "./AuthContext";

// export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = async () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("CurrentUser-->", currentUser);
      setLoading(false);
      //   if (currentUser?.email) {
      //     const user = { email: currentUser.email };
      //     axios
      //       .post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
      //         withCredentials: true,
      //       })
      //       .then((res) => {
      //         // console.log(res.data),
      //         setLoading(false);
      //       });
      //   } else {
      //     axios
      //       .post(
      //         `${import.meta.env.VITE_API_URL}/logout`,
      //         {},
      //         {
      //           withCredentials: true,
      //         }
      //       )
      //       .then((res) => {
      //         // console.log(res.data),
      //         setLoading(false);
      //       });
      //   }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createNewUser,
    userSignIn,
    googleSignIn,
    signOutUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
