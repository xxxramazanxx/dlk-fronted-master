import React, { PureComponent } from 'react';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import HeaderBlock from '../../components/HeaderBlock/HeaderBlock';
import Objects from '../../components/Objects';
import s from './ContactsPage.module.css';

export default class ContactsPage extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <HeaderBlock />

        <section className="contacts-wrapper">
          <h1 className="contacts-title">Центральный офис</h1>
          <div className="contacts-info">
            <div className="constacts-tel">
              <span>Телефон</span>
              <span>+7 928 522-99-90</span>
            </div>
            <div className="constacts-mail">
              <span>Электронная почта</span>
              <span className='email'>dlk@dlklift.ru</span>
            </div>
            <div className="constacts-adress">
              <span>Адрес</span>
              <span>
                ул. Сальмана, 89 г.Дербент,
                <br /> респ. Дагестан, 368608, Россия
              </span>
            </div>
          </div>
        </section>

        <section className="yandex-card">
          <Objects />
        </section>
      </div>
    );
  }
}
