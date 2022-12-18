import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { ButtonIcon } from '@components/ButonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Input } from '@components/Input';
import { PlayerCard } from '@components/PlayerCard';

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([
    'Vampeta',
    'Poderosomelhor',
    'FadaLoka',
  ]);

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

      <HeaderList>
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
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
      />
    </Container>
  );
}
