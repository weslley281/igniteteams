import React, { useState } from 'react';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Input } from '@components/Input';

import { Container, Content, Icon } from './styles';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';

export function NewGroup() {
  const { navigate } = useNavigation();
  const [group, setGroup] = useState('');

  async function handleNew() {
    try {
      await groupCreate(group);
      navigate('players', { group });
    } catch (error) {
      console.log(error);
    }
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

        <Input placeholder="Nome da Turma" onChangeText={setGroup} />

        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
