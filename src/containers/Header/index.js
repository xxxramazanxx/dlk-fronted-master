import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import s from './style.pcss';
import Logo from '../../public/svg/logo.svg';

@CSSModules(s)
export default class Header extends PureComponent {
  render() {
    return (
      <div>
        <header styleName="header">
          <div styleName="menu">
            <div styleName="logo">
              <a href='/'>
                <Logo />
              </a>
            </div>
            <div styleName="links">
              <NavLink to="/production">Продукция</NavLink>
              <NavLink to="/objects">Объекты</NavLink>
              <NavLink to="/proizvoditely">Производители</NavLink>
              <NavLink to="/about">Компания</NavLink>
              <NavLink to="/complect">Комплектующие</NavLink>
              <NavLink to="/construction">Конструкции</NavLink>
              <NavLink to="/contacts">Контакты</NavLink>
            </div>
            <div styleName="contact">
              <button styleName="button">Оставить заявку</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
