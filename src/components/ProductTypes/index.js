import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 120px 0;
  background-color: #f9f9f9;

  .title {
    font-family: 'PT Serif Caption';
    font-size: 36px;
    text-transform: uppercase;
    margin-bottom: 70px;
  }

  .elements {
    max-width: 1280px;
    margin: auto;
  }
`;

const Row = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  background-color: #eee;
  height: 200px;
  flex: 1;
  margin-bottom: 30px;
  margin-right: 30px;
  box-sizing: border-box;
  background-position: bottom right;
  background-size: cover;

  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.row &&
    `
    display: flex;
    background: none;
  `}

  ${(props) =>
    props.src &&
    `
    background-image: url(${props.src});
  `}
`;

const LinkWrapper = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: block;
  text-decoration: none;
  color: #000;
`;

const Title = styled.h2`
  font-family: 'PT Serif';
  font-weight: normal;
  font-size: 19px;
  margin: 0;
  padding: 0;
  z-index: 3;
  position: relative;

  &::after {
    width: 40px;
    height: 1px;
    background-color: red;
    content: '';
    display: block;
    margin-top: 17px;
    z-index: 2;
  }
`;

export default class ProductTypes extends PureComponent {
  render() {
    return (
      <Wrapper>
        <div className="elements">
          <h2 className="title">Оборудование</h2>
          <Row>
            <Item src="/img/categories/lift-1.png">
              <LinkWrapper to="/">
                <Title>
                  Пассажирские
                  <br />
                  лифты
                </Title>
              </LinkWrapper>
            </Item>
            <Item src="/img/categories/lift-2.png">
              <LinkWrapper to="/">
                <Title>
                  Грузовые
                  <br />
                  лифты
                </Title>
              </LinkWrapper>
            </Item>
            <Item row>
              <Item src="/img/categories/lift-3.png">
                <LinkWrapper to="/">
                  <Title>
                    Коттеджные
                    <br />
                    лифты
                  </Title>
                </LinkWrapper>
              </Item>
              <Item src="/img/categories/lift-4.png">
                <LinkWrapper to="/">
                  <Title>
                    Малые
                    <br />
                    грузовые
                  </Title>
                </LinkWrapper>
              </Item>
            </Item>
          </Row>
          <Row>
            <Item row>
              <Item src="/img/categories/lift-5.png">
                <LinkWrapper to="/">
                  <Title>
                    Панорамные
                    <br />
                    лифты
                  </Title>
                </LinkWrapper>
              </Item>
              <Item src="/img/categories/lift-6.png">
                <LinkWrapper to="/">
                  <Title>
                    Больничные
                    <br />
                    лифты
                  </Title>
                </LinkWrapper>
              </Item>
            </Item>
            <Item src="/img/categories/lift-7.png">
              <LinkWrapper to="/">
                <Title>Эскалаторы</Title>
              </LinkWrapper>
            </Item>
            <Item src="/img/categories/lift-8.png">
              <LinkWrapper to="/">
                <Title>Травалаторы</Title>
              </LinkWrapper>
            </Item>
          </Row>
          <Row>
            <Item src="/img/categories/lift-9.png">
              <LinkWrapper to="/">
                <Title>
                  Грузовые
                  <br />
                  подъемники
                </Title>
              </LinkWrapper>
            </Item>
            <Item src="/img/categories/lift-10.png">
              <LinkWrapper to="/">
                <Title>
                  Комплектующие
                  <br />
                  для лифтов
                </Title>
              </LinkWrapper>
            </Item>
            <Item row>
              <Item src="/img/categories/lift-11.png">
                <LinkWrapper to="/">
                  <Title>
                    Конструкции
                    <br />
                    лифтов
                  </Title>
                </LinkWrapper>
              </Item>
              <Item src="/img/categories/lift-12.png">
                <LinkWrapper to="/">
                  <Title>
                    Собственное
                    <br />
                    производство
                  </Title>
                </LinkWrapper>
              </Item>
            </Item>
          </Row>
        </div>
      </Wrapper>
    );
  }
}
