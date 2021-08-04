import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import portrait from './images/portrait.jpeg';
import logo from './logo.svg';


const Equipa = () => {
    return ( 
        <div>
            <img src= {logo} style={{ width: "100px", margin: "0", float:"right"}} alt="" />
            <img src= {logo} style={{ width: "100px", margin: "0", float:"left"}} alt="" />
            <div className="container text-center p-5">
                <h3>A Nossa Equipa</h3>
            </div>
            <div className="container">
                <CardGroup className="card-deck">
                    <Card className="card bg-secondary">
                    <Card.Img className="card-img-top img-fluid" src={ portrait } alt="" />
                        <Card.Body className="card-img-overlay text-start">
                            <Card.Title className="card-text text-dark ">Sr. Vítor<br/></Card.Title>
                            <Link to="#" className="btn btn-primary ">Ver perfil</Link>
                        </Card.Body> 
                    </Card>
                    <Card className="card bg-secondary">
                    <Card.Img className="card-img-top img-fluid" src={ portrait } alt="" />
                        <Card.Body className="card-img-overlay text-start">
                            <Card.Title className="card-text text-dark ">Sr. Vítor<br/></Card.Title>
                            <Link to="#" className="btn btn-primary ">Ver perfil</Link>
                        </Card.Body> 
                    </Card>
                    <Card className="card bg-secondary">
                    <Card.Img className="card-img-top img-fluid" src={ portrait } alt="" />
                        <Card.Body className="card-img-overlay text-start">
                            <Card.Title className="card-text text-dark ">Sr. Vítor<br/></Card.Title>
                            <Link to="#" className="btn btn-primary ">Ver perfil</Link>
                        </Card.Body> 
                    </Card>
                    
                </CardGroup><br />
                <CardGroup className="card-deck">
                    <Card className="card bg-secondary">
                    <Card.Img className="card-img-top img-fluid" src={ portrait } alt="" />
                        <Card.Body className="card-img-overlay text-start ">
                            <Card.Title className="card-text text-dark ">Sr. Vítor<br/></Card.Title>
                            <Link to="#" className="btn btn-primary ">Ver perfil</Link>
                        </Card.Body> 
                    </Card>
                    <Card className="card bg-secondary">
                    <Card.Img className="card-img-top img-fluid" src={ portrait } alt="" />
                        <Card.Body className="card-img-overlay text-start">
                            <Card.Title className="card-text text-dark ">Sr. Vítor<br/></Card.Title>
                            <Link to="#" className="btn btn-primary ">Ver perfil</Link>
                        </Card.Body> 
                    </Card>
                    <Card className="card bg-secondary">
                    <Card.Img className="card-img-top img-fluid" src={ portrait } alt="" />
                        <Card.Body className="card-img-overlay text-start">
                            <Card.Title className="card-text text-dark ">Sr. Vítor<br/></Card.Title>
                            <Link to="#" className="btn btn-primary ">Ver perfil</Link>
                        </Card.Body> 
                    </Card>
                    
                </CardGroup><br />
                <CardGroup className="card-deck">
                    <Card className="card bg-secondary">
                    <Card.Img className="card-img-top img-fluid" src={ portrait } alt="" />
                        <Card.Body className="card-img-overlay text-start">
                            <Card.Title className="card-text text-dark ">Sr. Vítor<br/></Card.Title>
                            <Link to="#" className="btn btn-primary ">Ver perfil</Link>
                        </Card.Body> 
                    </Card>
                    <Card className="card bg-secondary">
                    <Card.Img className="card-img-top img-fluid" src={ portrait } alt="" />
                        <Card.Body className="card-img-overlay text-start">
                            <Card.Title className="card-text text-dark ">Sr. Vítor<br/></Card.Title>
                            <Link to="#" className="btn btn-primary ">Ver perfil</Link>
                        </Card.Body> 
                    </Card>
                    <Card className="card bg-secondary">
                    <Card.Img className="card-img-top img-fluid" src={ portrait } alt="" />
                        <Card.Body className="card-img-overlay text-start">
                            <Card.Title className="card-text text-dark ">Sr. Vítor<br/></Card.Title>
                            <Link to="#" className="btn btn-primary ">Ver perfil</Link>
                        </Card.Body> 
                    </Card>
                    
                </CardGroup><br />
            </div>
        </div>

     );
}
 
export default Equipa;