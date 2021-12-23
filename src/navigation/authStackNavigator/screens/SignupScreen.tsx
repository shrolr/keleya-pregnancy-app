import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {
  ButtonStyled,
  Checkbox,
  Container,
  Heading,
  Input,
  SecureTextEntryIcon,
} from '~components/atom';
import {AppTheme} from '~constants';
import {AuthNavProps} from '../AuthParamList';

const backgroundImage = require('src/assets/keleya-challenge-assets/authentication-background-image.jpg');
export default function SignUpScreen({}: AuthNavProps<'SignUpScreen'>) {
  const [createAccountButtonDisabled, setcreateAccountButtonDisabled] =
    useState(true);
  const [email, setemail] = useState('');
  const [privacyPolicyCheckboxChecked, setprivacyPolicyCheckboxChecked] =
    useState(false);
  const [isTextEntrySecured, setisTextEntrySecured] = useState(true);

  const [
    termsAndConditionsCheckboxChecked,
    settermsAndConditionsCheckboxChecked,
  ] = useState(false);
  const onPrivacyPolicyCheckboxChanged = () => {
    setprivacyPolicyCheckboxChecked(!privacyPolicyCheckboxChecked);
  };
  const onTermsAndConditionsCheckboxChanged = () => {
    settermsAndConditionsCheckboxChecked(!termsAndConditionsCheckboxChecked);
  };
  const onSecureTextEntryChanged = () => {
    setisTextEntrySecured(!isTextEntrySecured);
  };
  const onChangeEmailInput = (text: string) => {
    setemail(text);
  };
  useEffect(() => {
    setcreateAccountButtonDisabled(
      privacyPolicyCheckboxChecked && termsAndConditionsCheckboxChecked,
    );
  }, [privacyPolicyCheckboxChecked, termsAndConditionsCheckboxChecked, email]);

  return (
    <View style={styles.container}>
      <Image
        testID="headerImage"
        source={backgroundImage}
        style={styles.headerImage}
      />
      <Container>
        <Heading
          testID="getStartedTitle"
          text="Add your details below to set up an account"
        />
        <Input
          keyboardType="email-address"
          testID="emailInput"
          placeholder="example@gmail.com"
          onChangeText={onChangeEmailInput}
        />
        <Input
          secureTextEntry={isTextEntrySecured}
          testID="passwordInput"
          placeholder="Enter a password"
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
        <ButtonStyled
          testID="createAccountButton"
          variant="solid"
          text="Create Account"
          disabled={createAccountButtonDisabled}
        />
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.colors.WHITE,
  },
  headerImage: {
    marginBottom: -AppTheme.spacing.xl,
    width: Dimensions.get('screen').width,
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
  checkboxStrongLabel: {
    fontWeight: 'bold',
    ...AppTheme.textVariants.body,
  },
});
