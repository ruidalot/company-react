import slide1 from "./images/slide1.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="container-fluid">
                <div className="row p-2">
                    <div className="col-6">
                        <img src={slide1} className="rounded img-fluid" style={{width: '400px'}} alt="" />
                    </div>
                    <div className="col-6">
                        <h6>Siga-nos em:</h6>
                        <Link to="https://www.linkedin.com/in/ruidalot/" rel="noreferrer" target="_blank" className="nav-link footer_icons">
                            <span> Linkedin</span>
                        </Link>
                    </div>
                </div>
            </div>
        
        </div>
     );
}
 
export default Footer;