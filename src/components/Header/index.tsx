import React from 'react';
import logoImg from '@assets/logo.png';
import { BackIcon, Container, Logo } from './styles';

export function Header() {
  return (
    <Container>
      <BackIcon />
      <Logo source={logoImg} />
    </Container>
  );
}
