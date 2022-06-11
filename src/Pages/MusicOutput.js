import React from "react";
import ReactPlayer from "react-player";
import "../App.css";


function MusicOutput(){

    return(
        <div>
            
          
            <h1>MusicOutput Page</h1>
            <div className="video-playing">
                <ReactPlayer 
                controls
                //insert Url Data
                url= "https://www.youtube.com/watch?v=h1fekckH8uI"
                //insert Url Data
                width="700px"
                height="400px"
                />
            </div>  
        </div>
    )
}

export default MusicOutput;