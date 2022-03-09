import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';
import img6 from '../images/equipos.jpeg';



function Cards() {
  return (
    <div className='cards'>
      <h1>Nuestros Servicios</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img2}
              text='Fisioterapia para sobrecarga muscular, esguinces, desgarres o ruptura muscular. Además de tendinitis, fracturas y periostitis.'
              label='Deportistas'
              path='/sign-up'
            />
            <CardItem
              src={img3}
              text='Fisioterapia para lesiones del sistema nervioso, parálisis cerebral, accidente cerebro vascular (derrame), esclerosis múltiple, Guillian Barre, lesión de plexo braquial y parálisis facial.'
              label='Neurólgicas'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img6}
              text='Fisioterapia para cualquier tipo de lesion, ya se sea desde deportiva o por algun otro tipo de circunstancia.'
              label='Lesiones deportivas'
              path='/sign-up'
            />
            <CardItem
              src={img5}
              text='Trabajamos fisioterapia para lesiones de hombro, rodilla, fracturas, sustitución de rodilla o cadera, luxación, manguito rotador.'
              label='Traumatologia'
              path='/sign-up'
            />
            <CardItem
              src={img4}
              text='Fisioterapia para la espalda baja dolorosa, hernias discales, dolor de cuello, dolor de espalda en general, ciática y tortícolis.'
              label='Espalda y Cuello'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;