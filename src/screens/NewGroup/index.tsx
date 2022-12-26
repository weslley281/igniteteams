import React from 'react';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Input } from '@components/Input';

import { Container, Content, Icon } from './styles';
import { useNavigation } from '@react-navigation/native';

export function NewGroup() {
  const { navigate } = useNavigation();

  function handleNew() {
    navigate('players', { group: 'Rocket' });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <HighLight
          title="Nova turma"
          subtitle="crie a turma para adicionar pessoas"
        />

        <Input placeholder="Nome da Turma" />

        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
