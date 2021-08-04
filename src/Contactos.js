import { Card, CardGroup } from 'react-bootstrap';
import logo from './logo.svg';

const Contactos = () => {
    return (
        <div className="contactos">
            <img src= {logo} style={{ width: "100px", margin: "0", float:"right"}} alt="" />
            <img src= {logo} style={{ width: "100px", margin: "0", float:"left"}} alt="" />

            <div className="container px-4 py-4">

                <h1>Contacts</h1> 
                <br />
                <h6 className="text-start ">
                Email: company.react@email.com
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo corrupti animi, ad ullam iure earum neque? Distinctio dolores dolore, perspiciatis laborum obcaecati quod qui necessitatibus mollitia praesentium laboriosam quas.
                Exercitationem quis, laborum expedita voluptas maiores maxime non deleniti ipsum, quod ullam error beatae! Provident asperiores repudiandae atque explicabo molestias ad. Cupiditate voluptatum voluptate quaerat facere alias nulla nostrum placeat!
                </h6>
            </div>

            <div className="container px-4 py-4">
                <CardGroup className="col-12">
                        <Card className="card bg-dark">
                            <Card.Body className="card-img-overlay pb-6">
                                <Card.Title className="card-title">Fale connosco</Card.Title>
                            </Card.Body>
                        </Card>
                        <br />
                        <br/>
                            <Card.Text className="text-start pt-4 text-justify">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum hic accusamus corporis ea dolor laudantium eum inventore, cum voluptates, rerum nesciunt itaque magnam aut voluptate libero, est doloribus explicabo!
                               Voluptatem facilis quod ullam molestias quas reiciendis architecto doloribus! Vero rerum adipisci ut. Repellat corporis doloribus delectus unde dolore saepe quae fuga, quisquam suscipit earum at laudantium voluptatibus ullam? Perspiciatis?
                               Atque nesciunt quidem rem cum inventore beatae consequatur quisquam! Consequuntur totam, omnis velit facere, eveniet vero atque fugit placeat quam accusantium, odit eligendi maiores sunt illum ipsa eum praesentium beatae.
                            </Card.Text>
                </CardGroup><br /><br /><br />
            </div>

        </div>
      );
}
 
export default Contactos;