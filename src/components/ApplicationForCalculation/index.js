import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
  padding: 100px 0;
  border-bottom: 1px solid #eee;

  .wrapper {
    width: 1280px;
    margin: auto;
    display: flex;
    align-items: center;
  }
`

const Text = styled.div`
  flex: 1;
`

const Title = styled.h4`
  font-size: 30px;
  font-family: 'PT Serif';
  margin: 0;
`

const Description = styled.p`
  max-width: 640px;
  font-family: 'Arial';
  font-size: 14px;
  line-height: 22px;
  margin: 20px 0;
  opacity: .6;
`

const Button = styled.div`
  background-color: #fa2929;
  border-radius: 60px;
  height: 60px;
  color: #fff;
  border: 0;
  padding: 0 40px;
  line-height: 60px;
  font-size: 20px;
  cursor: pointer;
  font-family: 'PT Serif';

  &:hover {
    opacity: .9;
  }
`

export default class ApplicationForCalculation extends PureComponent {
  render () {
    return (
      <Wrapper>
        <div className='wrapper'>
          <Text>
            <Title>Заявка на расчет</Title>
            <Description>
              Заявка для получения предварительной стоимости лифта. Стоимость подъемного оборудования зависит от выбранного бренда и технических характеристик
            </Description>
          </Text>
          <Button>Заявка на расчет</Button>
        </div>
      </Wrapper>
    )
  }
}
