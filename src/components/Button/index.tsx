import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonTypeStyleProps, Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
}
export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
