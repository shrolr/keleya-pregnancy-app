import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, View} from 'react-native';
import {AppTheme} from '~constants';
import {Heading} from './Heading';
const logoImage = require('../../assets/keleya-challenge-assets/keleya-logo.png');

export const KeleyeBanner: React.FC = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImage} />
      <Heading text={t('welcomeScreen:TITLE')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 75,
    height: 100,
    resizeMode: 'contain',
    marginBottom: AppTheme.spacing.xs,
  },
});
