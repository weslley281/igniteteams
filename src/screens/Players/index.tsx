import { ButtonIcon } from '@components/ButonIcon';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import React from 'react';

import { Container } from './styles';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <HighLight
        title="Nome da turma"
        subtitle="Adcione a galera e prepare os times"
      />

      <ButtonIcon />
    </Container>
  );
}
