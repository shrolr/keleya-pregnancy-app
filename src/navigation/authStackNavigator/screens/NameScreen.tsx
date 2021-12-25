import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  ArrowBackButton,
  ButtonStyled,
  Container,
  Heading,
  Input,
} from '~components/atom';
import {AppTheme} from '~constants';
import {AuthNavProps} from '../AuthParamList';

const headerImage = require('../../../assets/keleya-modified-assets/couch_smile_modified.png');
export default function NameScreen({navigation}: AuthNavProps<'NameScreen'>) {
  const [name, setname] = useState('');

  const onChangeName = (nameText: string) => {
    setname(nameText);
  };
  const onArrowBackButtonPressed = () => {
    navigation.goBack();
  };
  const onContinueButtonPressed = () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardWrapper}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View testID="nameScreen" style={styles.wrapper}>
          <ArrowBackButton onPress={onArrowBackButtonPressed} />
          <Image
            resizeMode="cover"
            source={headerImage}
            style={styles.headerImage}
          />
          <Container style={styles.container}>
            <Heading text="It`s great that you`re here! First things first, what should we call you?" />
            <Input
              testID="nameInput"
              placeholder="Your Name"
              onChangeText={onChangeName}
            />

            <View style={styles.createAccountContainer}>
              <ButtonStyled
                onPress={onContinueButtonPressed}
                testID="continueAccountButton"
                variant="solid"
                text="Continue"
                disabled={!(name.length > 0)}
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
    flex: 1,
  },
  keyboardWrapper: {
    flexGrow: 1,
  },
  headerImage: {
    flex: 1.8,
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
