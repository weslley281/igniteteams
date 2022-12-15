import { ButtonIcon } from '@components/ButonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Input } from '@components/Input';
import React from 'react';

import { Container, Form } from './styles';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <HighLight
        title="Nome da turma"
        subtitle="Adcione a galera e prepare os times"
      />

      <Form>
        <Input placeholder="Nome da Pesssoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>

      <Filter title="Time A" isActive />
    </Container>
  );
}
