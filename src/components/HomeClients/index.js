import React, { PureComponent } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  background-color: #fff;
  padding: 80px 0;

  & > .wrapper {
    max-width: 1280px;
    margin: auto;
  }

  h2 {
    margin: 0;
    text-align: center;
    font-size: 38px;
    font-family: 'Roboto';
    padding: 30px 0;
  }

  .slick-slide {
    height: auto;
  }

  .slick-next:before {
    background-image: url('/svg/baseline-keyboard_arrow_right-24px.svg');
    content: ''!important;
    width: 24px;
    height: 24px;
    display: block;
    background-size: 36px;
    background-position: center;
    background-repeat: no-repeat;
  }

  .slick-prev:before {
    background-image: url('/svg/baseline-keyboard_arrow_left-24px.svg');
    content: ''!important;
    width: 24px;
    height: 24px;
    display: block;
    background-size: 36px;
    background-position: center;
    background-repeat: no-repeat;
  }
`

const Item = styled(Link)`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;

  img {
    min-width: 100px;
    min-height: 40px;
    display: none;
  }

  div {
    width: 160px;
    height: 40px;
    background-color: #eee;
  }
`

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  )
}

export default class HomeClients extends PureComponent {
  render () {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }

    return (
      <Wrapper>
        <div className='wrapper'>
        <h2>Наши клиенты</h2>
          <Slider {...settings}>
            <div>
              <Item to='/'>
                <img src='/img/clients/' />
                <div/>
              </Item>
            </div>
            <div>
              <Item to='/'>
                <img src='/img/clients/' />
                <div/>
              </Item>
            </div>
            <div>
              <Item to='/'>
                <img src='/img/clients/' />
                <div/>
              </Item>
            </div>
            <div>
              <Item to='/'>
                <img src='/img/clients/' />
                <div/>
              </Item>
            </div>
            <div>
              <Item to='/'>
                <img src='/img/clients/' />
                <div/>
              </Item>
            </div>
            <div>
              <Item to='/'>
                <img src='/img/clients/' />
                <div/>
              </Item>
            </div>
            <div>
              <Item to='/'>
                <img src='/img/clients/' />
                <div />
              </Item>
            </div>
            <div>
              <Item to='/'>
                <img src='/img/clients/' />
                <div />
              </Item>
            </div>
          </Slider>
        </div>
      </Wrapper>
    )
  }
}
