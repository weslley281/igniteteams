import { ButtonIcon } from '@components/ButonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Input } from '@components/Input';
import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Form } from './styles';

export function Players() {
  const [team, setTeam] = useState('Time A');

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

      <FlatList
        data={['Time A', 'Time B']}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Filter
            key={item}
            title="Time A"
            isActive={item === team}
            onPress={() => setTeam(item)}
          />
        )}
        horizontal
      />
    </Container>
  );
}
