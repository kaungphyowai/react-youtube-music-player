import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import LoginGoogle from "./Pages/LoginGoogle";
import MusicInput from "./Pages/MusicInput";
import MusicOutput from "./Pages/MusicOutput";


function App() {
    const [loggedIn, setLoggedIn] = useState(getAuth().currentUser)

    onAuthStateChanged(getAuth(), (user) => {
        setLoggedIn(user)
    })
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={loggedIn ? <MusicInput /> : <LoginGoogle />} />
                    <Route path="/music-output" element={<MusicOutput />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;