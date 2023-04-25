import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function UserProfile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError("")
        try {
            await logout()
            navigate('/')
        } catch {
            setError("Failed to log out")
        }
    }

    // <div className="pt-20">
    //     <h2 className="text-center mb-4">Profile</h2>

    //     {error && <Alert variant="danger">{error}</Alert>}

    //     <strong>Email:</strong> {currentUser.email}
    //     <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
    //         Update Profile
    //     </Link>
    //     <div className='w-100 text-center mt-2'>
    //         <button variant='link' onClick={handleLogout}>
    //             Logout
    //         </button>
    //     </div>
    // </div>

    return (
        <div>
            <section className="vh-100" styles={{ backgroundColor: "#f4f5f7" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" styles={{ borderRadius: ".5rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white"
                                        styles={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                        <img src="https://emojis.wiki/thumbs/emojis/cow-face.webp"
                                            alt="Avatar" className="img-fluid my-5" styles={{ width: "80px" }} />
                                        <h5>Username prop</h5>
                                        <p>Max dungeon points acquired</p>
                                        <i className="900000 points"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Email</h6>
                                                    <p className="text-muted">Email: {currentUser.email}</p>
                                                </div>
                                            </div>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <p className="text-muted">Points: 9825</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col text-center">
                                        <Link to="/update-profile" className="me-2 mt-3 login-button" style={{ textDecoration: "none" }}>
                                            Update Profile
                                        </Link>
                                        <button className="login-button text-center" variant='link' onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
