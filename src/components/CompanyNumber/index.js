import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 120px 0;
  box-sizing: border-box;
  background-image: url('/img/ural.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    content: '';
    background-color: #2f2a2a;
    opacity: 0.7;
  }

  .wrapper {
    position: relative;
    z-index: 6;
    width: 1280px;
    margin: auto;
    text-align: center;
  }
`

const Title = styled.h2`
  font-size: 50px;
  margin: 0;
  color: #fff;
  max-width: 1000px;
  margin: auto;
`

const Description = styled.p`
  font-size: 18px;
  color: #fff;
  max-width: 1000px;
  margin: auto;
  padding: 20px 0;
  font-weight: 300;
  line-height: 24px;
`

const Numbers = styled.div`
  margin: 60px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
`

const Item = styled.div`
  width: 33.33%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-sizing: border-box;

  &:nth-child(3n) {
    border-right: 0;
  }

  &:nth-child(4), &:nth-child(5), &:nth-child(6) {
    border-bottom: 0;
  } 

  strong {
    font-size: 42px;
    color: #fff;
    display: block;
    padding: 10px 0;
  }

  span {
    font-size: 16px;
    color: #fff;
    font-weight: 300;
  }
`

export default class CompanyNumber extends PureComponent {
  render () {
    return (
      <Wrapper>
        <div className='wrapper'>
          <Title>ДАГЕСТАНСКАЯ ЛИФТОВАЯ КОМПАНИЯ В ЦИФРАХ</Title>
          <Description>ДЛК — динамично развивающаяся компания на Российском рынке лифтового и подъемно-транспортного оборудования. Поставка оборудования осуществляется только по прямым контрактам с заводами-производителями из Европы, Турции, Китая, Кореи и России</Description>
          <Numbers>
            <Item>
              <strong>13</strong>
              <span>лет опыта</span>
            </Item>
            <Item>
              <strong>62</strong>
              <span>квалифицированных специалиста</span>
            </Item>
            <Item>
              <strong>630</strong>
              <span>единиц поставленного оборудования</span>
            </Item>
            <Item>
              <strong>16</strong>
              <span>субъектов поставки оборудования</span>
            </Item>
            <Item>
              <strong>365</strong>
              <span>лифтов на техническом обслуживании</span>
            </Item>
            <Item>
              <strong>12</strong>
              <span>производителей оборудования</span>
            </Item>
          </Numbers>
        </div>
      </Wrapper>
    )
  }
}
