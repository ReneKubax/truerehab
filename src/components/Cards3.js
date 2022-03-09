import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import img6 from '../images/equipos.jpeg';



function Cards3() {
  return (
    <div className='cards'>
      <h1>Nuestros precios</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img2}
              text='Q150.00 + Gasolina(Depende si es a domicilio y la distancia) por 50 Minutos de terapia.'
              label='Terapia basica'
              path='/services'
            />
            <CardItem
              src={img3}
              text='Q800.00 + Gasolina(Depende si es a domicilio y la distancia) por 6 sesiones de terapias de 50 minutos cada una'
              label='Terapia intermedia '
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img6}
              text='Q1250.00 + Gasolina(Depende si es a domicilio y la distancia) por 10 sesiones de terapias de 50 Minutos cada una.'
              label='Terapia avanzada'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards3;