import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {ButtonStyled, Dots, KeleyeBanner} from '~components/Atom';
import {AppTheme} from '~constants';
import {AuthNavProps} from '../AuthParamList';

export default function WelcomeScreen({}: AuthNavProps<'WelcomeScreen'>) {
  const backgroundImage = require('src/assets/keleya-challenge-assets/first-intro-image.png');
  return (
    <View style={styles.container}>
      <ImageBackground
        testID="welcomeBg"
        source={backgroundImage}
        style={styles.initalBg}>
        <KeleyeBanner />
      </ImageBackground>
      <ButtonStyled
        variant="solid"
        text="Get started"
        testID="getStartedButton"
      />
      <ButtonStyled variant="outlined" text="Or login" testID="loginButton" />
      <Dots />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.colors.WHITE,
  },
  initalBg: {
    flex: 1,
    paddingTop: AppTheme.spacing.l,
    width: Dimensions.get('screen').width,
  },
});
