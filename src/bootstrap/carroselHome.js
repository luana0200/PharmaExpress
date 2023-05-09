import Carousel from 'react-bootstrap/Carousel';

import Container from 'react-bootstrap/Container'

import './style.css'
import escovadental from '../bootstrap/imagens/escovadente.webp'
import Pampers from '../bootstrap/imagens/Pampers.jpg'
import Eudora from '../bootstrap/imagens/mae.jpg'

export default function CarroselHome() {
    return (
        <Carousel>
            <Carousel.Item>
            <div class="carroselhome">
                        <img className="d-block w-100" src={escovadental} />
                    </div>
            </Carousel.Item>

            <Carousel.Item>
                    <div class="carroselhome">
                        <img className="d-block w-100" src={Pampers} />
                    </div>

            </Carousel.Item>
            <Carousel.Item>
                    <div class="carroselhome">
                        <img className="d-block w-100" src={Eudora} />
                    </div>
            </Carousel.Item>
        </Carousel>
    );
}
