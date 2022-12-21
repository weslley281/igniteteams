import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';

export function Goups() {
  const [groups, setGroups] = useState<string[]>([
    'Galera da Rocketseat',
    'Companheiros',
  ]);

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length == 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" />
    </Container>
  );
}
