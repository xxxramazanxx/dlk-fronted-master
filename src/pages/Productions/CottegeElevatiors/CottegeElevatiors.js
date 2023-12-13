import React, { PureComponent } from 'react';
import s from './CottegeElevatiors.css';
import Header from '../../../containers/Header';
import HeaderBlockProduction from '../../../components/HeaderBlockProduction/HeaderBlockProduction';

import Clock from '../../../public/img/ico/wall-clock.png';
import Key from '../../../public/img/ico/key.png';
import Med from '../../../public/img/ico/med.png';
import Umbrella from '../../../public/img/ico/umbrella.png';
import Garanty from '../../../public/img/ico/verified-protection.png';
import Wallet from '../../../public/img/ico/wallet.png';
import Facebook from '../../../public/img/ico/facebook.png';
import Vk from '../../../public/img/ico/vk.png';
import Twitter from '../../../public/img/ico/twitter.png';
import Google from '../../../public/img/ico/google.png';
import Missile from '../../../public/img/ico/rocket.png';
import Shield from '../../../public/img/ico/shield.png';
import Medal from '../../../public/img/ico/medal.png';
import Task from '../../../public/img/ico/task.png';

import Lift from '../../../public/img/lifts/1.png';

export default class CottegeElevatiors extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <HeaderBlockProduction />

        <section className="passenger-wrapper">
          <div className="passenger-box">
            <div className="passenger-info">
              <h1>КОТТЕДЖНЫЕ ЛИФТЫ</h1>
              <p>
                Компания «ДЛК» предлагает надежные коттеджные лифты по
                выгодной цене от ведущих мировых брендов.
              </p>
              <p>
                Также мы оказываем высококачественные услуги по проектированию,
                монтажу и техническому обслуживанию такого оборудования, как
                коттеджные лифты. «ДЛК» — эксперт №1 на рынке подъемного
                оборудования. Мы отличаемся ответственным подходом к работе,
                нацеленностью на построение долгосрочных отношений с каждым
                клиентом.
              </p>
            </div>
            <div className="passenger-block">
              <h2>Сотрудничать с ДЛК по-настоящему выгодно и удобно</h2>
              <div className="passenger-information">
                <div className="passenger-item">
                  <div>
                    <div className="item-header">
                      <img src={Clock} alt="clock" />
                      <span>СРОКИ</span>
                    </div>
                    <p>
                      Развитая система логистики и высокий уровень
                      профессионализма позволяет сократить время поставки и
                      монтажа оборудования
                    </p>
                  </div>
                </div>
                <div className="passenger-item">
                  <div>
                    <div className="item-header">
                      <img src={Umbrella} alt="clock" />
                      <span>БЕЗОПАСНОСТЬ</span>
                    </div>
                    <p>
                      Мы уделяем большое внимание контролю качества на всех
                      этапах работы, что позволяет добиться максимального уровня
                      безопасности
                    </p>
                  </div>
                </div>
                <div className="passenger-item">
                  <div>
                    <div className="item-header">
                      <img src={Med} alt="clock" />
                      <span>КАЧЕСТВО</span>
                    </div>
                    <p>
                      Все обрудование сертифицировано. На все виды работ
                      компания предоставляет гарантию
                    </p>
                  </div>
                </div>
                <div className="passenger-item">
                  <div>
                    <div className="item-header">
                      <img src={Wallet} alt="clock" />
                      <span>ЦЕНА</span>
                    </div>
                    <p>
                      Мы являемся официальными диллерами производителей. Наши
                      цены вас приятно удивят
                    </p>
                  </div>
                </div>
                <div className="passenger-item">
                  <div>
                    <div className="item-header">
                      <img src={Garanty} alt="clock" />
                      <span>ГАРАНТИЯ</span>
                    </div>
                    <p>
                      Срок гарантийного обслуживания подъемно-транспортного
                      оборудования составляет 3 года
                    </p>
                  </div>
                </div>
                <div className="passenger-item">
                  <div>
                    <div className="item-header">
                      <img src={Key} alt="clock" />
                      <span>ПОД КЛЮЧ</span>
                    </div>
                    <p>
                      Мы предлагаем полный спектр услуг: подбор, проектирование,
                      поставка, монтаж, техническое обслуживание
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lifts-wrapper">
          <div className="lifts-box">
            <div className="lifts-item">
              <div className="lifts-image">
                <div className="lift">
                  <img src={Lift} />
                </div>
                <div className="lifts-social">
                  <div className="social-icons">
                    <img src={Vk} alt="ico" />
                    <img src={Twitter} alt="ico" />
                    <img src={Facebook} alt="ico" />
                    <img src={Google} alt="ico" />
                  </div>
                  <div className="social-friends">
                    <span>Рассказать друзьям</span>
                  </div>
                </div>
              </div>
              <div className="lifts-info">
                <div className="info-header">
                  <h2 className="info-title">КОТТЕДЖНЫЙ ЛИФТ OTIS 1000R</h2>
                  <span className="info-text">
                    Качественный могилевский лифт вместо импортного аналога по
                    супер-цене!
                  </span>
                  <span className="info-price">799 тыс. руб.</span>
                </div>
                <div className="info-body">
                  <p>Грузоподъёмность 400кг;</p>
                  <p>Частотный преобразователь главного привода;</p>
                  <p>Частотный преобразователь привода дверей;</p>
                  <p>Гарантия от нашей компании 3 года;</p>
                  <p>5 остановок</p>
                </div>
                <div className="info-form">
                  <input type="tel" placeholder="+7 () - -" />
                  <button>Заказать</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rate-wrapper">
          <h2>Производители и стоимость коттеджных лифтов</h2>
          <div className="rate-box">
            <div className="rate-item">
              <div className="rate-header">
                <h3>ЭКОНОМ</h3>
              </div>
              <div className="item-body">
                <p className="rate-price">
                  от <span className="price-bold">0,8</span> млн. руб
                </p>
                <ul className="lift-list">
                  <li className="lift-country">
                    КМЗ <small>(Россия)</small>
                  </li>
                  <li className="lift-country">
                    ШЛЗ <small>(Россия)</small>
                  </li>
                  <li className="lift-country">
                    Могилевлифт <small>(Россия)</small>
                  </li>
                  <li className="lift-country">
                    ДЛК<small> (Россия)</small>
                  </li>
                </ul>
              </div>
              <div className="rate-footer">
                <button className="rate-btn btn">Получить консультацию</button>
              </div>
            </div>

            <div className="rate-item item-color">
              <div className="rate-header head-bussines">
                <h3>БИЗНЕС</h3>
              </div>
              <div className="item-body">
                <p className="rate-price rateprice-color">
                  от <span className="price-bold price-color">1,5</span> млн.
                  руб
                </p>
                <ul className="lift-list">
                  <li className="lift-country li-color">
                    OTIS <small className="small-color">(Ю. Корея)</small>
                  </li>
                  <li className="lift-country li-color">
                    SANEL <small className="small-color">(Китай)</small>
                  </li>
                  <li className="lift-country li-color">
                    KOYO <small className="small-color">(Испания)</small>
                  </li>
                  <li className="lift-country li-color">
                    FUJI <small className="small-color"> (Ю. Корея)</small>
                  </li>
                  <li className="lift-country li-color">WITUR</li>
                </ul>
              </div>
              <div className="rate-footer">
                <button className="rate-btn btn btn-color">
                  Получить консультацию
                </button>
              </div>
            </div>

            <div className="rate-item">
              <div className="rate-header">
                <h3>ЭКОНОМ</h3>
              </div>
              <div className="item-body">
                <p className="rate-price">
                  от <span className="price-bold">0,8</span> млн. руб
                </p>
                <ul className="lift-list">
                  <li className="lift-country">
                    КМЗ <small>(Россия)</small>
                  </li>
                  <li className="lift-country">
                    ШЛЗ <small>(Россия)</small>
                  </li>
                  <li className="lift-country">
                    Могилевлифт <small>(Россия)</small>
                  </li>
                  <li className="lift-country">
                    ДЛК<small> (Россия)</small>
                  </li>
                </ul>
              </div>
              <div className="rate-footer">
                <button className="rate-btn">Получить консультацию</button>
              </div>
            </div>
          </div>
        </section>

        <section className="garanty-wrapper">
          <h3>Срок и гарантия</h3>
          <div className="garanty-box">
            <div className="garanty-time">
              <img src={Missile} alt="img" />
              <div className="time-text">
                <p>От 2 до 4 месяцев</p>
                <span>
                  Срок поставки и установки пассажирского лифта в зависимости от
                  выбранной модели
                </span>
              </div>
            </div>
            <div className="garanty-time text-garanty">
              <img src={Shield} alt="img" />
              <div className="time-text">
                <p>От 3 до 5 лет</p>
                <span>
                  Гарантии на все пассажирские лифты, смонтированные нашей
                  компанией
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
