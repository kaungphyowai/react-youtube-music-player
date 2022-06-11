import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";




function MusicInput(){
    let navigate = useNavigate()
    function handleClick(){
        navigate("/music-output")
    }
    
    const[formData, setFormData] = React.useState({
        ytubeUrl: ""
    })
    
    
    
    function handleChange(event){
           const {name, value} = event.target;
           setFormData(prevFormData => ({
               ...prevFormData,
               [name]: value
           }))
    }

    function handleSubmit(event){
            event.preventDefault();
            //get URLdata from HERE
            // data={formData.ytubeUrl}
            console.log(formData)
            //get URLdata from HERE
    }
    
    return(
        <div>
            <h1>Music-Input Page</h1>
            <button className="toOutputPg"
                    onClick={handleClick}
            >Watch Playlist</button>
              <form className="inputForm" onSubmit={handleSubmit}>
                <div className="inputCnt">
                    <input 
                        className="inputTxt"
                        placeholder="url here"
                        onChange={handleChange}
                        type="text"
                        name="ytubeUrl"
                    />
                    <br /><br />
                    <button className="inputBtn">Confirm</button>
                </div>
                
            </form>
        
        </div>
    )
}

export default MusicInput;