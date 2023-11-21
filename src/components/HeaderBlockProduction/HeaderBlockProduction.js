import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import s from './HeaderBlockProduction.module.css';

export default class HeaderBlockProduction extends PureComponent {
  render() {
    return (
      <section className="production-header">
        <div className="production-nav">
          <h1 className="production-title">Продукция</h1>
          <div className="production-navigation">
            <nav className="production-navlist">
              <NavLink to="/production" className="production-navitem">
                Пассажирские лифты
              </NavLink>
              <NavLink to="/1" className="production-navitem">
                Грузовые лифты
              </NavLink>
              <NavLink to="/2" className="production-navitem">
                Коттеджные лифты
              </NavLink>
              <NavLink to="/3" className="production-navitem">
                Малые грузовые лифты
              </NavLink>
              <NavLink to="/4" className="production-navitem">
                Панорамные лифты
              </NavLink>
              <NavLink to="/5" className="production-navitem">
                Больничные лифты
              </NavLink>
              <NavLink to="/6" className="production-navitem">
                Экскалаторы
              </NavLink>
              <NavLink to="/7" className="production-navitem">
                Травалаторы
              </NavLink>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}
