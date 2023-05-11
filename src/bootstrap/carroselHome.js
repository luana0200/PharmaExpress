import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';

import './style.css'
import escovadental from '../bootstrap/imagens/escovadente.webp'
import Pampers from '../bootstrap/imagens/Pampers.jpg'
import Eudora from '../bootstrap/imagens/mae.jpg'


export default function CarroselHome() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
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

