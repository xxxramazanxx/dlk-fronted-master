import React, { PureComponent } from 'react';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import s from './VacancicesPage.module.css';
import HeaderBlock from '../../components/HeaderBlock/HeaderBlock';

export default class VacancicesPage extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <HeaderBlock />
        <div className="company-wrapper">
          <section className="company-information">
            <div className="company-box">
              <div className="company-info">
                <h2 className="opening-title">Вакансии</h2>
                <p className="opening-text">
                  Мы ищем молодых специалистов с активной жизненной позицией.
                  Если подходящей вакансии сейчас нет - вы всегда сможете
                  отправить резюме на нашу электронную почту{' '}
                  <a>info@dlklift.ru</a>
                </p>
                <p className="opening-text">
                  По вопросам работы обращайтесь по телефону: +7(928) 544-23-83
                </p>

                <p className="opening-text">
                  или по электронной почте:
                  <br /> <a>info@dlklift.ru</a>
                </p>
              </div>

              <div className="company-opening">
                <a className="opening-link">Электромеханик по лифтам</a>
                <a className="opening-link">
                  Монтажник подъемно-транспортного оборудования
                </a>
                <a className="opening-link">Пусконаладчик</a>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}
