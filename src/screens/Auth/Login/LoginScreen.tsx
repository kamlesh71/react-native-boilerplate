import React from 'react';
import { AppStackScreenProps } from '@/navigation/types';
import { Button, TextInput } from 'react-native-paper';
import { Spacer, Container } from '@/components';
import { styles } from './styles';
import { ColorSchemaPicker } from '@/components/ColorSchemaPicker';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthLoading } from '@/store/auth/selectors';
import { loginSagaAction } from '@/store/auth/actions';

const LoginScreen: React.FC<AppStackScreenProps<'Login'>> = ({
  navigation,
}) => {
  const loading = useSelector(selectAuthLoading);
  const dispatch = useDispatch();

  return (
    <Container style={styles.container}>
      <TextInput label="Email" />

      <Spacer vertical={20} />

      <TextInput label="Password" secureTextEntry />

      <Spacer vertical={20} />

      <Button
        onPress={() =>
          dispatch(
            loginSagaAction({
              email: 'kamlesh@example.com',
              password: '123456',
            }),
          )
        }
        loading={loading}
        disabled={loading}
        mode="contained">
        Login
      </Button>

      <Spacer vertical={40} />

      <Button onPress={() => navigation.push('Register')}>
        Create an Account
      </Button>

      <Spacer vertical={80} />

      <ColorSchemaPicker />
    </Container>
  );
};

export default LoginScreen;
