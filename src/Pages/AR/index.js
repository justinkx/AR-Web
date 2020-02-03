import React, {useEffect} from 'react'
import './styles.css';
import './camera.js';
import { useHistory } from "react-router-dom";

export default function ARScreen() {
    let history = useHistory();
    useEffect(() => {
        
    }, []);
    function back() {
        document.querySelectorAll('video,#arjsDebugUIContainer').forEach(ele => {
            ele.remove();
        });
        history.goBack();
    }
    return (

        <div className="arContainer">
            <div className="header">
                <h1 onClick={()=> {
                   back()
                }}>
<button className="backButton">{'<'}</button>
                    Back To Home</h1>
            </div>
            <div className="arContent">
            <a-scene embedded arjs='sourceType: webcam;'>
    <a-marker preset="hiro">
        <a-box position='0 0.5 0' material='color: yellow;'></a-box>
    </a-marker>
    <a-entity id="camera" camera1></a-entity>
  </a-scene>
            </div>
          
  </div>
    )
}
