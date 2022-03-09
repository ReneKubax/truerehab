import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/tato2.jpeg'
import img2 from '../images/wil.jpeg'
import img3 from '../images/sara.jpeg'
function Cards2() {
    return (
      <div className='cards'>
        <h1>Nuestro Equipo</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={img1}
                text='Soy fisioterapeuta de la ciudad de Guatemala actualmente pertenezco a la federación de futbol de Guatemala . Realice mis estudios en la universidad Galileo IPETH , tengo experencia en las areas de traumatologia, pediatria, deportiva , geriatria.'
                label='LIC Estuardo Fuentes'
                path='/products'
              />
              <CardItem
              src={img2}
              text='Mi nombre es Wilson Giovanni Johnston López, soy un fisioterapeuta egresado de la universidad Galileo- IPETH, comprometido con la salud, educación prevención y la rehabilitación de cada uno de mis pacientes.'
              label='LIC Wilson Johnston'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Soy Sarai Canté Hernández soy Fisioterapeuta de la universidad Galileo-Ipeth Guatemala
              Tengo conocimiento en el área deportiva, traumatologica, geriátrica y neurologíca
              3 certificados en kinesiotape Sport , Punción Seca y Entrenamiento Funcional Terapéutico ademas de 1 Diplomado
               en Quiropraxia y terapia manual'
              label='LIC Sarai Canté'
              path='/products'
            />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards2;