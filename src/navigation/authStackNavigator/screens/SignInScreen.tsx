import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  ArrowBackButton,
  ButtonStyled,
  Container,
  Heading,
  Input,
  SecureTextEntryIcon,
} from '~components/atom';
import {AppTheme} from '~constants';
import {EmailValidator} from '~utils';
import {AuthNavProps} from '../AuthParamList';

const backgroundImage = require('src/assets/keleya-challenge-assets/authentication-background-image.jpg');
export default function SignInScreen({
  navigation,
}: AuthNavProps<'SignInScreen'>) {
  const [loginButtonEnabled, setloginButtonEnabled] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [emailInputError, setemailInputError] = useState(false);
  const [isTextEntrySecured, setisTextEntrySecured] = useState(true);

  const onSecureTextEntryChanged = () => {
    setisTextEntrySecured(!isTextEntrySecured);
  };
  const onChangeEmailInput = (emailText: string) => {
    if (!EmailValidator(emailText)) {
      setemailInputError(true);
    } else {
      setemailInputError(false);
    }
    setemail(emailText);
  };
  const onChangePasswordInput = (passwordText: string) => {
    setpassword(passwordText);
  };
  const onArrowBackButtonPressed = () => {
    navigation.goBack();
  };
  const onLoginPressed = () => {
    navigation.navigate('SuccessScreen');
  };
  useEffect(() => {
    setloginButtonEnabled(
      email.length > 0 && !emailInputError && password.length > 0,
    );
  }, [emailInputError, password, email]);

  return (
    <KeyboardAvoidingView
      enabled={false}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardWrapper}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <ArrowBackButton onPress={onArrowBackButtonPressed} />
          <Image
            resizeMode="cover"
            testID="headerImage"
            source={backgroundImage}
            style={styles.headerImage}
          />
          <Container style={styles.container}>
            <Heading testID="Login Title" text="Welcome back!" />
            <Input
              autoCapitalize="none"
              keyboardType="email-address"
              testID="emailInput"
              placeholder="example@gmail.com"
              onChangeText={onChangeEmailInput}
            />
            {email.length > 0 && emailInputError && (
              <Text style={styles.wrongEmailLabel}>
                Please enter a valid email address
              </Text>
            )}
            <Input
              secureTextEntry={isTextEntrySecured}
              testID="passwordInput"
              placeholder="Enter a password"
              onChangeText={onChangePasswordInput}
              rightIcon={
                <SecureTextEntryIcon
                  checked={isTextEntrySecured}
                  onPress={onSecureTextEntryChanged}
                />
              }
            />
            <View style={styles.createAccountContainer}>
              <ButtonStyled
                variant="outlined"
                text="Have you forgotten your password?"
              />
              <ButtonStyled
                onPress={onLoginPressed}
                testID="loginButton"
                variant="solid"
                text="Login"
                disabled={!loginButtonEnabled}
              />
            </View>
          </Container>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: AppTheme.spacing.l,
    flex: 1,
    backgroundColor: AppTheme.colors.WHITE,
  },
  container: {
    flex: 1.7,
  },
  keyboardWrapper: {
    flexGrow: 1,
  },
  headerImage: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  checkboxContainer: {
    marginTop: AppTheme.spacing.s,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    paddingLeft: AppTheme.spacing.s,
    ...AppTheme.textVariants.body,
  },
  wrongEmailLabel: {
    color: AppTheme.colors.DANGER,
    padding: AppTheme.spacing.s,
    ...AppTheme.textVariants.info,
  },
  checkboxStrongLabel: {
    fontWeight: 'bold',
    ...AppTheme.textVariants.body,
  },
  createAccountContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 30,
  },
});
