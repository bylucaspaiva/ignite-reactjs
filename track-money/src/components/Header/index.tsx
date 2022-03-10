import { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import { Container, Content, TitleLogo } from './styles'
import Modal from 'react-modal'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header ({onOpenNewTransactionModal}: HeaderProps) {
  

  return (
    <Container>
      <Content>
        <TitleLogo>
          <img src={logoImg} alt="track money" />
          <h1>Track Money</h1>
        </TitleLogo>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
        
      </Content>
      
    </Container>
  )
}