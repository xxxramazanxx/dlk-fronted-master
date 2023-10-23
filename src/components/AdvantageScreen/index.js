import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 100px;

  .wrapper {
    width: 1280px;
    margin: auto;
    text-align: center;
  }
`

const Title = styled.h2`
  font-size: 38px;
  font-family: 'PT Serif';
  font-weight: normal;
`

const Elemets = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Item = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 100px;
  box-sizing: border-box;

  .head {
    display: flex;
    justify-content: center;
    align-items: center;

    strong {
      font-weight: bold;
      font-size: 21px;
    }

    img {
      width: 24px;
      margin-right: 15px;
    }
  }

  p {
    font-size: 13px;
  }
`
export default class AdvantageScreen extends PureComponent {
  render () {
    return (
      <Wrapper>
        <div className='wrapper'>
          <Title>Шесть причин купить лифт у нас</Title>
          <Elemets>
            <Item>
              <div className='head'>
                <img src='/img/icon/1.png'/>
                <strong>СРОКИ</strong>
              </div>
              <p>Развитая система логистики и высокий уровень профессионализма позволяет сократить время поставки и монтажа оборудования</p>
            </Item>
            <Item>
              <div className='head'>
                <img src='/img/icon/2.png'/>
                <strong>БЕЗОПАСНОСТЬ</strong>
              </div>
              <p>Мы уделяем большое  внимание контролю качества на всех этапах работы, что позволяет добиться максимального уровня безопасности</p>
            </Item>
            <Item>
              <div className='head'>
                <img src='/img/icon/3.png'/>
                <strong>КАЧЕСТВО</strong>
              </div>
              <p>Все обрудование сертифицировано. На все виды работ компания предоставляет гарантию</p>
            </Item>
            <Item>
              <div className='head'>
                <img src='/img/icon/4.png'/>
                <strong>ЦЕНА</strong>
              </div>
              <p>Мы являемся официальными диллерами производителей. Наши цены вас приятно удивят</p>
            </Item>
            <Item>
              <div className='head'>
                <img src='/img/icon/5.png'/>
                <strong>ГАРАНТИЯ</strong>
              </div>
              <p>Срок гарантийного обслуживания подъемно-транспортного оборудования составляет 3 года</p>
            </Item>
            <Item>
              <div className='head'>
                <img src='/img/icon/6.png'/>
                <strong>ПОД КЛЮЧ</strong>
              </div>
              <p>Мы предлагаем полный спектр услуг: подбор, проектирование, поставка, монтаж,  техническое обслуживание</p>
            </Item>
          </Elemets>
        </div>
      </Wrapper>
    )
  }
}
