import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {ButtonStyled, Dots, KeleyeBanner} from '~components/Atom';
import {AppColors} from '~constants';
import {AuthNavProps} from '../AuthParamList';

export default function WelcomeScreen({}: AuthNavProps<'WelcomeScreen'>) {
  return (
    <View style={styles.container}>
      <ImageBackground
        testID="welcomeBg"
        source={require('src/assets/keleya-challenge-assets/first-intro-image.png')}
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
    backgroundColor: AppColors.WHITE,
  },
  initalBg: {
    flex: 1,
    paddingTop: 20,
    width: Dimensions.get('screen').width,
  },
});
