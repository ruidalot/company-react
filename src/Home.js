import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";
import slide4 from "./images/slide4.png";
import foto1 from "./images/foto1.png";
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron  from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import { CardGroup} from "react-bootstrap";
import logo from './logo.svg';


const Home = () => {
    
    return (
        <div className="home">
            <Carousel nextLabel='' prevLabel='' touch= {true} indicators={true}>
                <Carousel.Item  >
                    <img className="d-block w-100" src={slide1} alt="First slide"/>
                    <Carousel.Caption>              
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slide2} alt="Second slide" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100" src={slide3} alt="Third slide" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slide4} alt="Fourth slide" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            
            <img src= {logo} style={{ width: "100px", margin: "0", float:"right"}} alt="" />
            <img src= {logo} style={{ width: "100px", margin: "0", float:"left"}} alt="" />
            <Jumbotron className="container" >
                <h1>Novidades</h1> 
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo corrupti animi, ad ullam iure earum neque? Distinctio dolores dolore, perspiciatis laborum obcaecati quod qui necessitatibus mollitia praesentium laboriosam quas.
                Exercitationem quis, laborum expedita voluptas maiores maxime non deleniti ipsum, quod ullam error beatae! Provident asperiores repudiandae atque explicabo molestias ad. Cupiditate voluptatum voluptate quaerat facere alias nulla nostrum placeat!
                </p>
            </Jumbotron>
                <br />


            {/* cards */}
            <div className="container">

            <CardGroup className="cardMembers p-4">
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


        </div> 

     );
}
    

 
export default Home;



        