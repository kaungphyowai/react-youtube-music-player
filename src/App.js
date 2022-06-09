import React from "react";
import { BrowserRouter as Router, 
         Routes, 
         Route } from "react-router-dom";
import LoginGoogle from "./Pages/LoginGoogle";
import MusicInput from "./Pages/MusicInput";
import MusicOutput from "./Pages/MusicOutput";

function App (){
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginGoogle /> }/>
                    <Route path="/music-input" element={<MusicInput />}/>
                    <Route path="/music-output" element={<MusicOutput />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;