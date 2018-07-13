import React from 'react'
import styled from 'styled-components'

export default ({ items }) => {
  const elements = items.map((item, i) =>
    <Item key={i}>
      <Link href={item.url}>
        {item.img
          ? <Icon src='' />
          : <IconText>{item.textLogo}</IconText>
        }
        <Title>{item.title}</Title>
      </Link>
    </Item>
  )

  return (
    <Wrapper>
      {elements}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 820px;
  margin: auto;
  flex-flow: row wrap;
`

const Item = styled.div`
  width: 82px;
  margin-bottom: 10px;
  text-align: center;
  flex-basis: calc(100%/6);

  @media (max-width: 1024px) {
    flex-basis: calc(100%/5);
  }

  @media (max-width: 767px) {
    flex-basis: calc(100%/4);
  }

  @media (max-width: 540px) {
    flex-basis: calc(100%/3);
  }
`

const Icon = styled.div`
  width: 72px;
  height: 72px;
  margin: auto;
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0px 2px 15px -5px #31313173; 
`

const IconText = styled.div`
  width: 72px;
  height: 72px;
  margin: auto;
  border-radius: 4px;
  background-color: #DEDEDE;
  box-shadow: 0px 2px 15px -5px #31313173;
  color: #fff;
  text-align: center;
  line-height: 72px; 
  font-size: 39px;
  font-weight: 300;
  text-transform: uppercase;
`

const Link = styled.a`
  text-decoration: none;
  cursor: default;
`

const Title = styled.p`
  height: 26px;
  line-height: 14px;
  font-size: 11.4px;
  text-align: center;
  margin: 9px auto;
  max-width: 92px;
  color: #333;
  outline: none;
`
