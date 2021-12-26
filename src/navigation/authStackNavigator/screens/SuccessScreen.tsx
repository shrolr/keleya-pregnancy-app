import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {ButtonStyled, Container, Heading} from '~components/atom';
import {AppTheme} from '~constants';
import {AuthNavProps} from '../AuthParamList';

export default function SuccessScreen({}: AuthNavProps<'SuccessScreen'>) {
  const backgroundImage = require('src/assets/keleya-challenge-assets/notifications-background-image.jpg');
  const iconImage = require('src/assets/icons/bell.png');

  return (
    <View style={styles.container}>
      <ImageBackground
        testID="successScreen"
        source={backgroundImage}
        style={styles.initalBg}>
        <Container style={styles.iconContainer}>
          <Image style={styles.icon} source={iconImage} />
          <Heading text="Get notifications to boost your motivation" />
        </Container>
        <Container style={styles.buttonContainer}>
          <ButtonStyled variant="outlined" text="Skip" />
          <ButtonStyled
            variant="solid"
            text="Allow Notifications"
            testID="getStartedButton"
          />
        </Container>
      </ImageBackground>
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
    width: Dimensions.get('screen').width,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: AppTheme.spacing.l,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: AppTheme.spacing.m,
  },
  iconContainer: {
    marginTop: AppTheme.spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
