import React, { useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { ButtonIcon } from '@components/ButonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Input } from '@components/Input';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';

interface RouteParams {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([
    'Vampeta',
    'Poderosomelhor',
    'FadaLoka',
    'Destruidor38',
    'VacaLoka',
    'CheraMeuPa*',
    'Fodao99',
    'DetruidorGama',
  ]);
  const { params } = useRoute();
  const { group } = params as RouteParams;

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova Pessoa', 'Informe o nome da pessoa');
    }
    const newPlayer = { name: newPlayerName, team };

    try {
      await playerAddByGroup(newPlayer, group);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Pessoa', error.message);
      }
      Alert.alert('Nova Pessoa', 'Não foi possivel adcionar');
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <HighLight title={group} subtitle="Adcione a galera e prepare os times" />

      <Form>
        <Input
          placeholder="Nome da Pesssoa"
          autoCorrect={false}
          onChangeText={handleAddPlayer}
        />

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
          ListEmptyComponent={() => (
            <ListEmpty message="Não há grupos cadastrado" />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 50 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
}
