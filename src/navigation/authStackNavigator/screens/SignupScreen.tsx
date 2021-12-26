import React, {Dispatch, useEffect, useState} from 'react';
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
  Checkbox,
  Container,
  Heading,
  Input,
  SecureTextEntryIcon,
} from '~components/atom';
import {AppTheme} from '~constants';
import {UserAction} from '~redux/actionTypes';
import {EmailValidator} from '~utils';
import {AuthNavProps} from '../AuthParamList';
import {useDispatch, useSelector} from 'react-redux';
import {RedusxAppState} from '~redux/reducers';

const backgroundImage = require('src/assets/keleya-challenge-assets/authentication-background-image.jpg');
export default function SignUpScreen({
  navigation,
}: AuthNavProps<'SignUpScreen'>) {
  const dispatch = useDispatch<Dispatch<UserAction>>();
  const {isAuthenticated, isRegistrationInProgress} = useSelector(
    (state: RedusxAppState) => state.user,
  );
  const [createAccountButtonEnabled, setcreateAccountButtonEnabled] =
    useState(true);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [emailInputError, setemailInputError] = useState(false);
  const [privacyPolicyCheckboxChecked, setprivacyPolicyCheckboxChecked] =
    useState(false);
  const [isTextEntrySecured, setisTextEntrySecured] = useState(true);

  const [
    termsAndConditionsCheckboxChecked,
    settermsAndConditionsCheckboxChecked,
  ] = useState(false);
  const onPrivacyPolicyCheckboxChanged = () => {
    Keyboard.dismiss();
    setprivacyPolicyCheckboxChecked(!privacyPolicyCheckboxChecked);
  };
  const onTermsAndConditionsCheckboxChanged = () => {
    Keyboard.dismiss();
    settermsAndConditionsCheckboxChecked(!termsAndConditionsCheckboxChecked);
  };
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
  const onCreateAccountPressed = () => {
    dispatch({type: 'REGISTER', registerRequest: {email, password}});
  };
  useEffect(() => {
    setcreateAccountButtonEnabled(
      privacyPolicyCheckboxChecked &&
        termsAndConditionsCheckboxChecked &&
        email.length > 0 &&
        !emailInputError &&
        password.length > 0 &&
        !isRegistrationInProgress,
    );
  }, [
    privacyPolicyCheckboxChecked,
    termsAndConditionsCheckboxChecked,
    emailInputError,
    password,
    email,
    isRegistrationInProgress,
  ]);
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('NameScreen');
    }
  }, [navigation, isAuthenticated]);
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
            <Heading
              testID="getStartedTitle"
              text="Add your details below to set up an account"
            />
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
            <View style={styles.checkboxContainer}>
              <Checkbox
                onPress={onPrivacyPolicyCheckboxChanged}
                checked={privacyPolicyCheckboxChecked}
                testID="privacyPolicyCheckbox"
              />
              <Text style={styles.checkboxLabel}>
                I`ve read the
                <Text style={styles.checkboxStrongLabel}> privacy policy</Text>
              </Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                onPress={onTermsAndConditionsCheckboxChanged}
                checked={termsAndConditionsCheckboxChecked}
                testID="termsAndConditionsCheckbox"
              />
              <Text style={styles.checkboxLabel}>
                I accept the
                <Text style={styles.checkboxStrongLabel}>
                  {' '}
                  {'terms & conditions '}
                </Text>
                and
                <Text style={styles.checkboxStrongLabel}> Keleya`s advice</Text>
              </Text>
            </View>
            <View style={styles.createAccountContainer}>
              <ButtonStyled
                onPress={onCreateAccountPressed}
                testID="createAccountButton"
                variant="solid"
                text="Create Account"
                disabled={!createAccountButtonEnabled}
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
