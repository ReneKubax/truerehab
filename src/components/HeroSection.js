import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../videos/vid2.mp4'



function HeroSection() {
  return (
    <div className='hero-container'>
    <video src={video} autoPlay loop muted />
      <h1>AGENDA TU CITA YA!</h1>
      <p>Que esperas para agendar?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Resumen de precios
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;