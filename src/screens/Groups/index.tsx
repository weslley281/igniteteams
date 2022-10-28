import { Header } from '@components/Header';
import React from 'react';

import { Container, Title } from './styles';

export function Goups() {
  return (
    <Container>
      <Header showBackButton={false} />
      <Title>Groops</Title>
    </Container>
  );
}
