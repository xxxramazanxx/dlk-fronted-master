import React, { PureComponent } from 'react'
import styled from 'styled-components'

import IconPen from '../../public/img/icons/pen.svg'
import IconDelivery from '../../public/img/icons/delivery-truck.svg'
import IconRobot from '../../public/img/icons/robot.svg'
import IconOperator from '../../public/img/icons/operator.svg'
import IconRepair from '../../public/img/icons/repair-tool.svg'
import IconSpaceShip from '../../public/img/icons/space-ship.svg'

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  text-align: center;
  padding: 70px 0;

  .title {
    font-family: 'PT Serif Caption';
    font-size: 36px;
    text-transform: uppercase;
  }

  .description {
    font-size: 19px;
    line-height: 30px;
    font-family: 'PT Serif';
  }

  .elements {
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0;
    overflow: hidden;
  }
`

const Item = styled.div`
  flex: 0 0 33.33%;
  display: block;
  padding: 50px 30px;
  box-sizing: border-box;
  cursor: default;
  box-shadow: 0 0 0 1px #eee;
  background-color: #fff;

  &:hover {
    background-color: #e21b1b;

    svg {
      background-color: #fff;
      fill: #e21b1b;
    }

    strong {
      color: #fff;
    }

    p {
      color: #fff;
      opacity: 1;
    }
  }

  svg {
    display: block;
    margin: 0 auto 40px;
    width: 90px;
    height: 90px;
    fill: #fff;
    background-color: #e21b1b;
    padding: 20px;
    border-radius: 100%;
    overflow: visible
  }

  strong {
    display: block;
    font-size: 36px;
    font-family: 'zyalva';
    text-transform: uppercase;
  }

  p {
    font-family: 'PT Sans Narrow', 'Arial';
    opacity: .6;
    font-size: 16px;
  }
`

export default class HomeAdvantages extends PureComponent {
  state = {
    items: [
      {
        title: 'Проектирование',
        description: 'Проектируем под ваши размеры лифтовое оборудование с учетом всех  требований безопасности'
      },
      {
        title: 'Поставка',
        description: 'Осуществляем поставку лифтового и подъёмного оборудования по Северному Кавказу и Югу России'
      },
      {
        title: 'Монтаж',
        description: 'Оказываем услуги по монтажу лифтового оборудования любой сложности'
      },
      {
        title: 'Обслуживание',
        description: 'Оказываем высококачественные услуги по обслуживанию лифтового оборудования и эскалаторов'
      },
      {
        title: 'Ремонт',
        description: 'Осуществляем ремонт любых типов лифтов, включая пассажирские, грузовые, панорамные и коттеджные'
      },
      {
        title: 'Модернизация',
        description: 'Модернизация улучшит эстетический вид, повысит безопасность и эффективность на новый уровень'
      }
    ]
  }

  getIcon = (name) => {
    switch (name) {
      case 'Проектирование':
        return <IconPen/>

      case 'Поставка':
        return <IconDelivery/>

      case 'Монтаж':
        return <IconRobot/>

      case 'Обслуживание':
        return <IconOperator/>

      case 'Ремонт':
        return <IconRepair/>

      case 'Модернизация':
        return <IconSpaceShip/>
    }
  }

  render () {
    const items = this.state.items.map((item, i) =>
      <Item key={i}>
        {this.getIcon(item.title)}
        <strong>{item.title}</strong>
        <p>{item.description}</p>
      </Item>
    )

    return (
      <Wrapper>
        <h2 className='title'>Наши услуги</h2>
        <p className='description'>Мы оказываем полный спектр услуг на территории<br/>Северного Кавказа и Юга России</p>
        <div className='elements'>
          {items}
        </div>
      </Wrapper>
    )
  }
}
