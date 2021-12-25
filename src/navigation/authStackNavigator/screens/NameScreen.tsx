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
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {
  ArrowBackButton,
  ButtonStyled,
  Container,
  Heading,
  Input,
} from '~components/atom';
import {AppTheme} from '~constants';
import {UserAction} from '~redux/actionTypes';
import {RedusxAppState} from '~redux/reducers';
import {AuthNavProps} from '../AuthParamList';

const headerImage = require('../../../assets/keleya-modified-assets/couch_smile_modified.png');
export default function NameScreen({navigation}: AuthNavProps<'NameScreen'>) {
  const dispatch = useDispatch<Dispatch<UserAction>>();
  const [name, setname] = useState('');
  const {user} = useSelector((state: RedusxAppState) => state.user);
  const onChangeName = (nameText: string) => {
    setname(nameText);
  };
  const onArrowBackButtonPressed = () => {
    navigation.goBack();
  };
  const onContinueButtonPressed = () => {
    if (user) {
      dispatch({type: 'UPDATE_USER_INFO', user: {...user, name}});
      navigation.navigate('DateScreen');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardWrapper}>
      <TouchableWithoutFeedback
        testID="keyboardDismisser"
        onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <ArrowBackButton onPress={onArrowBackButtonPressed} />
          <Image
            testID="nameScreenHeaderImage"
            resizeMode="stretch"
            source={headerImage}
            style={styles.headerImage}
          />
          <Container style={styles.container}>
            <Heading text="It`s great that you`re here! First things first, what should we call you?" />
            <Input
              testID="nameInput"
              autoCapitalize="sentences"
              placeholder="Your Name"
              onChangeText={onChangeName}
            />

            <View style={styles.buttonContainer}>
              <ButtonStyled
                onPress={onContinueButtonPressed}
                testID="continueButton"
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
    flex: 1.7,
    width: Dimensions.get('window').width,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 30,
  },
});
