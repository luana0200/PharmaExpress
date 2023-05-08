import Carousel from 'react-bootstrap/Carousel'

import './style.css'
import escovadental from '../bootstrap/imagens/escovadente.webp'
import Pampers from '../bootstrap/imagens/Pampers.jpg'
import Eudora from '../bootstrap/imagens/mae.jpg'

import Container from 'react-bootstrap/esm/Container'

export default function CarroselHome() {
    return (
       <Container>
        <Carousel className='carroselhome'>
            <Carousel.Item>
                <img width={'300px'} src={escovadental} alt='escova dental colgate' />
            </Carousel.Item>

            <Carousel.Item>
                <img width={'300px'} src={Pampers} alt='Fralda Pamapers pequeno' />
            </Carousel.Item>

            <Carousel.Item>
                <img width={'300px'} src={Eudora} alt='Eudora' />
            </Carousel.Item>


        </Carousel>
      </Container>
    );
}
