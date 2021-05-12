import styled from 'styled-components'

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
  font-weight: normal;

  span {
    font-weight: bold;
  }
`

export function App() {
  return (
    <div className="App">
      <Title className="title">
        Hello <span>World</span>
      </Title>
    </div>
  )
}
