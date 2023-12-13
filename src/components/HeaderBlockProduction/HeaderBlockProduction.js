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
              <NavLink to="/freightelevators" className="production-navitem">
                Грузовые лифты
              </NavLink>
              <NavLink to="/cottegeelevatiors" className="production-navitem">
                Коттеджные лифты
              </NavLink>
              <NavLink to="/smallfreightelevators" className="production-navitem">
                Малые грузовые лифты
              </NavLink>
              <NavLink to="/panoramicelevators" className="production-navitem">
                Панорамные лифты
              </NavLink>
              <NavLink to="/hospitalelevators" className="production-navitem">
                Больничные лифты
              </NavLink>
              <NavLink to="/excalators" className="production-navitem">
                Экскалаторы
              </NavLink>
              <NavLink to="/travelator" className="production-navitem">
                Травалаторы
              </NavLink>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}
