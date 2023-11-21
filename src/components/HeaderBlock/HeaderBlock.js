import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import s from './HeaderBlock.module.css';

export default class HeaderBlock extends PureComponent {
  render() {
    return (
      <section className="company-header">
        <div className="company-nav">
          <h1 className="company-title"> Наша Компания</h1>
          <div className="company-navigation">
            <div className="company-navlist">
              <NavLink to="/about" className="company-navitem">
                О компании
              </NavLink>
              <NavLink to="/services" className="company-navitem">
                Услуги
              </NavLink>
              <NavLink to="/sertificates" className="company-navitem">
                Сертификаты
              </NavLink>
              <NavLink to="/team" className="company-navitem">
                Команда
              </NavLink>
              <NavLink to="/vacancies" className="company-navitem">
                Вакансии
              </NavLink>
              <NavLink to="/contacts" className="company-navitem">
                Контакты
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
