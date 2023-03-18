import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

//this makes it so that if youre logged out you cannot access the dashboard - when logged out you should be directed to login page
//custom component for a privae route
//1. create a wrapper for our current component
export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
        // it should take all the props as if it was normally passed through route: DIFFERENCE: is render we define our own render
        // if we have a current user then we just want to render out the component that we got passed into our class 
        // pass it through the props otherwise if we dont have current user we do not want to render
    return currentUser ? children : <Navigate to="/login" />;
}
