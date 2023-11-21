import React, { PureComponent } from 'react';
import s from './PassengerElevators.css';
import Header from '../../../containers/Header';
import HeaderBlockProduction from '../../../components/HeaderBlockProduction/HeaderBlockProduction';

export default class PassengerElevators extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <HeaderBlockProduction />

        <section className="passenger-wrapper">
          <div className="passenger-box">
            <div className='passenger-info'>
              <h1>ПАССАЖИРСКИЕ ЛИФТЫ</h1>
              <p>
                Компания «ДЛК» предлагает надежные пассажирские лифты по
                выгодной цене от ведущих мировых брендов.
              </p>
              <p>
                Также мы оказываем высококачественные услуги по проектированию,
                монтажу и техническому обслуживанию такого оборудования, как
                пассажирские лифты. «ДЛК» — эксперт №1 на рынке подъемного
                оборудования. Мы отличаемся ответственным подходом к работе,
                нацеленностью на построение долгосрочных отношений с каждым
                клиентом.
              </p>
            </div>
            <div className='passenger-block'>
              <h2>Сотрудничать с ДЛК по-настоящему выгодно и удобно</h2>
              <div className='passenger-information'>
                <div className='passenger-item'>
                  <div>
                    <img/>
                    <span>СРОКИ</span>
                    <p>Развитая система логистики и высокий уровень профессионализма позволяет сократить время поставки и монтажа оборудования</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
