import React from 'react';
import logoImg from '@assets/logo.png';
import { BackButton, BackIcon, Container, Logo } from './styles';

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  function handleGoBack() {}

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
