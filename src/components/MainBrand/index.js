import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'

import s from './style.pcss'

@CSSModules(s)
export default class MainBrand extends PureComponent {
  state = {
    activeTab: 0,
    tabs: [
      {
        label: 'Девиз',
        text: 'За годы плодотворной работы на рынке лифтового оборудования мы выработали девиз компании: «Работаем для людей! Грамотно, в срок, надежно»'
      },
      {
        label: 'Миссия',
        text: 'Мы живем короче'
      },
      {
        label: 'Ценности',
        text: 'Мы живем короче'
      }
    ]
  }

  changeActiveTab = (id) => this.setState({ activeTab: id })

  render () {
    const tabs = this.state.tabs.map((item, i) =>
      <label
        key={i}
        onClick={() => this.changeActiveTab(i)}
        styleName={this.state.activeTab === i && 'active'}
      >
        <span>{item.label}</span>
      </label>
    )

    const [activeDescription] = this.state.tabs.filter((item, i) => i === this.state.activeTab)

    return (
      <div styleName='block'>
        <div styleName='wrapper'>
          <div styleName='img'></div>
          <div styleName='content'>
            <h2>Мы ценим достигнутые <br/>договоренности и четко их соблюдаем</h2>
            <div styleName='tabs'>
              <div styleName='left'>
                {tabs}
              </div>
              <div styleName='description'>
                {activeDescription.text}
              </div>
            </div>
            <div styleName='director'>
              <img src='/img/podpis.png'/>
              <div styleName='director__wraper'>
                <strong>Севзиханов Эльдар Савзиханович</strong>
                <span>генеральный директор</span>
              </div>
            </div>
          </div>
        </div>
        <div styleName='wrapper'>
          <div styleName='message'>
            <h3>12 <span>брендов</span></h3>
            <p>Мы работаем с российскими и<br/>зарубежными производителями<br/>лифтового оборудования</p>
          </div>
          <div styleName='logos'>
            <div styleName='item'>
              <a href='#'><img style={{ width: '92px', height: '35px' }} src='/img/logos/OTIS.png'/></a>
              <a href='#'><img style={{ width: '123px', height: '48px' }} src='/img/logos/FUJI.png'/></a>
              <a href='#'><img style={{ width: '190px', height: '50px' }} src='/img/logos/KLEEMAN.png'/></a>
              <a href='#'><img style={{ width: '80px', height: '53px' }} src='/img/logos/WITTUR.png'/></a>
              <a href='#'><img style={{ width: '210px', height: '66px' }} src='/img/logos/SHLZ.png'/></a>
              <a href='#'><img style={{ width: '45px', height: '70px' }} src='/img/logos/MOG.png'/></a>
            </div>
            <div styleName='item'>
              <a href='#'><img style={{ width: '230px', height: '110px', left: '35px' }} src='/img/logos/KOYO.png'/></a>
              <a href='#'><img style={{ width: 'px', height: 'px' }} src='/img/logos/SANEL.png'/></a>
              <a href='#'><img style={{ width: 'px', height: 'px' }} src='/img/logos/thyssen.png'/></a>
              <a href='#'><img style={{ width: 'px', height: 'px' }} src='/img/logos/schindler.png'/></a>
              <a href='#'><img style={{ width: 'px', height: 'px' }} src='/img/logos/KMZ.png'/></a>
              <a href='#'><img style={{ width: 'px', height: 'px' }} src='/img/logos/DLKlogo2.png'/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
