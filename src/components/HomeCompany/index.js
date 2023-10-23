import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@CSSModules(s)
export default class HomeCompany extends PureComponent {
  render () {
    return (
      <div styleName='block'>
        <div styleName='director'>
          <div styleName='img'>
            <img />
          </div>
          <div styleName='content'>
            <h2>Мы ценим достигнетые договоренности и четко их соблюдаем</h2>
            <p>Какой-то рандомный текст</p>
          </div>
        </div>
      </div>
    )
  }
}
