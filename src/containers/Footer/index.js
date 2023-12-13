import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import {
  Wrapper,
  FirstFooter,
  Description,
  SocialShare,
  Company,
  Logo,
  NavItem,
  Contact,
  Phone,
  MapItem,
  Day,
  LinkContact,
  LastFooter,
  Febox
} from './styles'

export default class Footer extends PureComponent {
  render () {
    return (
      <Wrapper>
        <FirstFooter>
          <Company>
            <Logo />
            <Description>
              Дагестанская лифтовая компания успешно охватывает весь спектр услуг, касающихся подъемно-транспортного оборудования.<br /><br />
              Производители лифтов: Otis, Koyo, Fuji,  Schindler, ThyssenKrupp, Kleemann, Wittur, КМЗ, ЩЛЗ, Sanel, Могилевлифт, ДЛК
            </Description>
            <SocialShare>
              <span>Расскажите друзьям  о нас</span>
            </SocialShare>
          </Company>
          <NavItem>
            <h4>Компания</h4>
            <Link to='/about'>О компании</Link>
            <Link to='/'>Объекты на карте</Link>
            <Link to='/services'>Наши услуги</Link>
            <Link to='/'>Производители лифтов</Link>
            <Link to='/'>Собственное производство</Link>
            <Link to='/'>Конструктивные решения</Link>
          </NavItem>
          <NavItem>
            <h4>Продукция</h4>
            <Link to='/'>Пассажирские лифты</Link>
            <Link to='/'>Грузовые лифты</Link>
            <Link to='/'>Коттеджные лифты</Link>
            <Link to='/'>Кухонные лифты</Link>
            <Link to='/'>Панорамные лифты</Link>
            <Link to='/'>Больничные лифты</Link>
            <Link to='/'>Эскалаторы</Link>
            <Link to='/'>Траволаторы</Link>
          </NavItem>
          <Contact>
            <Phone>
              <img src='/img/phone.png'/>
              +7 (928) 522-99-90
            </Phone>
            <MapItem>
              <img src='/img/marker.png'/>
              <span>Дербент, ул. Сальмана, 89</span>
            </MapItem>
            <MapItem>
              <img src='/img/marker.png'/>
              <span>Махачкала, ул. Гоголя, 40</span>
            </MapItem>
            <Day>
              <img src='/img/date.png'/>
              <span>пн.-суб. с 09:00 до 18:00<br/>вс. выходной</span>
            </Day>
            <LinkContact>
              <Link to='/'>Все офисы на карте</Link>
            </LinkContact>
          </Contact>
        </FirstFooter>
        <LastFooter>
          <p>
            © 2023, ООО «Дагестанская лифтовая компания»
            <span>Официальный сайт</span>
          </p>
          <Febox>
            <a href="https://febox.ru" target="_blank">
              <svg viewBox="0 0 304.56 215.85"><defs></defs><path d="M.42 0H142.42V36H.42zM.42 52H142.42V88H.42zM158.42 104H300.41999999999996V140H158.42zM158.42 0H300.41999999999996V36H158.42zM158.42 52H229.42V88H158.42zM.42 104H71.42V140H.42z"></path><g class="cls-1"><path d="M2.58 215.33V186.65h21v6.45H10v4.47H23.31V204H10v11.31zM71.64 215.33V186.65h21v6.45H79v4.47H92.36V204H79v4.86H92.66v6.45zM141 215.33V186.65h16.25c5.68 0 8.38 3.7 8.38 7.31a6.41 6.41 0 0 1-4.9 6.58 6.87 6.87 0 0 1 5.46 7c0 4.17-2.79 7.78-8.43 7.78zm17.11-20.08a2.35 2.35 0 0 0-2.54-2.37h-7.18v4.77h7.18A2.36 2.36 0 0 0 158.11 195.25zm.56 11.27a2.58 2.58 0 0 0-2.84-2.58h-7.44v5.16h7.44A2.54 2.54 0 0 0 158.67 206.52zM212.8 201c0-8.73 6.58-14.83 15.35-14.83s15.31 6.11 15.31 14.83-6.54 14.83-15.31 14.83S212.8 209.74 212.8 201zm23.13 0c0-4.69-3.05-8.3-7.78-8.3s-7.83 3.61-7.83 8.3 3.05 8.3 7.83 8.3S235.94 205.66 235.94 201zM298.41 215.33l-6.23-9.63-6.24 9.63h-8.77l10-14.71-9.37-14h8.73l5.63 9 5.55-9h8.77l-9.33 13.93 10 14.75z" transform="translate(-2.58)"></path></g></svg>
              <strong>
                Разработано с помощью<br /> {' '}
                <span>реактивных</span>{' '}
                технологий в{' '}
                <span>Фебокс</span>
              </strong>
            </a>
          </Febox>
        </LastFooter>
      </Wrapper>
    )
  }
}
