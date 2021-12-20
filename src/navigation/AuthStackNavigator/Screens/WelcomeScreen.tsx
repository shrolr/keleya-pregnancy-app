import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ButtonStyled} from '~components/Atom';
import {AuthNavProps} from '../AuthParamList';

export default function WelcomeScreen({}: AuthNavProps<'WelcomeScreen'>) {
  return (
    <View style={styles.container}>
      <Image
        testID="welcomeBg"
        source={require('src/assets/keleya-challenge-assets/first-intro-image.png')}
        style={styles.initalBg}
      />
      <ButtonStyled
        variant="solid"
        text="Get started"
        testID="getStartedButton"
      />
      <ButtonStyled variant="outlined" text="Or login" testID="loginButton" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  initalBg: {
    flex: 1,
  },
});
