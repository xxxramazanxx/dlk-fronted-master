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
            <Title>Команда</Title>
            <Description>Профессионалы своего дела</Description>
            <Content>
              <p>Персонал компании — наш основной актив. Своим приоритетом считаем создание условий для профессионального роста сотрудников компании, обеспечения их материального и морального удовлетворения, что было, есть и будет непременным условием финансового успеха и динамичного развития компании.</p>
              <a href='#'>В лицах ></a>
            </Content>
          </Item>
          <Item>
            <ImgWrapper>
              <img src='/img/company-face.png' />
            </ImgWrapper>
          </Item>
        </div>
      </Wrapper>
    )
  }
}
