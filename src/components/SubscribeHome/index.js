import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
`

const Content = styled.div`
  width: 1280px;
  margin: auto;
  padding: 120px 0;
  display: flex;
`

const Subscribe = styled.form`
  flex: 1;
`

const Input = styled.div`
  margin-bottom: 35px;

  span {
    font-size: 16px;
    color: #939393;
    font-weight: 300;
    display: block;
  }

  input {
    border: 0;
    border-bottom: 1px solid #f2f2f4;
    font-size: 16px;
    display: block;
    background-color: transparent;
    width: 100%;
    outline: none;
    transition: all .3s ease;
    padding: 0 0 15px 0;

    &:focus {
      border-bottom: 1px solid #ccc;
    }

    &::placeholder {
      color: #939393;
    }
  }

  textarea {
    border: 0;
    border-bottom: 1px solid #f2f2f4;
    font-size: 16px;
    display: block;
    background-color: transparent;
    width: 100%;
    outline: none;
    transition: all .3s ease;
    padding: 0 0 15px 0;
    min-height: 140px;

    &:focus {
      border-bottom: 1px solid #ccc;
    }

    &::placeholder {
      color: #939393;
    }
  }
`

const Button = styled.button`
  background-color: #fa2929;
  border-radius: 30px;
  color: #fff;
  font-size: 17px;
  padding: 15px 30px;
  border: 0;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    opacity: 0.8;
  }
`

const Help = styled.div`
  padding-left: 213px;
  padding-right: 113px;

  h3 {
    font-size: 38px;
    font-weight: 400;
    line-height: 48px;
    margin-bottom: 70px;

    &::after {
      width: 70px;
      height: 4px;
      background-color: red;
      content: '';
      display: block;
      margin-top: 30px;
    }
  }

  span {
    font-size: 22px;
    color: #9f9b9b;
    display: block;
    font-weight: 300;
  }

  strong {
    font-size: 30px;
    font-weight: 500;
    display: block;
    padding: 20px 0;
  }
`

export default class SubscribeHome extends PureComponent {
  render () {
    return (
      <Wrapper>
        <Content>
          <Subscribe>
            <Input>
              <input placeholder='Имя*' type='text'/>
            </Input>
            <Input>
              <input placeholder='Телефон*' type='text'/>
            </Input>
            <Input>
              <textarea placeholder='Ваш вопрос*'/>
            </Input>
            <Button>Отправить вопрос</Button>
          </Subscribe>
          <Help>
            <h3>Возник вопрос?<br/>Задайте его нам!<br/>Принимаем заявки!</h3>
            <span>Вы можете позвонить нам, мы ждем</span>
            <strong>8 928 522-99-90</strong>
          </Help>
        </Content>
      </Wrapper>
    )
  }
}

