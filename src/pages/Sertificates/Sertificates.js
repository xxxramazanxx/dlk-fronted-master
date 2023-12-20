import React, { PureComponent } from 'react';
import Header from '../../containers/Header';
import HeaderBlock from '../../components/HeaderBlock/HeaderBlock';
import s from './Sertificates.module.css';

import Sertificat from '../../public/img/sertificates/sertificat.jpg';

export default class Sertificates extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <HeaderBlock />

        <section className="sertification-wrapper">
          <div className="lifts">
            <h1>Лифты с машинный помещением </h1>
            <div className='sert-img'>
              <img src={Sertificat} alt="image" />
              <img src={Sertificat} alt="image" />
              <img src={Sertificat} alt="image" />
            </div>
          </div>
          <div className="lifts">
            <h1>Лифты без машинного помещения </h1>
            <div className='sert-img'>
              <img src={Sertificat} alt="image" />
              <img src={Sertificat} alt="image" />
              <img src={Sertificat} alt="image" />
              <img src={Sertificat} alt="image" />
            </div>
          </div>
          <div className="lifts">
            <h1>Гидравлические лифты </h1>
            <div className='sert-img'>
              <img src={Sertificat} alt="image" />
              <img src={Sertificat} alt="image" />
              <img src={Sertificat} alt="image" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
