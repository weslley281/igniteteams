import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import React from 'react';

import { Container } from './styles';

export function Goups() {
  return (
    <Container>
      <Header showBackButton={false} />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  );
}
