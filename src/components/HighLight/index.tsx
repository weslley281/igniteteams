import React from 'react';

import { Container, SubTitle, Title } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

export function HighLight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
