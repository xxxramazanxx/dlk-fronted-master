import React, { PureComponent } from 'react';
import HeaderBlockConstruction from '../../components/HeaderBlockConstruction/HeaderBlockConstruction';
import Header from '../../containers/Header';
import s from './ConstructionPage.module.css';

import Lift1 from './../../public/img/lifts/lift1.png';
import Lift2 from './../../public/img/lifts/lift2.png';
import Lift3 from './../../public/img/lifts/lift3.png';

export default class ConstructionPage extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <HeaderBlockConstruction />

        <section className="construction-wrapper">
          <h1>Лифтовые системы</h1>
          <div className="lifts-box">
            <div className="lift-item">
              <img src={Lift1} alt="img" />
              <div className='lift-text'>
                <span>Конструкция лифта с верхним машинным отделением</span>
              </div>
            </div>
            <div className="lift-item">
              <img src={Lift2} alt="img" />
              <div className='lift-text'>
                <span>Без машинного отделения с боковым противовесом</span>
              </div>
            </div>
            <div className="lift-item">
              <img src={Lift3} alt="img" />
              <div className='lift-text'>
                <span>
                  Конструкция для панорамного лифта без машинного отделения
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
