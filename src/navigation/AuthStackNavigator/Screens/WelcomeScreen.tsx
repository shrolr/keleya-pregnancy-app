import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ButtonOutlined} from '~components/Atom/ButtonOutlined';
import {ButtonSolid} from '~components/Atom/ButtonSolid';
import {AuthNavProps} from '../AuthParamList';

export default function WelcomeScreen({}: AuthNavProps<'WelcomeScreen'>) {
  return (
    <View style={styles.container}>
      <Image
        testID="welcomeBg"
        source={require('src/assets/keleya-challenge-assets/first-intro-image.png')}
        style={styles.initalBg}
      />
      <ButtonSolid text="Get started" testID="getStartedButton" />
      <ButtonOutlined text="Or login" testID="loginButton" />
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
