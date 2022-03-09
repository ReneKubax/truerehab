import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Que esperas para agendar tu cita?
        </p>
        <p className='footer-subscription-text'>
         
        </p>
        
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Servicios</h2>
            <Link to='/sign-up'>Terapias</Link>
            
          
          </div>
          <div class='footer-link-items'>
            <h2>Contactanos</h2>
            <a href='https://wa.me/50242954681?text=Hola%20necesito%20informacion%20de%20las%20terapias'>Whatsapp</a>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Equipo</h2>
            <Link to='/products'>Estuardo Fuentes</Link>
            <Link to='/products'>Sarai Canté</Link>
            <Link to='/products'>Wilson</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/truerehab_gt'>Instagram</a>
            <a href='https://www.facebook.com/TrueRehab_GT-105381021915939/'>Facebook</a>
            <a href='https://wa.me/50242954681?text=Hola%20necesito%20informacion%20de%20las%20terapias'>Whatsapp</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRUE REHAB
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Desarollado y diseñado por Rene Fuentes © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/TrueRehab_GT-105381021915939/'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/truerehab_gt'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://wa.me/50242954681?text=Hola%20necesito%20informacion%20de%20las%20terapias'
            >
            <i class='fab fa-whatsapp' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;