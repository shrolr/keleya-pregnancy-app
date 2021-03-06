import React from 'react';
import {useTranslation} from 'react-i18next';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {ButtonStyled, Container, Dots, KeleyeBanner} from '~components/atom';
import {AppTheme} from '~constants';
import {AuthNavProps} from '../AuthParamList';

const backgroundImage = require('src/assets/keleya-challenge-assets/first-intro-image.png');

export default function WelcomeScreen({
  navigation,
}: AuthNavProps<'WelcomeScreen'>) {
  const {t} = useTranslation();

  const onGetStartedButtonPress = () => {
    navigation.navigate('SignUpScreen');
  };
  const onLoginButtonPress = () => {
    navigation.navigate('SignInScreen');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        testID="welcomeBg"
        source={backgroundImage}
        style={styles.initalBg}>
        <KeleyeBanner />
      </ImageBackground>
      <Container>
        <ButtonStyled
          onPress={onGetStartedButtonPress}
          variant="solid"
          text={t('welcomeScreen:GETSTARTEDBUTTON')}
          testID="getStartedButton"
        />
        <ButtonStyled
          onPress={onLoginButtonPress}
          variant="outlined"
          text={t('welcomeScreen:ORLOGINBUTTON')}
          testID="loginButton"
        />
        <Dots />
      </Container>
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
