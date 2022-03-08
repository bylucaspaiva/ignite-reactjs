import logoImg from '../../assets/logo.svg'
import {Container, Content, TitleLogo } from './styles'


export function Header () {
  return (
    <Container>
      <Content>
        <TitleLogo>
          <img src={logoImg} alt="track money" />
          <h1>Track Money</h1>
        </TitleLogo>
        <button type="button">
          Nova Transação
        </button>
      </Content>
      
    </Container>
  )
}