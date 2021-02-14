import React, { Component } from "react";
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
      <div className="footerdiv">
        <span style={{ color: "orange", fontWeight: "bold", fontSize:"1.5rem" }}>App</span>
        <span style={{ fontWeight: "bold", color:"white", fontSize:"1.5rem" }}>Lab</span>
        <div className="footerlinks">
            <ul>
                <li>Home</li>
                <li>Key Features</li>
                <li>Pricing</li>
                <li>Testiminial</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className="socialicons">
        <i style={{fontSize:"24px", color:"gray"}} className="fa">&#xf09a;</i>
        <i style={{fontSize:"24px", color:"gray"}} className="fa">&#xf099;</i>
        <i style={{fontSize:"24px", color:"white" ,fontWeight:"bolder",transform:"rotate(-30deg)", fontSize:"1.8rem"}} className="fa">#</i>
        <i style={{fontSize:"24px", color:"gray"}} className="fa">&#xf09b;</i>
        </div>
        <div className="copyrighttext">
            <p>Copyright Arifer Rohman Tushar 2019. All right reserved</p>
        </div>
      </div>
    );
  }
}

export default Footer;
