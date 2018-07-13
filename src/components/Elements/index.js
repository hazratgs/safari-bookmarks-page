import React from 'react'
import styled from 'styled-components'

export default ({ items }) => {
  const elements = items.map((item, i) =>
    <Item key={i}>
      <Link href={item.url}>
        <Icon src='' />
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

  @media (min-width: 820px) {
    flex-basis: calc(100%/6);
  }

  @media (max-width: 800px) {
    flex-basis: 20%;
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
  box-shadow: 0px 5px 14px -5px rgba(111, 116, 114, 0.7); 
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
`
