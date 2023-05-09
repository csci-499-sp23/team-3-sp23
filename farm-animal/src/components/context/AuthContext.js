import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

export const AuthContext = React.createContext()


export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password); //note: we are not setting the user when creating them
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    isLoggedIn
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
      setIsLoggedIn(!!user);
    })
    return unsubscribe
  }, [])


  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}


