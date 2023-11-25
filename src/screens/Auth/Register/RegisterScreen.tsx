import React from 'react';
import { AppStackScreenProps } from '@/navigation/types';
import { Button, TextInput } from 'react-native-paper';
import { Spacer, Container } from '@/components';
import { styles } from './styles';

const RegisterScreen: React.FC<AppStackScreenProps<'Register'>> = ({
  navigation,
}) => {
  return (
    <Container style={styles.container}>
      <TextInput label="Name" left={<TextInput.Icon icon="account" />} />
      <Spacer vertical={20} />

      <TextInput label="Email" left={<TextInput.Icon icon="email" />} />
      <Spacer vertical={20} />

      <TextInput
        label="Password"
        secureTextEntry
        left={<TextInput.Icon icon="lock" />}
      />
      <Spacer vertical={20} />

      <Button mode="contained">Create Account</Button>
      <Spacer vertical={40} />

      <Button onPress={() => navigation.push('Login')}>Sign In</Button>
    </Container>
  );
};

export default RegisterScreen;
