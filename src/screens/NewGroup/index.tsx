import React, { useState } from 'react';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Input } from '@components/Input';

import { Container, Content, Icon } from './styles';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export function NewGroup() {
  const { navigate } = useNavigation();
  const [group, setGroup] = useState('');

  async function handleNew() {
    try {
      if (group.length > 0 && group.trim().length > 0) {
        await groupCreate(group);
        navigate('players', { group });
      } else {
        return Alert.alert('Novo Grupo', 'Informe uma turma');
      }
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Erro no Cadastro', error.message);
      } else {
        Alert.alert(
          'Erro no Cadastro',
          'Não foi possivel cadastrar\nContate o Desenvolvedor'
        );
      }
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
