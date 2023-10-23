import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 100px 0;

  .wrapper {
    width: 1280px;
    margin: auto;
    display: flex;
  }
`

const Item = styled.div`
  flex: 1;
`

const Title = styled.h2`
  font-size: 38px;
  font-family: 'PT Serif';
  font-weight: normal;
  margin: 0;
  padding: 0;

`

const Description = styled.p`
  text-transform: uppercase;
  font-size: 12.6px;
  margin-bottom: 50px;
  color: #555;

  &::after {
    width: 50px;
    height: 4px;
    background-color: red;
    content: '';
    display: block;
    margin-top: 20px;
  }

`

const Content = styled.div`
  padding-right: 100px;

  strong {
    font-size: 18px;
    line-height: 24px;
  }

  p {
    font-size: 18px;
    line-height: 24px;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 540px;
  }
`

export default class MainPageScreenCompany extends PureComponent {
  render () {
    return (
      <Wrapper>
        <div className='wrapper'>
          <Item>
            <Title>Компания</Title>
            <Description>Дагестанская лифтовая компания</Description>
            <Content>
              <strong>ДЛК — поставщик лифтового оборудования</strong>
              <p>ООО «Дагестанская лифтовая компания» уже более 12 лет оказывает полный комплекс услуг по проектированию, поставке, монтажу и обслуживание лифтов и лифтовых шахт, подъемников, эскалаторов и траволаторов.</p>
              <p>Поставка оборудования осуществляется только по прямым контрактам с заводами-производителями из Европы, Турции, Китая, Кореи и России. Мы самостоятельно осуществляем доставку и таможенное оформление оборудования, что позволяет предложить нашим заказчикам наилучшую цену.</p>
              <a href='#'>Читать ></a>
            </Content>
          </Item>
          <Item>
            <ImgWrapper>
              <img src='/img/company.jpg' />
            </ImgWrapper>
          </Item>
        </div>
      </Wrapper>
    )
  }
}
