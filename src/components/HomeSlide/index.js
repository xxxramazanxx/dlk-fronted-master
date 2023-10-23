import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@CSSModules(s)
export default class HomeSlide extends PureComponent {
  render () {
    return (
      <div styleName='slide'>
        <div styleName='bg'>
          <video autoPlay loop playsInline preload='preload'>
            <source src='/video/bg.mp4'/>
          </video>
        </div>
        <div styleName='content'>
          <div styleName='wrapper'>
            <div styleName='block'>
              <div styleName='item'>
                <div styleName='head-title'>
                  <h1>Дагестанская<br />лифтовая<br />компания</h1>
                  <p>Официальный диллер мировых и российских<br />производителей лифтового оборудования</p>
                </div>
              </div>
              <div styleName='item'>
                <div styleName='description'>
                  <span>Акция</span>
                  <a href='#'><b>Пассажирский лифт</b></a>
                  <p>Предлагаем надежные пассажирские лифты<br/>по выгодной цене с гарантией на 3 года и бесплатным<br/> техническим обслуживанием на год</p>
                  <div styleName='price'>
                    от <strong>699 990 ₽</strong>
                    <small>стоимость</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
