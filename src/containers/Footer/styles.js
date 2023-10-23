import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #fff;
  padding-top: 60px;
`

export const FirstFooter = styled.div`
  width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`

export const Company = styled.div`
  width: 260px;
`

export const Logo = styled.div`
  background-image: url('/img/black-logo.png');
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 35px;
  margin-bottom: 30px;
`

export const Description = styled.div`
  font-size: 13px;
  line-height: 18px;
`

export const SocialShare = styled.div`

`

export const NavItem = styled.div`
  width: 200px;

  h4 {
    text-transform: uppercase;
    font-size: 14px;
    margin: 5px 0 30px;
    padding: 0;
    font-weight: 500;
  }

  a {
    font-size: 14px;
    display: block;
    color: #000;
    text-decoration: none;
    margin-bottom: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Contact = styled.div`

`

export const Phone = styled.div`
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 30px;

  img {
    margin-right: 10px;
    position: relative;
    top: 3px;
  }
`

export const MapItem = styled.div`
  margin-bottom: 10px;

  span {
    font-size: 14px;
  }

  img {
    margin-right: 10px;
    position: relative;
    top: 1px;
  }
`

export const Day = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: flex-start;

  span {
    font-size: 14px;
    line-height: 20px;
  }

  img {
    margin-right: 10px;
    position: relative;
    top: 4px;
  }
`

export const LinkContact = styled.div`
  margin-top: 50px;

  a {
    color: #999;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      color: #999;
    }
  }
`

export const LastFooter = styled.div`
  display: flex;
  width: 1280px;
  margin: auto;
  border-top: 1px solid #eee;
  padding: 30px 0;
  margin-top: 30px;
  justify-content: space-between;

  p {
    font-size: 14px;
    line-height: 20px;

    span {
      display: block;
      color: #999;
    }
  }
`

export const Febox = styled.div`
  a {
    text-decoration: none;
  
    .cls-1{
      opacity: .35;
      fill: #000;
    }

    svg {
      width: 41px;
      height: 41px;
      fill: #000;
    }

    strong {
      margin-top: 10px;
      font-weight: normal;
      display: block;
      font-size: 12px;
      color: #999;
      text-decoration: none;
      line-height: 18px;

      span {
        color: red;
      }
    }
  }
`
