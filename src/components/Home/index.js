import React from 'react';
// import "./Home.scss"; 
import { Button } from "antd";
import {
    audioCall,
    vdoCallActiv,
    screen
  } from "../../images";

const Home = () => {
    return (
      <div className="container" style={{
        "display": "flex",
        "width": "100%",
        "height": "100vh",
        "justify-content": "center",
        "align-items": "center"
      }}>
          <div className="chatpanel-controls">
              <a href="#" className="image-holder">
                <img
                  src={audioCall}
                  className="control-image"
                />
              </a>
            </div>
            <div className="chatpanel-controls">
              <a href="#" className="image-holder">
                <img
                  src={vdoCallActiv}
                  className="control-image"
                />
              </a>
            </div>
            <div className="chatpanel-controls">
              <a href="#" className="image-holder">
                <img
                  src={screen}
                  className="control-image"
                />
              </a>
            </div>
      </div>
    ) ; 
}

export default Home;
