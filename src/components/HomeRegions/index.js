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
  &:first-child {
    width: 390px;
  }

  &:last-child {
    flex: 1;
  }
`

const Title = styled.h2`
  font-size: 30px;
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

  strong {
    font-size: 18px;
    line-height: 24px;
    color: red;
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
    max-width: 680px;
  }
`

export default class MainPageScreenCompany extends PureComponent {
  render () {
    return (
      <Wrapper>
        <div className='wrapper'>
          <Item>
            <Title>Северный Кавказ и Юг России</Title>
            <Description>Работаем в Северо-Кавказском, Крымском и Южном оругах РФ</Description>
            <Content>
              <strong>Сотрудничество</strong>
              <p>Мы занимается формированием дилерской сети и приглашаем вас стать нашим партнером на выгодных условиях для сотрудничества. </p>
              <p>Мы даем вам возможность расширить ассортимент лифтового оборудования, которое вы можете предложить своим клиентам. </p>
              <a href='#'>Связаться ></a>
            </Content>
          </Item>
          <Item>
            <ImgWrapper>
              <img src='/img/region.png' />
            </ImgWrapper>
          </Item>
        </div>
      </Wrapper>
    )
  }
}
