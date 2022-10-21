import React, { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const user = { displayName: "Akash Ali" };

  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = { user, googleLogin };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
