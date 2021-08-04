import foto1 from "./images/foto1.png";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import logo from './logo.svg';

const Sobrenos = () => {
    return ( 
        <div className="sobrenos">
            <img src= {logo} style={{ width: "100px", margin: "0", float:"right"}} alt="" />
            <img src= {logo} style={{ width: "100px", margin: "0", float:"left"}} alt="" />
            <div className="container p-4">
                <CardGroup className="cardMembers">
                    <Card>
                        <Card.Img variant="top" src={foto1} />
                        <Card.Body>
                        <Card.Title>CEO</Card.Title>
                            <Card.Text>
                                Francisco Antunes
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Connosco desde 2012</small>
                        </Card.Footer>
                    </Card>
                    &nbsp;
                    &nbsp;
                    <Card>
                        <Card.Img variant="top" src={foto1} />
                        <Card.Body>
                        <Card.Title>Coordenar Técnico</Card.Title>
                            <Card.Text>
                                Romeu Lopes
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Connosco desde 2015</small>
                        </Card.Footer>
                    </Card>
                    &nbsp;
                    &nbsp;
                    <Card>
                        <Card.Img variant="top" src={foto1} />
                        <Card.Body>
                        <Card.Title>Vice Presidente</Card.Title>
                            <Card.Text>
                                Kelly Moreira
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Connosco desde 2015</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
            <div className="container px-4 py-4">

            <h1 className="pb-2">Company</h1> 
                <br />
                <p className="text-start ">
                WE ARE YOUR REACT COMPANY !
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo corrupti animi, ad ullam iure earum neque? Distinctio dolores dolore, perspiciatis laborum obcaecati quod qui necessitatibus mollitia praesentium laboriosam quas.
                Exercitationem quis, laborum expedita voluptas maiores maxime non deleniti ipsum, quod ullam error beatae! Provident asperiores repudiandae atque explicabo molestias ad. Cupiditate voluptatum voluptate quaerat facere alias nulla nostrum placeat!
                </p>
            </div>
        </div>


     );
}
 
export default Sobrenos;