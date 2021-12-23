import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {
  Checkbox,
  Container,
  Heading,
  Input,
  SecureTextEntryIcon,
} from '~components/atom';
import {AppTheme} from '~constants';
import {AuthNavProps} from '../AuthParamList';

export default function SignUpScreen({}: AuthNavProps<'SignUpScreen'>) {
  const backgroundImage = require('src/assets/keleya-challenge-assets/authentication-background-image.jpg');
  const [privacyPolicyCheckboxChecked, setprivacyPolicyCheckboxChecked] =
    useState(false);

  const onPrivacyPolicyCheckboxChanged = () => {
    setprivacyPolicyCheckboxChecked(!privacyPolicyCheckboxChecked);
  };
  const [isTextEntrySecured, setisTextEntrySecured] = useState(true);

  const onSecureTextEntryChanged = () => {
    setisTextEntrySecured(!isTextEntrySecured);
  };

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
    paddingVertical: AppTheme.spacing.xs,
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
