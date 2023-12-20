import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import s from './HeaderBlockConstruction.module.css';

export default class HeaderBlockConstruction extends PureComponent {
  render() {
    return (
      <section className="production-header">
        <div className="production-nav">
          <h1 className="production-title">КОНСТРУКТИВНЫЕ РЕШЕНИЯ</h1>
          <div className="production-navigation">
            <nav className="production-navlist">
              <NavLink to="/construction" className="production-navitem">
                Лифтовые системы
              </NavLink>
              <NavLink to="/winches" className="production-navitem">
                Лебедки
              </NavLink>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}
