import React, { PureComponent } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import s from './HeaderBlock.module.css';
import ServicesPage from '../../pages/ServicesPage/ServicesPage';

export default class HeaderBlock extends PureComponent {
  render() {
    return (
      <section className="company-header">
        <div className="company-nav">
          <h1 className="company-title"> Наша Компания</h1>
          <div className="company-navigation">
            <div className="company-navlist">
              <NavLink to="/company" className="company-navitem">
                О компании
              </NavLink>
              <NavLink to="/services" className="company-navitem">
                Услуги
              </NavLink>
              <NavLink to="/certificates" className="company-navitem">
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

        <Switch>
          <Route path="/services">
            <ServicesPage />
          </Route>
        </Switch>
      </section>
    );
  }
}
