import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import user from "../img/user.png";

function Home () {

  return (
    <section >
      <div>
        <button>Log-in</button>
      </div>

      <div>
      <h1>Contru-IT</h1>
            <p>
              lorem ipsimasd asd asd s
            </p>

            <img src={user} alt="" />
      </div>
    </section>
  )
}

export default Home;
